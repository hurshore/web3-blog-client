import Image from 'next/image';
import Link from 'next/link';

import Asterisk from '@/components/illustrations/Asterisk';
import Blob from '@/components/illustrations/Blob';
import Droplet from '@/components/illustrations/Droplet';
import Features from '@/components/Features';
import HourGlass from '@/components/illustrations/HourGlass';
import Logo from '@/components/illustrations/Logo';
import Rectangles from '@/components/illustrations/Rectangles';
import Star from '@/components/illustrations/Star';
import StarTwo from '@/components/illustrations/StarTwo';
// icons
import LinkedInIcon from '../assets/icons/linkedin.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import PortfolioIcon from '../assets/icons/portfolio.svg';

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="flex w-full justify-center bg-purple-500">
        <div className="flex flex-col relative w-full max-w-6xl p-8">
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
            <button className="bg-pink-500 hover:bg-pink-700 px-4 py-2 rounded-xl">
              Connect
            </button>
          </nav>

          <div className="flex flex-col self-center relative w-full max-h-[80vh] aspect-square">
            <div className="flex h-1/2 justify-center">
              <div className="flex h-full max-w-fit aspect-square bg-purple-300 rounded-full" />
              <div className="flex h-full aspect-square bg-purple-300 rounded-full" />
            </div>
            <div className="flex h-1/2 justify-center">
              <div className="flex h-full aspect-square bg-purple-300 rounded-full" />
              <div className="flex h-full aspect-square bg-purple-300 rounded-full" />
            </div>
          </div>

          <div className="flex absolute w-screen left-0 p-8 bottom-8 md:bottom-16 max-w-6xl justify-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-center text-beige font-margarine">
              Revolutionalise your blogging with blockchain
            </h1>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-purple-700">
        <div className="flex flex-col max-w-6xl p-8 py-16">
          <div className="flex">
            <Rectangles />
            <Star />
            <HourGlass />
            <Blob />
          </div>

          <h2 className="text-5xl text-beige font-margarine mt-10 mb-12">
            Empower Your Words
          </h2>
          <p className="text-lg text-beige">
            Decentralized Blogging Platform brings the power of blockchain to
            bloggers. Publish articles hassle-free and earn Ethereum by creating
            high-quality content that others value.
          </p>

          <div className="flex flex-col md:flex-row mt-12">
            <div className="mb-6 md:mr-16">
              <h3 className="text-3xl text-beige font-margarine">200</h3>
              <p className="text-beige">Active Bloggers</p>
            </div>

            <div className="mb-6 md:mr-16">
              <h3 className="text-3xl text-beige font-margarine">5000</h3>
              <p className="text-beige">Published Articles</p>
            </div>

            <div>
              <h3 className="text-3xl text-beige font-margarine">812</h3>
              <p className="text-beige">Engaged Readers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ai-companies bg-cover md:h-screen">
        <div className="flex h-full justify-center bg-pink-500 bg-opacity-80">
          <div className="flex flex-col justify-center max-w-6xl px-8 md:px-16 py-24">
            <h2 className="text-3xl md:text-5xl text-center font-margarine">
              “Blockchain inspired innovations are revolutionizing content
              creation on the web.”
            </h2>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-purple-700">
        <div className="flex flex-col w-full max-w-6xl p-8 py-16">
          <h2 className="text-3xl text-beige font-margarine mb-8">
            Why Choose Us
          </h2>
          <div>
            <div className="flex h-[200px] md:h-[400px] rounded-3xl bg-laptop bg-cover bg-center grayscale mb-5" />

            <div className="flex">
              <div className="flex flex-1 justify-center items-center h-[200px] md:h-[300px] rounded-3xl bg-blocks bg-cover bg-center grayscale mr-5 p-2">
                <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
                  <StarTwo />
                </div>
              </div>

              <div className="flex flex-1 justify-center items-center h-[200px] md:h-[300px] rounded-3xl bg-books bg-cover grayscale p-2">
                <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]">
                  <Asterisk fromColor="purple-300" toColor="purple-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-pink-500">
        <div className="flex flex-col w-full max-w-6xl p-8 py-16">
          <div className="mb-8">
            <h3 className="text-3xl text-purple-700 font-margarine mb-8">
              Key Features
            </h3>
            <p>
              Our platform combines the power of decentralization with a
              user-friendly interface to elevate your blogging experience.
              Secure, transparent, and effortless – get ready for a new era of
              creativity.
            </p>
          </div>

          <div className="mb-24">
            <h3 className="text-purple-700 font-margarine mb-4">Benefits</h3>
            <Features />
          </div>

          <div className="max-w-[500px] self-center">
            <div className="flex flex-col items-center">
              <Droplet />
              <h2 className="text-3xl font-margarine my-8">Get Started</h2>
              <p className="text-center">
                Join the next-generation blogging platform and make your mark in
                the decentralized digital space. Join now and embark on your
                blockchain blogging journey.
              </p>
              <button className="w-full bg-purple-500 hover:bg-purple-700 px-8 py-3 rounded-xl mt-8">
                Join Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex justify-center bg-purple-700 py-16">
        <div className="flex flex-col items-center max-w-6xl px-8">
          <div className="w-20 h-20 mb-6">
            <Asterisk fromColor="pink-500" toColor="pink-500" />
          </div>
          <div className="flex mb-8">
            <Link href="https://tofunmiosho.netlify.app/" target="_blank">
              <Image
                src={PortfolioIcon}
                width={32}
                height={32}
                alt="portfolio"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jahtofunmi-osho/"
              target="_blank"
              className="mx-4"
            >
              <Image
                src={LinkedInIcon}
                width={32}
                height={32}
                alt="linkedin profile"
              />
            </Link>
            <Link href="https://twitter.com/jahtofunmi" target="_blank">
              <Image
                src={TwitterIcon}
                width={32}
                height={32}
                alt="twitter profile"
              />
            </Link>
          </div>

          <div className="text-center">
            <p className="text-xs text-beige">
              &copy; 2023 Decentralized Blogging Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
