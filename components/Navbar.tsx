'use client'

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { sidebarLinks } from '@/constants';

const normalizePath = (path: string): string => path.replace(/\/$/, ''); // TypeScript: path is of type string

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-orange-1 text-white p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="/Images/logo.png" 
            width={84} 
            height={84} 
            alt="ESSweepsLogo" 
            className="max-sm:w-10 max-sm:h-10" 
          />
          
            <h1 className="text-xl font-bold">Essex & Suffolk Sweeps</h1>
        </Link>

        {/* Navigation Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          {sidebarLinks.map((link) => {
            const isActive = normalizePath(pathName) === normalizePath(link.route);

            return (
              <Link 
                href={link.route}
                key={link.label}
                className={cn('flex items-center px-2 rounded-lg justify-start', {
                  'text-grey-4': isActive,
                  'hover:text-grey-2': true,
                })}
              >
                <p className='text-lg font-semibold max-lg:hidden'>
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>    

        {/* Button Section */}
        <Link href="/services" className="hover:text-gray-300 font-bold">
          <Button 
            className={cn("rounded-md bg-black px-6 py-3 text-lg font-bold", {
              'text-white': true,
              'hover:text-orange-1': true,
              'hover:bg-white': true,
            })}
          >
            Hire Us
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
