"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = () => {
    // Add any cleanup logic here (clearing tokens etc)
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.jpeg" 
              alt="FilmFolio Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-blue-600">FilmFolio</span>
          </Link>
          <div className="flex space-x-6">
            {pathname === '/' ? (
              // Authentication buttons for home page (commented out)
              <>
                {/* <Link href="/login" className="text-gray-600 hover:text-blue-600">
                  Sign In
                </Link>
                <Link href="/register" className="text-gray-600 hover:text-blue-600">
                  Join Now
                </Link> */}
              </>
            ) : (
              // Navigation links for authenticated pages
              <>
                <Link
                  href="/dashboard"
                  className={`text-gray-600 hover:text-blue-600 ${pathname === '/dashboard' ? 'font-bold' : ''}`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/marketplace"
                  className={`text-gray-600 hover:text-blue-600 ${pathname === '/marketplace' ? 'font-bold' : ''}`}
                >
                  Marketplace
                </Link>
                <Link
                  href="/people"
                  className={`text-gray-600 hover:text-blue-600 ${pathname === '/people' ? 'font-bold' : ''}`}
                >
                  People
                </Link>
                <Link
                  href="/about"
                  className={`text-gray-600 hover:text-blue-600 ${pathname === '/about' ? 'font-bold' : ''}`}
                >
                  About
                </Link>
                <button 
                  onClick={handleSignOut} 
                  className="text-gray-600 hover:text-blue-600"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}