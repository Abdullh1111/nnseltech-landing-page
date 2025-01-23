import { Button } from '@/components/ui/button'
import TextHeilight from '@/components/ui/TextHeilight'
import WorkCart from '@/components/works/WorkCart'
import React from 'react'

export default function Works() {
  return (
    <div className=' md:my-40 my-20'>
      <h3 className='text-4xl md:text-[72px] font-bold'><TextHeilight text="My" /> Works</h3>
      <p className="md:text-lg text-base text-[#949494] mt-10">Showcase About Works</p>
      <div className=' h-[2px] bg-white my-20'></div>
      <WorkCart />
      <div className='flex justify-center my-20'>
      <Button>Load more works</Button>
      </div>
    </div>
  )
}
