import React from 'react'
import { Button } from '../Button'
import { AnimatePresence, motion } from 'motion/react';

export function Developers({ref}) {

  const features = [
    {
        title: "Code Review",
        description: "Collaborative code reviews",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-purple-400 to-indigo-400"
    },
    {
        title: "CI/CD",
        description: "Continuous integration & deployment",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-green-400 to-blue-400"
    },
    {
        title: "Debugging",
        description: "Advanced debugging tools",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-red-400 to-yellow-400"
    },
    {
        title: "Version Control",
        description: "Git-based collaboration",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-blue-400 to-cyan-400"
    },
    {
        title: "API Management",
        description: "Streamlined API workflows",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-teal-400 to-blue-400"
    },
    {
        title: "Performance Monitoring",
        description: "Real-time application metrics",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-orange-400 to-red-400"
    },
    {
        title: "Package Management",
        description: "Effortless dependency handling",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-pink-400 to-purple-400"
    },
    {
        title: "Testing",
        description: "Automated testing frameworks",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-yellow-400 to-green-400"
    },
    {
        title: "DevOps",
        description: "Streamlined infrastructure management",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-gray-400 to-indigo-400"
    },
    {
        title: "Documentation",
        description: "Beautiful & accessible docs",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-cyan-400 to-teal-400"
    },
    {
        title: "Code Linting",
        description: "Enforce coding standards",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-green-400 to-yellow-400"
    },
    {
        title: "Cloud Deployment",
        description: "Seamless cloud integrations",
        icon: "/placeholder.svg?height=48&width=48",
        gradient: "from-blue-400 to-purple-400"
    }
];




  return (
    <AnimatePresence>
    <div ref={ref} className="w-[50vw] h-fit  rounded-xl mx-auto px-4 py-6">
       
        <div 
       
        className='bg-white rounded-xl p-4'>
    DEVELOPERS
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

