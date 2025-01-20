import HomeAboutIcon from '@/assets/HomeAboutIcon'
import { cn } from '@/lib/utils'
import React from 'react'

type props = {
    className?:string
}

export default function HomeAboutRight({className,...props}:props) {
  return (
    <div className={cn("lg:w-[454px] lg:h-[506px] w-[320px] h-[350px] relative",className)} {...props}>
      <div className='w-[110px] h-[34px] border border-secondary rounded-3xl absolute right-0 top-[-15px] '></div>
      <div className='w-[34px] h-[150px] border border-secondary rounded-3xl absolute bottom-0 left-[-15px] '></div>
      <HomeAboutIcon className='w-full h-full' />
    </div>
  )
}
