"use client";

import React from 'react';

const PeoplePage = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <h1 className="text-3xl font-bold mb-6">People</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* People cards will go here */}
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
