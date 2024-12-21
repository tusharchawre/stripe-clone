import React from 'react'
import { Arrow } from './arrow'

export function Button({children, className, arrowFill}) {
  return (
    <button className={`${className} flex items-center justify-center group/button px-[0.9rem] py-[0.4rem] rounded-full font-medium text-sm`}>
        {children}
        <Arrow fill={arrowFill} />
    </button>
  )
}

