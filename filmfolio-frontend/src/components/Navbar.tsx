"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-effect">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-lg font-medium">
                        FilmFolio
                    </Link>

                    <div className="flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                        >
                            Home
                        </Link>
                        <Link
                            href="/movies"
                            className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                        >
                            Movies
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}