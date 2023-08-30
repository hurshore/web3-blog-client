'use client';
import WalletProvider from '@/contexts/WalletContext';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <WalletProvider>{children}</WalletProvider>
);
