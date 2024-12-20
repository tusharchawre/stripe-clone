import React from 'react'
import { Arrow } from './arrow'

export function Button({children, className, arrowFill}) {
  return (
    <button className={`${className} flex items-center group/button px-2 py-1 rounded-full`}>
        {children}
        <Arrow fill={arrowFill} />
    </button>
  )
}

