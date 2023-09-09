import Navigation from '@/components/Navigation';
import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => (
  <section className="flex flex-col min-h-screen p-8 bg-zinc-900">
    <main className="w-full max-w-6xl self-center">
      <Navigation />
      {children}
    </main>
  </section>
);

export default BlogLayout;
