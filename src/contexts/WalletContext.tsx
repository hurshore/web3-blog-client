import { createContext, useEffect, useState } from 'react';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { ethers } from 'ethers';

import { CHAIN_ID, StorageKeys } from '@/constants';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

type WalletContextType = {
  currentAccount: string | null;
  connectWallet: () => void;
};

const initialState: WalletContextType = {
  currentAccount: null,
  connectWallet: () => {},
};

type Props = {
  children: React.ReactNode;
};

export const WalletContext = createContext<WalletContextType>(initialState);
const storageValue = 'inject';

const WalletProvider: React.FC<Props> = ({ children }: Props) => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);

  useEffect(() => {
    if (!window.ethereum?.isConnected) return;
    if (localStorage.getItem(StorageKeys.Connected) === storageValue) {
      connectWallet();
    }
    window.ethereum.on('accountsChanged', (accounts) => {
      const accs = accounts as string[];
      if (accs.length > 1) return setCurrentAccount(accs[0]);
      removeAddress();
    });
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask!');
    const provider = new ethers.BrowserProvider(window.ethereum);
    const network = await provider.getNetwork();
    if (network.chainId !== CHAIN_ID)
      return alert('Please connect to the correct network!');
    const accounts = await provider.send('eth_requestAccounts', []);
    if (accounts.length > 0) storeAddress(accounts[0]);
  };

  const storeAddress = (address: string) => {
    setCurrentAccount(address);
    localStorage.setItem(StorageKeys.Connected, storageValue);
  };

  const removeAddress = () => {
    setCurrentAccount(null);
    localStorage.removeItem(StorageKeys.Connected);
  };

  return (
    <WalletContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
