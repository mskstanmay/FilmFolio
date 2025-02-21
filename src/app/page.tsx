'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert dark:filter dark:grayscale"
          src="/FilmFolio.svg"  // ✅ Make sure it's inside the "public" folder
          alt="FilmFolio logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-lg font-semibold">Latest Posts</h1>
        <ul className="w-full max-w-2xl space-y-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.id} className="p-4 border rounded-lg shadow-sm">
                <h2 className="text-lg font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.content}</p>
                <span className="text-xs text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</span>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No posts available</p>
          )}
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
      </footer>
    </div>
  );
}
