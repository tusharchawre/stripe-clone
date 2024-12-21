import React from 'react'
import { Button } from './Button'
import { DropDownMenu } from './DropDownMenu'

function Navbar() {
  



  return (
    <div className='w-full max-w-[1048px] mx-auto inset-0 flex items-center h-[4.5rem] justify-between'>
        <div className='flex gap-11 text-white font-medium text-sm items-center'>
        <img src="/stripe.svg" alt="" />
        <DropDownMenu />
        </div>

        <div className='flex gap-4 '>
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