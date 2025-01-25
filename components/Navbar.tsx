'use client'

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/constants';


const Navbar = () => {
  const pathName = usePathname();
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
        {/*<ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-300 font-bold">Home</Link>
          </li>
          <li>
            <Link href="app/home/About/page.tsx" className="hover:text-gray-300 font-bold">About</Link>
          </li>
          <li>
            <Link href="app/home/Services/page.tsx" className="hover:text-gray-300 font-bold">Services</Link>
          </li>
          <li>
            <Link href="/app/home/Contacts/page.tsx" className="hover:text-gray-300 font-bold">Contacts</Link>
          </li>
        </ul>*/}
        {sidebarLinks.map((link) => {
          const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);

          return (
            <Link 
              href ={link.route}
              key={link.label}
              className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                 'bg-orange-1': isActive,
              })}
            >
              <p className='text-lg font-semibold max-lg:hidden'>
                {link.label}
              </p>
            </Link>
          );
        })}

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
