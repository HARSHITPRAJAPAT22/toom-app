import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, SignUp, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-gray-700 px-6 py-4 lg:px-10 border-b-1 border-gray-600'>
    <Link href='/' className='flex items-center gap-1'>
    <Image src='/icons/logo.svg'
    width={32}
    height={32}
    alt='toom-log'
    className='max-sm:size-10'/>
    <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Toom</p>
    </Link>
    <div className='flex-between gap-5 cursor-pointer'>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Link href='/sign-in'>
            <Button className='bg-blue-600 text-white hover:bg-blue-500'>
              Login
            </Button>
          </Link>
        </SignedOut>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
