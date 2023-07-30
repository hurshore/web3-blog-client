import { ethers } from 'ethers';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { useState } from 'react';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

const useConnectWallet = () => {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    let signer = null;

    let provider;
    if (window.ethereum == null) {
      provider = ethers.getDefaultProvider('ganache');
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const address = await signer.getAddress();
      setCurrentAccount(address);
    }
  };

  return { currentAccount, connectWallet };
};

export default useConnectWallet;
