// E:\giaic Q-2\homeworks\portfolio-2-customcs\src\app\components\Navbar.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import './navbar.css';
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navbar1'>
    <nav className="navbar">
      <div className="navbar-logo">
        <Image src="/accets/images/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href="/components/projects">Projects</Link></li>
        <li><Link href="/components/contact">Contact</Link></li>
      </ul>
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <AlignJustify />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
