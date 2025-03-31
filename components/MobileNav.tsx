'use client';

import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <section className="flex items-center py-4">
      {/* Burger icon */}
      <Sheet>
        <SheetTrigger>
          <Image
            src="/Icons/burger.png"
            width={30} // Reduced size for better spacing
            height={30}
            alt="hamburger icon"
            className={cn('cursor-pointer md:hidden', {
              'filter invert': true,
            })}
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-orange-1 w-3/4 sm:w-1/2"
        >
          <SheetTitle className="hidden"></SheetTitle>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive = pathName === link.route;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                          {
                            'text-grey-3': isActive,
                          }
                        )}
                      >
                        <p className="font-semibold text-xl">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
