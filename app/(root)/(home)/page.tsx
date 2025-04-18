import MeetingTypeList from '@/components/MeetingTypeList'
import React from 'react'

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div
        className="h-[300px] w-full rounded-[20px] bg-[url('/images/hero-background.png')] bg-cover bg-center"
      >
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          {/* Glassmorphism heading */}
          <h2 className="backdrop-blur-md bg-white/10 border border-white/20 rounded py-2 px-4 text-center text-base font-normal max-w-[270px]">
            Upcoming Meeting at: 12:30 PM
          </h2>

          {/* Time and Date */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-300 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  )
}

export default Home
