"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col items-center mb-12">
          <Image
            className="dark:invert mb-8 dark:filter dark:grayscale"
            src="/FilmFolio.svg"
            alt="FilmFolio logo"
            width={200}
            height={42}
            priority
          />
          <h1 className="text-2xl font-bold text-foreground mb-8">Latest Posts</h1>
        </div>
        
        <ul className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li 
                key={post.id} 
                className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm 
                         border border-zinc-200 dark:border-zinc-800
                         transition-all duration-200 hover:shadow-md"
              >
                <h2 className="text-xl font-bold mb-3 text-foreground">{post.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{post.content}</p>
                <time className="text-sm text-zinc-500 dark:text-zinc-500">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </li>
            ))
          ) : (
            <p className="text-center text-zinc-500 dark:text-zinc-400 py-8">
              No posts available
            </p>
          )}
        </ul>
      </main>
    </div>
  );
}
