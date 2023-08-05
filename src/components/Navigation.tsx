import Link from 'next/link';
import Logo from '@/components/illustrations/Logo';
import WalletButton from '@/components/WalletButton';

export default () => (
  <nav className="flex justify-between items-center w-full py-4">
    <Link href="/" className="text-beige">
      <Logo />
    </Link>
    <Link href="/" className="text-beige">
      Home
    </Link>
    <Link href="/blog" className="text-beige">
      Blog
    </Link>
    <WalletButton />
  </nav>
);
