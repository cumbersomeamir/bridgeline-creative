'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'

const ConnectionSphere3D = dynamic(() => import('./ConnectionSphere3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
})

export default function ContactHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-black">
      {/* 3D Background */}
      <ConnectionSphere3D />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <a href="/" className="text-white/50 text-sm hover:text-rolling-red transition-colors">Home</a>
            <span className="text-white/30">/</span>
            <span className="text-rolling-red text-sm">Contact</span>
          </div>
          
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            <span className="text-rolling-red">GET IN</span>{' '}
            <span className="text-white">TOUCH</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Let's build culture, together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

