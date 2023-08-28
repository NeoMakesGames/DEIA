import Link from 'next/link';
import React from 'react';
export default function AppRouter() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link  href="/software">Software</Link>
        </li>
        {/* Add more route links as needed */}
      </ul>
    </nav>
  );
};


