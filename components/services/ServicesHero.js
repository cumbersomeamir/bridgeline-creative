'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'

const Prism3D = dynamic(() => import('./Prism3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
})

export default function ServicesHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative h-[70vh] w-full overflow-hidden bg-black">
      {/* 3D Background */}
      <Prism3D />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
        <div className="max-w-4xl">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            <span className="text-rolling-red">WHAT</span>{' '}
            <span className="text-white">WE DO</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Full-spectrum creative and strategic services designed to transform artists, 
            events, and cultural properties into globally competitive brands.
          </motion.p>
        </div>
      </div>
      
      {/* Service count badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-12 right-6 md:right-12 lg:right-24 z-20"
      >
        <div className="flex items-center gap-4 px-6 py-4 bg-rolling-red/10 border border-rolling-red/30 backdrop-blur-sm">
          <span 
            className="text-5xl text-rolling-red"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            05
          </span>
          <div>
            <p className="text-white text-sm font-medium">Core</p>
            <p className="text-white/60 text-sm">Services</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

