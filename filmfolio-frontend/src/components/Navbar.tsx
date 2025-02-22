"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 w-full">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 w-full"> {/* justify-between is key */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/FilmFolio.svg"
                            alt="FilmFolio logo"
                            width={120}
                            height={25}
                            className="dark:invert"
                        />
                    </Link>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                        >
                            Home
                        </Link>
                        <p>         </p>
                        <Link
                            href="/movies"
                            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                        >
                            Movies
                        </Link>
                        <Link
                            href="/about"
                            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}