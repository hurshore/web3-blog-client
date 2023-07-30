'use client';
import ConnectButton from './ConnectButton';
import useConnectWallet from '@/hooks/useConnectWallet';
import Wallet from './Wallet';

export default () => {
  const { currentAccount, connectWallet } = useConnectWallet();

  return currentAccount ? (
    <Wallet address={currentAccount} />
  ) : (
    <ConnectButton connectWallet={connectWallet} />
  );
};
