import React from 'react'
import { Button } from './Button'
import { DropDownMenu } from './DropDownMenu'
import { useMediaQuery } from 'usehooks-ts'

function Navbar() {
  
  const isMobile = useMediaQuery('(max-width: 768px)')



  return (
    <div className='w-full max-w-[1048px] mx-auto inset-0 flex items-center h-[4.5rem] justify-between pl-4'>
        <div className={`flex gap-11 text-white font-medium text-sm items-center ${isMobile && "w-full"}`}>
        <img src="/stripe.svg" alt="" />
        {
          isMobile ? (
            <div className='w-full flex items-center justify-end mr-4'>
              <button className='bg-black/20 rounded-full text-white py-[0.18rem] px-3 text-[13px] '>
              <svg xmlns="http://www.w3.org/2000/svg" fill='white' className='size-4 text-white' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
              </button>
            </div>
          ): 
        <DropDownMenu />
        }
        </div>

        <div className='hidden md:flex gap-4 '>
       <Button className="text-white" arrowFill="white">
       <span className='h-full my-auto text-[0.95rem]'>
        Sign in
        </span>
       </Button>
       <Button className="bg-white text-orange-500" arrowFill="#f97316">
       <span className='h-full my-auto text-[0.95rem]'>
        Contact Sales
        </span>
       </Button>

        </div>
    </div>
  )
}

export default Navbar