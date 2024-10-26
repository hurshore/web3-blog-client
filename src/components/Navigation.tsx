'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/illustrations/Logo';
import WalletButton from '@/components/WalletButton';
import WriteLink from './WriteLink';

export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-full relative z-50">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-beige">
            <Logo />
          </Link>
          <button
            className="text-beige p-2 focus:outline-none md:hidden z-50"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-beige">
              Home
            </Link>
            <Link href="/blog" className="text-beige">
              Blog
            </Link>
            <WriteLink />
            <WalletButton />
          </div>
        </div>

        {/* mobile didebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
        />
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#18181B] transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col space-y-4 p-4 mt-16">
              <Link
                href="/"
                className="text-beige p-2 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-beige p-2 hover:bg-gray-800 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <div className="p-2">
                <WriteLink />
              </div>
              <div className="p-2">
                <WalletButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
