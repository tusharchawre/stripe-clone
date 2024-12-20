


import React from 'react'

export function Arrow({fill}) {
  return (
    <div className='relative w-5 h-full flex items-center text'>
    <div 
    className='absolute size-6 fill-white group-hover/button:translate-x-1 transition-all ease-in-out duration-200'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill}>
<path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" stroke-width="2">
</path></svg>
    </div>
    <div 
    className='absolute h-full translate-y-[0.16rem] translate-x-1 size-6 text-white opacity-0 group-hover/button:opacity-100 transition-all ease-in-out duration-200'>



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill}>
<line class="arrow-icon__line" x1="13" y1="8.5" y2="8.5" stroke={fill} stroke-width="2" />
</svg>
    </div>
    </div>
  )
}


{/* <div className={`${className}`}>



</div> */}