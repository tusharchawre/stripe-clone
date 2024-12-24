import React from 'react'

export function Footer() {
  return (
    <div className='w-full h-fit'>
      <div className='flex gap-2 md:gap-4 justify-around py-8'>

        <div className='flex flex-col justify-between relative'>
      <img src="/stripe-black.svg" alt="" className='text-black' />

      <p className='opacity-50 absolute w-52 -bottom-6'>© 2024 Stripe, Inc.</p>


        </div>

      <div className='flex flex-col gap-2'>
        <p className='font-medium'>Product & pricing</p>
        <p>Pricing</p>
        <p>Atlas</p>
        <p>Billing</p>
        <p>Capital</p>
        <p>Checkout</p>
        <p>Connect</p>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='font-medium'>Solutions</p>
        <p>Startups</p>
        <p>Enterprises</p>
        <p>Saas</p>
        <p>Platforms</p>
        <p>Ecommerce</p>
        <p>Marketplaces</p>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='font-medium'>Resources</p>
        <p>Guides</p>
        <p>Blog</p>
        <p>Licenses</p>
        <p>Sitemap</p>
        <p>Ecommerce</p>
        <p>Marketplaces</p>
      </div>

      </div>


          
    </div>
  )
}

