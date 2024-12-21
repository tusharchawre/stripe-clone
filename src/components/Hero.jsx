import React from 'react'

export function Hero() {
  return (
    <>
    <div className='relative translate-y-12'>
      <img className='drop-shadow-md shadow-2xl absolute right-0 backdrop-blur-lg' src="/HeroGlass.svg" alt="" />
      <img className='absolute right-[310px] top-14 drop-shadow-2xl' src="/Phone-mock.svg" alt="" />
    </div>
    
    <div className='max-w-[1048px] mx-auto'>
      <div className='w-full mt-11 mb-8'>
      <button className='bg-black/20 rounded-full text-white py-[0.18rem] px-3 text-[13px]'>
        Preview
      </button>
      </div>
      <div className='mix-blend-difference'>
      <p className='font-sohne text-[5rem] leading-none tracking-tighter mix-blend-difference'>
        Financial <br />
        infrastructure <br />
        to grow your <br />
        revenue
      </p>
      </div>
    
    </div>


    </>
  )
}

