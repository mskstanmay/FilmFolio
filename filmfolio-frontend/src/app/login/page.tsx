"use client";

import React from 'react';
import GoogleButton from '../../components/GoogleButton';

const LoginPage = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-3xl font-bold mb-6">Sign in to FilmFolio</h1>
        <GoogleButton className="mb-4" />
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or</span>
          </div>
        </div>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button className="w-full px-4 py-2 bg-black text-white rounded-lg">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
