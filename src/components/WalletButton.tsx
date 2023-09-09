'use client';
import useConnectWallet from '@/hooks/useConnectWallet';
import Wallet from './Wallet';
import { ConnectButton } from './buttons';

const WalletButton = () => {
  const { currentAccount, connectWallet } = useConnectWallet();

  return currentAccount ? (
    <Wallet address={currentAccount} />
  ) : (
    <ConnectButton connectWallet={connectWallet} />
  );
};

export default WalletButton;
