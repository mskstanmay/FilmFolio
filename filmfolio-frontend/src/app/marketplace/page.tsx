'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const categories = [
  'Cameras', 'Lenses', 'Lighting Equipment', 'Gimbals', 
  'Memory Cards', 'Stabilizers', 'Filters', 'Dollies', 'Backdrops',
  'Tripods', 'Monitors', 'Drones', 'Audio Equipment'
];

export default function Marketplace() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

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

const equipmentData = [
  {
    id: 1,
    name: 'Canon EOS R5',
    category: 'Cameras',
    location: 'Vijayawada, AP',
    description: 'High-resolution mirrorless camera with 8K video capability.',
    price: 'Rs.2000/day',
    image: '/img/eq1.webp'
  },
  {
    id: 2,
    name: 'Green Screen Backdrop Kit',
    category: 'Backdrops',
    location: 'Banglore, Karnataka',
    description: 'Complete kit for green screen shoots.',
    price: 'Rs.700/day',
    image: '/img/eq25.jpg'
  },
  {
    id: 3,
    name: 'Proaim DSLR Dolly',
    category: 'Dollies',
    location: 'Berlin, Germany',
    description: 'Lightweight dolly for DSLR cameras.',
    price: 'Rs.800/day',
    image: '/img/eq23.webp'
  },
  {
    id: 4,
    name: 'GVM Motorized Slider',
    category: 'Dollies',
    location: 'Hyderabad, Telangana',
    description: 'Motorized slider for smooth tracking shots.',
    price: 'Rs.650/day',
    image: '/img/eq24.jpg'
  },
  {
    id: 5,
    name: 'Lexar Professional 256GB',
    category: 'Memory Cards',
    location: 'Hyderabad, Telangana',
    description: 'Ultra-fast CFexpress card, ideal for raw video.',
    price: 'Rs.250/day',
    image: '/img/eq18.jpeg'
  },
  {
    id: 6,
    name: 'PolarPro Peter McKinnon ND Filter',
    category: 'Filters',
    location: 'Vijayawada, AP',
    description: 'Premium ND filter for cinematic shots.',
    price: 'Rs.450/day',
    image: '/img/eq22.jpg'
  },
  {
    id: 7,
    name: 'Glidecam HD-4000',
    category: 'Stabilizers',
    location: 'Vijayawada, AP',
    description: 'Handheld stabilizer for smooth shots.',
    price: 'Rs.500/day',
    image: '/img/eq19.webp'
  },
  {
    id: 8,
    name: 'Steadicam Zephyr',
    category: 'Stabilizers',
    location: 'Banglore, Karnataka',
    description: 'Professional stabilizer for dynamic shots.',
    price: 'Rs.700/day',
    image: '/img/eq20.jpeg'
  },
  {
    id: 9,
    name: 'SanDisk Extreme Pro 128GB',
    category: 'Memory Cards',
    location: 'Hyderabad, Telangana',
    description: 'High-speed SD card for 4K recording.',
    price: 'Rs.200/day',
    image: '/img/eq17.jpg'
  },
  {
    id: 10,
    name: 'Atomos Ninja V',
    category: 'Monitors',
    location: 'Banglore, Karnataka',
    description: 'Portable 4K HDMI recorder with a bright 5-inch display.',
    price: 'Rs.1000/day',
    image: '/img/eq15.jpg'
  },
  {
    id: 11,
    name: 'Manfrotto MVH502AH',
    category: 'Tripods',
    location: 'Hyderabad, Telangana',
    description: 'Video tripod with fluid head for smooth panning.',
    price: 'Rs.500/day',
    image: '/img/eq13.jpg'
  },
  {
    id: 12,
    name: 'Tiffen Variable ND Filter',
    category: 'Filters',
    location: 'Banglore, Karnataka',
    description: 'Adjustable ND filter, 2-8 stops.',
    price: 'Rs.400/day',
    image: '/img/eq21.webp'
  },
  {
    id: 13,
    name: 'White Muslin Backdrop',
    category: 'Backdrops',
    location: 'Mumbai, India',
    description: 'Perfect for product and portrait shoots.',
    price: 'Rs.400/day',
    image: '/img/eq26.avif'
  },
  {
    id: 14,
    name: 'Peak Design Travel Tripod',
    category: 'Tripods',
    location: 'Hyderabad, Telangana',
    description: 'Lightweight and sturdy, perfect for on-the-go shoots.',
    price: 'Rs.600/day',
    image: '/img/eq14.jpg'
  },
  {
    id: 15,
    name: 'DJI Mavic Air 2',
    category: 'Drones',
    location: 'Mumbai, Maharashtra',
    description: 'Compact drone with high-quality 4K video.',
    price: 'Rs.2000/day',
    image: '/img/eq12.jpg'
  },
  {
    id: 16,
    name: 'Sony A7S III',
    category: 'Cameras',
    location: 'Hyderabad, Telangana',
    description: 'Ideal for low-light shooting, 4K up to 120fps.',
    price: 'Rs.1700/day',
    image: '/img/eq2.jpeg'
  },
  {
    id: 17,
    name: 'Canon EF 50mm f/1.2L',
    category: 'Lenses',
    location: 'Hyderabad, Telangana',
    description: 'Prime lens, excellent for portrait and low-light shots.',
    price: 'Rs.600/day',
    image: '/img/eq3.webp'
  },
  {
    id: 18,
    name: 'Sigma 24-70mm f/2.8 DG DN',
    category: 'Lenses',
    location: 'Guntur, AP',
    description: 'Versatile zoom lens, ideal for various shooting styles.',
    price: 'Rs.950/day',
    image: '/img/eq4.jpeg'
  },
  {
    id: 19,
    name: 'Aputure 120D II',
    category: 'Lighting Equipment',
    location: 'Mumbai, Maharashtra',
    description: 'Powerful LED light, ideal for both indoor and outdoor shoots.',
    price: 'Rs.1000/day',
    image: '/img/eq5.webp'
  },
  {
    id: 20,
    name: 'Godox SL-60W',
    category: 'Lighting Equipment',
    location: 'Vijayawada, AP',
    description: 'Affordable LED light with adjustable brightness.',
    price: 'Rs.750/day',
    image: '/img/eq6.jpg'
  },
  {
    id: 21,
    name: 'DJI Ronin-S',
    category: 'Gimbals',
    location: 'Hyderabad, Telangana',
    description: 'Stabilizer for smooth and dynamic shots.',
    price: 'Rs.600/day',
    image: '/img/eq7.png'
  },
  {
    id: 22,
    name: 'Zhiyun Crane 3S',
    category: 'Gimbals',
    location: 'Mumbai, India',
    description: 'Heavy-duty gimbal for larger cameras.',
    price: 'Rs.500/day',
    image: '/img/eq8.webp'
  },
  {
    id: 23,
    name: 'Rode NTG4+ Shotgun Mic',
    category: 'Audio Equipment',
    location: 'Banglore, Karnataka',
    description: 'Directional mic, ideal for capturing clear dialogue.',
    price: 'Rs.350/day',
    image: '/img/eq9.jpg'
  },
  {
    id: 24,
    name: 'Zoom H5 Handy Recorder',
    category: 'Audio Equipment',
    location: 'Hyderabad, Telangana',
    description: 'Portable audio recorder with X/Y microphone capsule.',
    price: 'Rs.750/day',
    image: '/img/eq10.png'
  },
  {
    id: 25,
    name: 'SmallHD 702 Bright',
    category: 'Monitors',
    location: 'Vijayawada, AP',
    description: '7-inch daylight-viewable monitor.',
    price: 'Rs.500/day',
    image: '/img/eq16.jpg'
  }
];