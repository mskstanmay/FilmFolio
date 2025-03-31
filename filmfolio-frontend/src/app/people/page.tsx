'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const categories = [
  'Actor', 'Writer', 'Director', 'Animator',
  'Cinematographer', 'Producer', 'Editor'
];

const profiles = [
  {
    name: "Priyanka Sharma",
    location: "Kolkata, India",
    description: "Cinematographer capturing vibrant visuals and dramatic compositions.",
    role: "Cinematographer",
    image: "/img/headshot20.webp"
  },
  {
    name: "Siddharth Nair",
    location: "Chennai, India",
    description: "Producer with experience in both commercial and independent film projects.",
    role: "Producer",
    image: "/img/headshot21.jpg"
  },
  {
    name: "Lakshmi Menon",
    location: "Bangalore, India",
    description: "Talented animator creating expressive character animations in 2D and 3D.",
    role: "Animator",
    image: "/img/headshot22.jpeg"
  },
  {
    name: "Ravi Desai",
    location: "Ahmedabad, India",
    description: "Video editor with a knack for pacing and compelling narrative flow.",
    role: "Editor",
    image: "/img/headshot23.avif"
  },
  {
    name: "Arya Patel",
    location: "Mumbai, India",
    description: "Experienced actor with a range from drama to comedy, known for captivating performances.",
    role: "Actor",
    image: "/img/headshot1.png"
  },
  {
    name: "Bruno",
    location: "Berlin, Germany",
    description: "Barks well",
    role: "Actor",
    image: "/img/headshot11.webp"
  },
  {
    name: "Sofia Lopez",
    location: "Mexico City, Mexico",
    description: "Screenwriter with a flair for creating intense dramas and inspiring love stories.",
    role: "Writer",
    image: "/img/headshot2.avif"
  },
  {
    name: "Manoj Pillai",
    location: "Trivandrum, India",
    description: "Experienced producer with a portfolio of successful regional films.",
    role: "Producer",
    image: "/img/headshot29.webp"
  },
  {
    name: "Ryo Takahashi",
    location: "Tokyo, Japan",
    description: "Award-winning director known for stunning visuals and deep storytelling in independent films.",
    role: "Director",
    image: "/img/headshot2.jpg"
  },
  {
    name: "Lena Chen",
    location: "Shanghai, China",
    description: "Animator with a vibrant style, bringing unique character animations to life in 2D and 3D.",
    role: "Animator",
    image: "/img/headshot3.jpg"
  },
  {
    name: "Jamal Roberts",
    location: "New York, USA",
    description: "Talented cinematographer capturing beautiful, dramatic shots across diverse landscapes.",
    role: "Cinematographer",
    image: "/img/headshot4.jpg"
  },
  {
    name: "Amara Singh",
    location: "Toronto, Canada",
    description: "Accomplished producer with experience in managing large-scale film projects globally.",
    role: "Producer",
    image: "/img/headshot5.jpeg"
  },
  {
    name: "David Miller",
    location: "Los Angeles, USA",
    description: "Expert video editor specializing in storytelling and seamless transitions for high-impact videos.",
    role: "Editor",
    image: "/img/headshot6.jpeg"
  },
  {
    name: "Emily Wong",
    location: "Hong Kong, China",
    description: "Versatile actress with experience in both theatre and film, bringing characters to life.",
    role: "Actor",
    image: "/img/headshot7.jpg"
  },
  {
    name: "Javier Garcia",
    location: "Madrid, Spain",
    description: "Talented writer specializing in sci-fi and fantasy scripts for films and series.",
    role: "Writer",
    image: "/img/headshot8.jpg"
  },
  {
    name: "Isabella Marini",
    location: "Rome, Italy",
    description: "Director focused on creating powerful, character-driven stories in drama films.",
    role: "Director",
    image: "/img/headshot9.avif"
  },
  {
    name: "Priya Desai",
    location: "Bangalore, India",
    description: "Creative animator specializing in motion graphics and visual storytelling.",
    role: "Animator",
    image: "/img/headshot10.jpg"
  },
  {
    name: "Julia Evans",
    location: "London, UK",
    description: "Producer experienced in both independent films and big-budget productions.",
    role: "Producer",
    image: "/img/headshot12.jpg"
  },
  {
    name: "Yuki Yamamoto",
    location: "Osaka, Japan",
    description: "Director creating emotionally impactful indie films.",
    role: "Director",
    image: "/img/headshot16.jpg"
  },
  {
    name: "Karan Singh",
    location: "Mumbai, India",
    description: "Dynamic actor with experience in Bollywood films and stage performances.",
    role: "Actor",
    image: "/img/headshot17.webp"
  },
  {
    name: "Anjali Mehta",
    location: "Pune, India",
    description: "Writer specializing in romance and family dramas for Indian cinema.",
    role: "Writer",
    image: "/img/headshot18.png"
  },
  {
    name: "Vikram Reddy",
    location: "Hyderabad, India",
    description: "Director known for gritty crime thrillers and intense storytelling.",
    role: "Director",
    image: "/img/headshot19.jpg"
  },
  {
    name: "Neha Kapoor",
    location: "Jaipur, India",
    description: "Actress with a background in theatre and Bollywood, known for her emotional range.",
    role: "Actor",
    image: "/img/headshot24.jpg"
  },
  {
    name: "Rahul Jain",
    location: "Surat, India",
    description: "Writer skilled in action-packed scripts and witty dialogue.",
    role: "Writer",
    image: "/img/headshot25.webp"
  },
  {
    name: "Amrita Das",
    location: "Lucknow, India",
    description: "Director focusing on character-driven dramas and thought-provoking stories.",
    role: "Director",
    image: "/img/headshot26.jpg"
  },
  {
    name: "Rajiv Patel",
    location: "Nagpur, India",
    description: "Cinematographer with an eye for natural lighting and breathtaking visuals.",
    role: "Cinematographer",
    image: "/img/headshot27.jpg"
  },
  {
    name: "Tommy Chen",
    location: "Vancouver, Canada",
    description: "Video editor known for precise cuts and impactful storytelling.",
    role: "Editor",
    image: "/img/headshot13_1.jpg"
  },
  {
    name: "Marie Dubois",
    location: "Paris, France",
    description: "Actress with a background in theatre, known for her expressive performances.",
    role: "Actor",
    image: "/img/headshot14.jpg"
  },
  {
    name: "Alex Knight",
    location: "Los Angeles, USA",
    description: "Experienced writer with a knack for horror and thriller scripts.",
    role: "Writer",
    image: "/img/headshot15.webp"
  },
  {
    name: "Ananya Iyer",
    location: "Coimbatore, India",
    description: "Animator bringing unique character animations to life in animated short films.",
    role: "Animator",
    image: "/img/headshot28.jpg"
  },
  {
    name: "Rita Gupta",
    location: "Patna, India",
    description: "Video editor specializing in documentaries and non-linear storytelling.",
    role: "Editor",
    image: "/img/heashot30.jpg"
  }
];

export default function People() {
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

  const filterProfiles = (role: string) => {
    return selectedCategories.size === 0 || selectedCategories.has(role);
  };

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
