'use client'

import React from 'react'
import Image from 'next/image'

type HomeCardProps = {
  className?: string
  imageSrc: string
  title: string
  description: string
  handleClick: () => void
}

const HomeCard = ({
  imageSrc,
  title,
  description,
  handleClick,
  className = '',
}: HomeCardProps) => {
  return (
    <div
      className={`px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer transition hover:scale-[1.02] ${className}`}
      onClick={handleClick}
    >
      {/* Icon */}
      <div className="flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 size-12 rounded-[10px] mb-4">
        <Image src={imageSrc} alt="meeting" width={27} height={27} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <p className="text-lg font-normal text-black/80">{description}</p>
      </div>
    </div>
  )
}

export default HomeCard
