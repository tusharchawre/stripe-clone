import React from 'react'

export function LogoSlabs() {

    const svgSrc = [
        "/logos/open-ai.svg",
        "/logos/amaxon.svg",
        "/logos/google.svg",
        "/logos/anthropic.svg",
        "/logos/marriot.svg",
        "/logos/shopify.svg",
        "/logos/airbnb.svg",
        "/logos/urbn.svg"
    ]



  return (
    <div className='max-w-[1048px] w-full mx-auto py-28'>
        <div className='grid grid-cols-4 gap-14'>
            {svgSrc.map((src)=>(
                <div className='flex items-center justify-center'>
                <img src={src} alt="" />
            </div>
            ))}
            
        </div>

    </div>
  )
}

