import WalletIllustration from './illustrations/Wallet';
import { truncatedString } from '@/util/string';

type Props = {
  address: string;
};

const Wallet = ({ address }: Props) => {
  const truncatedAddress = truncatedString(address, 6, 4);
  return (
    <div className="flex border border-beige rounded-2xl py-2 px-4">
      <WalletIllustration />
      <p className="ml-2">{truncatedAddress}</p>
    </div>
  );
};

export default Wallet;
