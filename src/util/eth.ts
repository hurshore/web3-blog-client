import { ethers } from 'ethers';

import contractABI from '@/abi/Blog.json';
import { CONTRACT_ADDRESS } from '@/constants';

export const getEthereumContract = async () => {
  if (!window.ethereum) return null;
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const transactionsContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contractABI.abi,
    signer
  );

  return transactionsContract;
};
