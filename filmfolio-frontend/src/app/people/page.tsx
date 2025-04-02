'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const categories = [
  'Actor', 'Writer', 'Director', 'Animator',
  'Cinematographer', 'Producer', 'Editor'
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function People() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch(`${API_URL}/api/people`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching people:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  const toggleCategory = (category: string) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(category)) {
      newCategories.delete(category);
    } else {
      newCategories.add(category);
    }
    setSelectedCategories(newCategories);
  };

  const filterProfiles = (role: string) => {
    return selectedCategories.size === 0 || selectedCategories.has(role);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 pt-20">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold text-center mb-12">Film Industry Professionals</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600 rounded"
                      checked={selectedCategories.has(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span className="ml-2">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile, index) => (
                filterProfiles(profile.role) && (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    data-category={profile.role}
                  >
                    <div className="aspect-square relative">
                      <img 
                        src={profile.image}
                        alt={`${profile.name}'s profile`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{profile.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{profile.location}</p>
                      <p className="text-sm mb-3 text-gray-700">{profile.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-600">{profile.role}</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                          Open Works
                        </button>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
