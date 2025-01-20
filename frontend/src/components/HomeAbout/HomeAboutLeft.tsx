import React from 'react'
import TextHeilight from '../ui/TextHeilight'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type props = {
    className?:string
}

export default function HomeAboutLeft({className,...props}:props) {
  return (
    <div className={cn("flex flex-col gap-10",className)} {...props}>
        <h2 className='xl:text-[56px] lg:text-[40px] text-[30px] font-bold '>
        <TextHeilight text="Let’s" /> get know <br/> <TextHeilight text="about" /> me closer
        </h2>
        <p className='text-lg text-[#A8A8A8] max-w-[625px] '>
        Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.
        </p>
        <div>
        <Link href="/about"><Button variant={"secondary"}>Discover More About Me</Button></Link>
        </div>
    </div>
  )
}
