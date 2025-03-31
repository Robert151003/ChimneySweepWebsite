'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils'
import MobileNav from './MobileNav'
import { Button } from './ui/button'

const normalizePath = (path: string): string => path.replace(/\/$/, ''); // TypeScript: path is of type string

const Navbar = () => {
    const pathName = usePathname();

    return (
        <nav className='flex items-center justify-center relative z-50 w-full bg-orange-1 px-6 py-4 lg:px-10'>
            
            {/* Mobile Navigation (aligned to the left on all screen sizes) */}
            <div className="absolute left-0 top-0 lg:hidden p-4">
                <MobileNav />
            </div>

            <Link 
              href="/"
              className="flex items-center gap-2 flex-none  ">
              <Image src="/Icons/logo.png" width={84} height={84} alt="logo" />
              <p className='text-[16px] font-extrabold text-white lg:text-[20px]'>Essex & Suffolk Sweeps</p>
            </Link>

            {/* Navigation Links (centered) */}
            <div className="flex-grow hidden lg:flex md:flex justify-center items-center space-x-8">
                {sidebarLinks.map((link) => {
                    const isActive = normalizePath(pathName) === normalizePath(link.route);

                    return (
                        <Link 
                            href={link.route}
                            key={link.label}
                            className={cn('flex items-center px-2 rounded-lg justify-start text-white', {
                                'text-grey-4': isActive,
                                'hover:text-grey-2': true,
                            })}
                        >
                            <p className='text-lg font-semibold'>
                                {link.label}
                            </p>
                        </Link>
                    );
                })}
            </div>

            {/* Button Section (aligned to the right) */}
            <div className="hidden lg:flex">
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
}

export default Navbar;
