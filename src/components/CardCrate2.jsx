import React from 'react'
import { Card } from './Card'


function CardCrate2() {
  return (
    <div className='px-4 w-full h-fit bg-[#F6F9FC] pb-10'>
      <div className='max-w-[1048px] w-full mx-auto pt-24'>
        <p className='font-bold text-lg text-[#6459F6] font-sohne'>Launch with ease
        </p>
        <p className='py-8 text-4xl font-semibold'>Low- and no-code options for getting started
        </p>
        <p className='md:w-[60%] text-lg text-slate-500'>If you’d like to use Stripe for your business but don’t have developers on staff, no problem. We have a few options depending on your needs.

        </p>
      </div>
    <div className='max-w-[1048px] w-full mx-auto md:flex px-8 md:p-0  gap-4 mt-4'>
     <Card
      className=""
        imgSrc="/CardImages/Card1.webp"
        blobSrc="/CardImages/blobs/blob-purple-blue.png"
        heading="Validate your idea"
        body="Test your product idea by launching payments with little to no code."
        logoSrc="/logos/payment-links.svg"
        logotext="Payment Links"
        />

<Card
        imgSrc="/CardImages/Card3.png"
        blobSrc="/CardImages/blobs/blob-green-yellow.png"
        heading="Sell to businesses"
        body="Launch a B2B business and collect one-time."
        logoSrc="/logos/invoice.svg"
        logotext="Invoicing"
        />

<Card
        imgSrc="/CardImages/Card2.png"
        blobSrc="/CardImages/blobs/blob-purple-blue.png"
        heading="Sell to consumers"
        body="Launch a B2C business with a prebuilt payment page."
        logoSrc="/logos/checkout.svg"
        logotext="Checkout"
        />
    </div>
    
    </div>
  )
}

export default CardCrate2