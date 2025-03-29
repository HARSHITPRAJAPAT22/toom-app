'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const pathname =usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen min-w-[264px] flex-col justify-between overflow-y-auto p-6 pt-28 text-gray-800 bg-gray-50 shadow-md max-sm:hidden">
   <div className="flex flex-col gap-6">
      {sidebarLinks.map((link) => {
         const isActive = pathname === link.route || pathname.startsWith(link.route);

         return (
            <Link
               href={link.route}
               key={link.label}
               className={cn(
                  'flex items-center gap-4 rounded-lg p-2 transition-all duration-200',
                  isActive ? 'bg-blue-500 text-gray-400 font-semibold' : 'hover:bg-gray-200 text-gray-800'
               )}
            >
               <Image 
               src={link.imgUrl}
               alt={link.label}
               width={24}
               height={24}/>
               <p className='max-lg:hidden'>
                {link.label}
               </p>
            </Link>
         );
      })}
   </div>
</section>

  )
}

export default Sidebar