'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-carmel-primary text-white flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 drop-shadow-lg">404 Error</h1>
      <div className="w-48 h-48 sm:w-64 sm:h-64 relative mb-6">
        <Image
          src="/Under%20construction-amico.svg"
          alt="Site Under Construction"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <p className="text-xl sm:text-2xl font-semibold mb-4 drop-shadow-md max-w-lg">
        You are at the right place, but wrong time.
      </p>
      <p className="text-lg sm:text-xl font-medium mb-8 drop-shadow-sm max-w-lg">
        The server is currently under maintenance. Please check back later.
      </p>
      <Link
        href="/"
        className="inline-block mt-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-carmel-dark font-semibold rounded-lg shadow-md hover:bg-amber-50 transition focus:outline-none focus:ring-4 focus:ring-carmel-light"
      >
        Go Home
      </Link>
    </div>
  );
}

