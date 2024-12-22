import React from 'react'

export function Card({className}) {
  return (
    <div className={`${className} my-8 shadow-xl group/card md:aspect-[0.86] h-fit w-full bg-white rounded-md p-1 transition-all`}>
        <div className='h-[55%] w-full overflow-hidden pl-12 pt-10 bg-[#F6F9FC] rounded-md group-hover/card:h-[47%] transition-all duration-[250ms] ease-out relative'>
            <div className='opacity-0 group-hover/card:opacity-100 transition-all duration-[250ms] ease-out absolute -top-6  w-full h-full group-hover/card:animate-spin-slow blur-2xl' >
                <img src="/CardImages/blobs/blob-orange.svg" className='scale-125' alt="" />

            </div>
            <img src="/CardImages/Card1.webp" className='object-cover relative'/>
        </div>

        <div className='h-[45%] group-hover/card:h-[53%] bg-white px-4 py-5 rounded-b-md transition-all duration-[250ms] ease-out'>
            <div className='px-2 py-2 flex gap-2 justify-center items-center bg-[#F6F9FC] w-fit rounded-sm my-2'>
                <img src="/logos/atlas.svg" className='size-4' />
                <p>Atlas</p>

            </div>

            <h1 className='font-semibold text-2xl mb-1'>Incorporate your company
            </h1>
            <p className='text-md text-black/60'>
            Form a legal entity, issue stock, and start accepting payments.
            </p>

        </div>
        

    </div>
  )
}