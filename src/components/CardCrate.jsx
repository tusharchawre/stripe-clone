import React from 'react'
import { Card } from './Card'


function CardCrate() {
  return (
    <div className='w-full h-fit bg-[#F6F9FC]'>
      <div className='max-w-[1048px] w-full mx-auto pt-24'>
        <p className='font-bold text-lg text-[#6459F6] font-sohne'>Built for growth</p>
        <p className='py-8 text-4xl font-semibold'>Take your startup farther, faster
        </p>
        <p className='w-[60%] text-lg text-slate-500'>Startups build on Stripe to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low- to no-code solutions, which are simple enough for easy implementation and powerful enough to scale as fast and as far as you need.
        </p>
      </div>
    <div className='max-w-[1048px] w-full mx-auto flex gap-12 px-8 mt-8'>
      <div className='mt-44'>
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Card />
        <Card />
      </div>

    </div>
    
    </div>
  )
}

export default CardCrate