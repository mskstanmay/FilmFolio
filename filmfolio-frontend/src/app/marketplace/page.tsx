'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const categories = [
  'Cameras', 'Lenses', 'Lighting Equipment', 'Gimbals', 
  'Memory Cards', 'Stabilizers', 'Filters', 'Dollies', 'Backdrops',
  'Tripods', 'Monitors', 'Drones', 'Audio Equipment'
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Marketplace() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  interface EquipmentItem {
    id: string;
    name: string;
    category: string;
    image: string;
    location: string;
    description: string;
    price: string;
    createdAt: string;
    updatedAt: string;
  }
  
  const [equipmentData, setEquipmentData] = useState<EquipmentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        console.log('Fetching from:', `${API_URL}/api/equipment`);
        const response = await fetch(`${API_URL}/api/equipment`);
        
        if (!response.ok) {
          console.error('Response not OK:', {
            status: response.status,
            statusText: response.statusText,
            url: response.url
          });
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        setEquipmentData(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
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

  const filterEquipment = (category: string) => {
    return selectedCategories.size === 0 || selectedCategories.has(category);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 pt-20">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
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
              {equipmentData.map((item) => (
                filterEquipment(item.category) && (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="aspect-video relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.location}</p>
                      <p className="text-sm mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-blue-600">{item.price}</span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                          More Details
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