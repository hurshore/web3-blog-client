import { useContext } from 'react';

import { WalletContext } from '@/contexts/WalletContext';

const useConnectWallet = () => {
  const { connectWallet, currentAccount } = useContext(WalletContext);

  return { connectWallet, currentAccount };
};

export default useConnectWallet;
