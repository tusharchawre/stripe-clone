import React, { useState } from 'react'
import { Button } from '../Button'
import { AnimatePresence, motion } from 'motion/react';
import useMeasure from 'react-use-measure';

export function Solutions({ref}) {
  const [direction, setDirection] = useState(1)

  const features = [
    {
        title: "Analytics",
        description: "Real-time insights",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-teal-400 to-blue-400"
    },
    {
        title: "Integrations",
        description: "Third-party app support",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-purple-400 to-indigo-400"
    },
    {
        title: "Support",
        description: "24/7 customer assistance",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-orange-400 to-pink-400"
    },
    {
        title: "Reports",
        description: "Detailed financial reports",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-gray-400 to-blue-400"
    },
    {
        title: "Compliance",
        description: "Regulation adherence",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-red-400 to-yellow-400"
    },
    {
        title: "Automation",
        description: "Workflow optimization",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-blue-400 to-cyan-400"
    },
    {
        title: "Security",
        description: "Enterprise-grade protection",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-pink-400 to-red-400"
    },
    {
        title: "Notifications",
        description: "Real-time updates",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-yellow-400 to-orange-400"
    },
];





  return (
    <AnimatePresence>
    <div ref={ref} className="w-[50vw] h-fit  rounded-xl mx-auto px-4 py-6">
        <div className='bg-white rounded-xl p-4'>
    SOLUTIONS
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.3 , type: "string", bounce: 0}}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <div className={`w-fit h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center shrink-0`}>
            
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm font-light w-full line-clamp-1">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
    </div>
  </div>
  </AnimatePresence>
  )
}

