import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-orange-1 text-white p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          
          <img 
            src="/Images/logo.png" 
            width={84} 
            height={84} 
            alt="ESSweepsLogo" 
            className="max-sm:w-10 max-sm:h-10" 
          />
          <Link href="/">
            <h1 className="text-xl font-bold">Essex & Suffolk Sweeps</h1>
          </Link>
        </div>

        {/* Navigation Section */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-300 font-bold">Home</Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-gray-300 font-bold">About</Link>
          </li>
          <li>
            <Link href="/Services" className="hover:text-gray-300 font-bold">Services</Link>
          </li>
          <li>
            <Link href="/Contacts" className="hover:text-gray-300 font-bold">Contacts</Link>
          </li>
        </ul>

        {/* Button Section */}
        <a href="/Services" className="hover:text-gray-300 font-bold">
          <Button 
            className="rounded-md bg-black px-6 py-3 text-lg font-bold"
          >
            Hire Us
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
