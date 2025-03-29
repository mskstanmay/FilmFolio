"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import GoogleButton from '../components/GoogleButton';

const Home: React.FC = () => {
  // const [email, setEmail] = useState('');
  // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  return (
    <>
      <Head>
        <title>Filmfolio</title>
      </Head>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">FilmFolio</Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/people" className="flex flex-col items-center text-gray-600 hover:text-black">
                <i className="far fa-user-circle text-xl"></i>
                <span className="text-xs mt-1">People</span>
              </Link>
              <Link href="/movies" className="flex flex-col items-center text-gray-600 hover:text-black">
                <i className="fas fa-film text-xl"></i>
                <span className="text-xs mt-1">Movies</span>
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/register" className="px-6 py-2 text-sm font-medium text-black border border-black rounded-full hover:bg-gray-50">
                Join now
              </Link>
              <Link href="/login" className="px-6 py-2 text-sm font-medium text-black border border-black rounded-full hover:bg-gray-50">
                Sign in
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-16 min-h-screen">
          <div className="max-w-[1440px] mx-auto px-8 py-16 flex">
            {/* Left Section */}
            <div className="w-1/2 pr-12 pt-16">
              <h1 className="text-6xl font-light text-black mb-12">
                Your personal Movie community
              </h1>
              <p className="text-xl text-gray-600">
                Connect with film industry professionals, showcase your portfolio, 
                and discover opportunities in the world of cinema. Your next 
                collaboration starts here.
              </p>
              <div className="space-y-4 max-w-md">
                <GoogleButton className="rounded-full" />
                <p className="text-sm text-gray-600 mt-4">
                  By clicking Continue, you agree to FilmFolio's{" "}
                  <a href="#" className="text-black hover:underline">
                    User Agreement
                  </a>
                  ,{" "}
                  <a href="#" className="text-black hover:underline">
                    Privacy Policy
                  </a>
                  , and{" "}
                  <a href="#" className="text-black hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
                <p className="text-base mt-8">
                  New to FilmFolio?{" "}
                  <a href="#" className="text-black font-medium hover:underline">
                    Join now
                  </a>
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2">
              <div className="relative h-full">
                <img
                  src="/illustration.png"
                  alt="Movie illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
