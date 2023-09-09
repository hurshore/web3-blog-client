'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useConnectWallet from '@/hooks/useConnectWallet';
import { Routes } from '@/constants';
// icons
import WriteImage from '../assets/icons/write.svg';

const imageAlt = 'write';
const WriteLink = () => {
  const router = useRouter();
  const { currentAccount, connectWallet } = useConnectWallet();

  const handleNavigation = () => {
    if (!currentAccount) return connectWallet();
    router.push(Routes.Write);
  };

  return (
    <div className="flex text-beige cursor-pointer" onClick={handleNavigation}>
      <Image src={WriteImage} alt={imageAlt} width={20} height={20} />
      <p className="ml-2">Write</p>
    </div>
  );
};

export default WriteLink;
