"use client";

import React from 'react';

const MoviesPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <h1 className="text-3xl font-bold mb-6">Movies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Movie cards will go here */}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
