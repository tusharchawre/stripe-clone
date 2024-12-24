import Globe from 'react-globe.gl';

import React, { useEffect, useRef } from 'react'

export function GlobeCase() {

    const globeRef = useRef()

    const N = 15;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [['grey', 'grey', 'grey', 'grey'][Math.round(Math.random() * 3)], ['grey', 'grey', 'grey', 'grey'][Math.round(Math.random() * 3)]]
    }));


    useEffect(() => {
        // Auto-rotate
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.5;
      }, []);
  


  return (
    <div className='w-full bg-[#F6F9FC] h-[850px] overflow-hidden pt-20 relative'>
        <div className='w-full bg-[#0A2540] h-[1000px] -skew-y-6 absolute z-0' />
            <div className='max-w-[1048px] w-full mx-auto pt-44 relative z-20 h-full'>
            <p className='pl-4 font-bold text-lg text-[#57D4F9] font-sohne'>Global Scale</p>
            <p className='py-8 pl-4 text-4xl font-semibold text-white md:w-[30%] leading-10'>The backbone for global commerce
            </p>
            <p className='pl-4 md:w-[40%] text-lg text-slate-400'>
                Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
        </p>
        <div className='flex w-full justify-around mt-24 gap-4 md:gap-8'>
            <div className='w-[25%]'>
            <p className='my-4 text-2xl font-semibold text-white w-[30%] border-l-2 border-[#57D4F9] px-4'>
                500M+
            </p>
            <p className='text-sm text-slate-400 px-4'>
                API requests per day,peaking at 13,000 requests per second.
        </p>


            </div>
            <div className='w-[25%]'>
            <p className='my-4 text-2xl font-semibold text-white w-[30%] border-l-2 border-[#57D4F9] px-4'>
                99.999%
            </p>
            <p className='text-sm text-slate-400  px-4'>
            historical uptime for <span className='font-bold text-[#57D4F9]'>Stripe services.</span>
        </p>


            </div>

            <div className='w-[25%]'>
            <p className='my-4 text-2xl font-semibold text-white w-[30%] border-l-2 border-[#57D4F9] px-4'>
                47+
            </p>
            <p className='text-sm text-slate-400 px-4'>
                contries with local acquiring.
        </p>


            </div>

            <div className='w-[25%]'>
            <p className='my-4 text-2xl font-semibold text-white w-[30%] border-l-2 border-[#57D4F9] px-4'>
                135+
            </p>
            <p className='text-sm text-slate-400 px-4'>
                currencies and payment methods supported.
        </p>


            </div>

        </div>

        </div>

        <div className='absolute hidden lg:block z-10 bottom-0 left-[55vw] scale-[1.4] rotate-12'>
        <Globe
        ref={globeRef}
        globeImageUrl="/globe.jpeg"
        showGraticules="true"
      arcsData={arcsData}
      arcColor={'color'}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      atmosphereColor="#0A2540"
      backgroundColor='#0a254000'
      />
        </div>
    </div>
  )
}

