import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-light-2 px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>
        <Image 
          src='/icons/logo.png'
          width={100}
          height={100}
          alt='Logo'
          className='max-sm:size-10'
         />
      </Link>
      
      <div className='text-black font-bold flex-between gap-5'>
        <div>Essex & Suffolk Sweeps</div>
        
      </div>
      
      <div className='flex-between gap-5'>
        <MobileNav />
        <Button asChild className='bg-dark-2'>
          <Link href="/contacts">GET A QUOTE NOW</Link>
        </Button>

      </div>

    </nav>
  )
}

export default Navbar