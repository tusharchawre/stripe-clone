import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Products } from './DropDownContent/Products'
import useMeasure from 'react-use-measure'
import { Solutions } from './DropDownContent/Solutions'
import { Developers } from './DropDownContent/Developers'
import { Resources } from './DropDownContent/Resources'


export function DropDownMenu() {
    const [activeTab, setActiveTab] = useState("")
    const [ref , bounds] = useMeasure()
    const liRef = useRef()

    const Tabs = [
        "Products",
        "Solutions",
        "Developers",
        "Resources",
        "Pricing",
    ]

    const content = useMemo(()=>{
        switch(activeTab){
            case "Products":
                return (
                    <>
                    <div>
                        <Products ref={ref} />
                    </div>
                    </>
                )
            case "Solutions":
                return (
                    <>
                    <div>
                        <Solutions ref={ref} />
                    </div>
                    </>
                )
        case "Developers":
            return (
                <>
                   <div>
                            <Developers ref={ref} />
                        </div>
                        </>
                    )
                case "Resources":
                    return (
                        <>
                        <div>
                            <Resources ref={ref} />
                        </div>
                        </>
                    )
        }
    }, [activeTab])


  return (
    <>
    <AnimatePresence>
    <ul
    onMouseLeave={()=>setActiveTab("")}
    className='flex h-full relative z-40 -translate-x-8'>
        {Tabs.map((tab)=>(
            <motion.li
            onMouseEnter={(e)=>{
                setActiveTab(tab)
            }}
            ref={liRef}
            
            className='px-[1.2rem] drop-shadow-lg'
            >
                {tab}

                {activeTab === tab ? (
                    <>

                        <motion.div 
                        layoutId='highlight'
                        initial={{width : bounds.width , height: bounds.height}}
                        style={{
                         x: -100 
                        }}
                        transition={{duration: 0.2 , ease:  "easeInOut"}}
                        className='absolute rounded-md text-black' 
                        >
                            {content}
                        </motion.div>
                        </>
                    ): null} 
                
            </motion.li>
        ))}

    </ul>
    </AnimatePresence>
    </>



  )
    
}

