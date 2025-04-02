'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
  'Cameras', 'Lenses', 'Lighting Equipment', 'Audio Equipment',
  'Stabilizers', 'Drones', 'Tripods', 'Monitors', 'Memory Cards',
  'Filters', 'Backdrops', 'Dollies'
];

export default function AddEquipmentForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    location: '',
    description: '',
    price: '',
    image: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/equipment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      });

      if (response.ok) {
        router.push('/marketplace');
        router.refresh();
      } else {
        throw new Error('Failed to create equipment');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Equipment Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="w-full px-4 py-2 border rounded"
        required
      />
      
      <select
        value={formData.category}
        onChange={(e) => setFormData({...formData, category: e.target.value})}
        className="w-full px-4 py-2 border rounded"
        required
      >
        <option value="">Select Category</option>
        {CATEGORIES.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Location"
        value={formData.location}
        onChange={(e) => setFormData({...formData, location: e.target.value})}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <input
        type="text"
        placeholder="Price (e.g., Rs.500/day)"
        value={formData.price}
        onChange={(e) => setFormData({...formData, price: e.target.value})}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <input
        type="text"
        placeholder="Image path (e.g., /img/camera.jpg)"
        value={formData.image}
        onChange={(e) => setFormData({...formData, image: e.target.value})}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
      >
        {isLoading ? 'Adding...' : 'Add Equipment'}
      </button>
    </form>
  );
}
