'use client';
import useConnectWallet from '@/hooks/useConnectWallet';
import Wallet from './Wallet';
import { ConnectButton } from './buttons';

export default () => {
  const { currentAccount, connectWallet } = useConnectWallet();

  return currentAccount ? (
    <Wallet address={currentAccount} />
  ) : (
    <ConnectButton connectWallet={connectWallet} />
  );
};
