import React from 'react';
import { Button } from './ui/button';


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
          <a href="/">
            <h1 className="text-xl font-bold">Essex & Suffolk Sweeps</h1>
          </a>
        </div>

        {/* Navigation Section */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <li>
            <a href="/" className="hover:text-gray-300 font-bold">Home</a>
          </li>
          <li>
            <a href="/About" className="hover:text-gray-300 font-bold">About</a>
          </li>
          <li>
            <a href="/Services" className="hover:text-gray-300 font-bold">Services</a>
          </li>
          <li>
            <a href="/Contacts" className="hover:text-gray-300 font-bold">Contacts</a>
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
