'use client';

import React from 'react';
import Navbar from '../../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Section - Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About FilmFolio</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                FilmFolio is a collaborative platform designed for filmmakers and actors to connect, share, and create. 
                Founded by Himaja, Tanmay, Neha, and Naveen, our vision is to foster creativity in the film industry 
                by providing a space where talent meets opportunity. Whether you are looking to showcase your work or 
                find collaborators, FilmFolio is here to support your journey.
              </p>

              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Founders</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Himaja',
                    'Tanmay',
                    'Neha',
                    'Naveen'
                  ].map((founder) => (
                    <div 
                      key={founder}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">{founder}</h3>
                      <p className="text-gray-600">Co-founder</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Logo */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-96 h-96">
              <img
                src="/logo.jpeg"
                alt="FilmFolio Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
