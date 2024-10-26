'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import useConnectWallet from '@/hooks/useConnectWallet';
import { Routes } from '@/constants';
import { cn } from '@/util/style';
// icons
import WriteImage from '../assets/icons/write.svg';

const imageAlt = 'write';

type Props = {
  className?: string;
};

const WriteLink = ({ className }: Props) => {
  const router = useRouter();
  const { currentAccount, connectWallet } = useConnectWallet();

  const handleNavigation = () => {
    if (!currentAccount) return connectWallet();
    router.push(Routes.Write);
  };

  return (
    <div
      className={cn('flex text-beige cursor-pointer', className)}
      onClick={handleNavigation}
    >
      <Image src={WriteImage} alt={imageAlt} width={20} height={20} />
      <p className="ml-2">Write</p>
    </div>
  );
};

export default WriteLink;
