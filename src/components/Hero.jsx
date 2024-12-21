import React from 'react'
import { Button } from './Button'

export function Hero() {
  return (
    <>
    <div className='relative translate-y-12 hidden md:block'>
      <img className='drop-shadow-md shadow-2xl absolute right-0 backdrop-blur-lg' src="/HeroGlass.svg" alt="" />
      <img className='absolute right-[310px] top-14 drop-shadow-2xl' src="/Phone-mock.svg" alt="" />
    </div>
    
    <div className='max-w-[1048px] mx-auto'>
      <div className='w-full mt-11 mb-8'>
      <button className='bg-black/20 rounded-full text-white py-[0.18rem] px-3 text-[13px]'>
        Preview
      </button>
      </div>
      <div className=' relative max-w-[50%]'>
      <p className='font-sohne text-[5rem] mix-blend-soft-light leading-none tracking-tighter text-black'>
        Financial <br />
        infrastructure <br />
        to grow your <br />
        revenue
      </p>
      <p className='absolute top-0 opacity-40 font-sohne text-[5rem] leading-none tracking-tighter text-black'>
        Financial <br />
        infrastructure <br />
        to grow your <br />
        revenue
      </p>
      </div>

      <div className='max-w-[45%] my-8 text-[18px] leading-[1.5] font-sohneLight font-extrabold'>
      Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
      </div>
      <Button className="bg-blue-950 text-white">
        Request an invite
      </Button>
    
    </div>

    <div>
      
    </div>


    </>
  )
}

