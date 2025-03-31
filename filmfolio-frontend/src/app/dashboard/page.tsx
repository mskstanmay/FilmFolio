'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Welcome to FilmFolio</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/marketplace" 
            className="block group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video w-full relative">
              <img 
                src="/img/marketplace.jpg" 
                alt="Marketplace" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Marketplace</h2>
              <p className="text-gray-600">Rent and showcase your filmmaking equipment.</p>
            </div>
          </Link>

          <Link href="/people" 
            className="block group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video w-full relative">
              <img 
                src="/img/talentShowcase.jpg" 
                alt="Talent Showcase" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Talent Showcase</h2>
              <p className="text-gray-600">Showcase your talents and find opportunities.</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
