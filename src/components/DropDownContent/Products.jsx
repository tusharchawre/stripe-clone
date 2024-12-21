import React from 'react'
import { Button } from '../Button'
import { AnimatePresence, motion } from 'motion/react'

export function Products({ref}) {

    const features = [
        {
          title: "Payments",
          description: "Online payments",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-blue-400 to-purple-400"
        },
        {
          title: "Billing",
          description: "Subscription management",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-yellow-400 to-green-400"
        },
        {
          title: "Checkout",
          description: "Prebuilt payment form",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-purple-400 to-blue-400"
        },
        {
          title: "Invoicing",
          description: "Online invoices",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-yellow-400 to-green-400"
        },
        {
          title: "Elements",
          description: "Customizable payments UIs",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-cyan-400 to-purple-400"
        },
        {
          title: "Terminal",
          description: "In-person payments",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-blue-400 to-purple-400"
        },
        {
          title: "Payment Links",
          description: "No-code payments",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-blue-400 to-purple-400"
        },
        {
          title: "Financial Connections",
          description: "Linked financial account data",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-green-400 to-cyan-400"
        },
        {
          title: "Radar",
          description: "Fraud & risk management",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-purple-400 to-pink-400"
        },
        {
          title: "Identity",
          description: "Online identity verification",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-pink-400 to-purple-400"
        },
        {
          title: "Connect",
          description: "Payments for platforms",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-cyan-400 to-blue-400"
        },
        {
          title: "Climate",
          description: "Carbon removal",
          icon: "/placeholder.svg?height=48&width=48",
          gradient: "from-green-400 to-yellow-400"
        }
      ]


  return (
    <AnimatePresence>
    <div ref={ref} className="w-[50vw] h-fit  rounded-xl mx-auto px-4 py-6">
        <div className='bg-white rounded-xl p-4'>
    GLOBAL PAYMENTS
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

