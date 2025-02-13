"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">🚴‍♂️ Pedal Trekking</span>
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/destinations" className="hover:text-gray-300">Destinations</Link>
          <Link href="/tips" className="hover:text-gray-300">Trekking Tips</Link>
          <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
          <Link href="/reviews" className="hover:text-gray-300">Reviews</Link>
          <Link href="/weather" className="hover:text-gray-300">Weather</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
