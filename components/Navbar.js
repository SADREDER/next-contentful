import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Logo Title</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/guide/discover"><a>Discover</a></Link>
      <Link href="/"><a>Docs</a></Link>
      <Link href="/"><a>Disttibute</a></Link>
      <Link href="/"><a>Community</a></Link>
    </nav>
  );
};

export default Navbar;
