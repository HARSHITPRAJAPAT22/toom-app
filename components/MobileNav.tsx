'use client'
import React from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'


const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
       <Sheet>
          <SheetTrigger asChild><Image src='/icons/hamburger.svg' width={36} height={36} alt='hamburger' 
            className='cursor-pointer sm:hidden'
          /></SheetTrigger>
          <SheetContent side='left' className='border-none bg-gray-700'>
            <SheetTitle></SheetTitle>
          <Link href='/' className='flex items-center gap-1'>
              <Image src='/icons/logo.svg'
              width={32}
              height={32}
              alt='toom-log'
              className='max-sm:size-10'/>
              <p className='text-[26px] font-extrabold text-white'>Toom</p>
          </Link>
          <div className='flex h-[calc(100vh-72px)]
          flex-col justify-between overflow-y-auto'>
             <SheetClose asChild>
              <section className='flex h-full flex-col gap-6 pt-16 text-gray-500'>
                        {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                            'flex items-center gap-4 rounded-lg p-2 transition-all duration-200 w-full max-w-60',
                            isActive ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-200 text-gray-800'
                        )}
                      >
                        <Image 
                        src={link.imgUrl}
                        alt={link.label}
                        width={20}
                        height={20}/>
                        <p className='font-semibold'>
                          {link.label}
                        </p>
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
  )
}

export default MobileNav