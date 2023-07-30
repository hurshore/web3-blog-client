import Wallet from './illustrations/Wallet';
import { truncatedString } from '@/util/string';

interface Props {
  address: string;
}

export default ({ address }: Props) => {
  const truncatedAddress = truncatedString(address, 6, 4);
  return (
    <div className="flex border border-beige rounded-2xl py-2 px-4">
      <Wallet />
      <p className="ml-2">{truncatedAddress}</p>
    </div>
  );
};
