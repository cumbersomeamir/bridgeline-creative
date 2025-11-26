'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'

const Globe3D = dynamic(() => import('./Globe3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
})

export default function AboutHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-black pt-20 md:min-h-screen">
      {/* 3D Globe Background */}
      <Globe3D />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-20 md:min-h-screen">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-rolling-red text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
          >
            Our Story
          </motion.p>
          
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mb-6 sm:mb-8"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            <span className="text-white">BUILDING</span>{' '}
            <span className="text-rolling-red">CULTURE,</span>
            <br />
            <span className="text-white">CREATORS &</span>
            <br />
            <span className="text-rolling-red">CROSS-BORDER</span>
            <br />
            <span className="text-white">EXPERIENCES</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/70 text-sm sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-6 sm:mb-8"
          >
            BridgeLine Creative is an India–UK based talent management and culture-building agency 
            operating across the fast-evolving global music landscape.
          </motion.p>
          
          {/* Key statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-l-2 border-rolling-red pl-4 sm:pl-6 mb-8 sm:mb-10"
          >
            <p className="text-white/90 text-sm sm:text-lg italic">
              We are not just a management company — we are a{' '}
              <span className="text-rolling-red font-semibold">strategic partner</span>,{' '}
              <span className="text-rolling-red font-semibold">creative engine</span>, and{' '}
              <span className="text-rolling-red font-semibold">cultural architect</span>{' '}
              for artists and brands shaping the next decade.
            </p>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="w-8 sm:w-12 h-px bg-rolling-red" />
            <span className="text-white/40 text-xs sm:text-sm tracking-wider uppercase">Scroll to explore</span>
          </motion.div>
          
          {/* Location badges - mobile only (inline) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex md:hidden gap-3 mt-8"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 bg-rolling-red/20 border border-rolling-red/50 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-rolling-red rounded-full animate-pulse" />
              <span className="text-white text-xs">India</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/30 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <span className="text-white text-xs">UK</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Location badges - hidden on mobile, shown on larger screens */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="hidden md:flex absolute bottom-32 right-6 md:right-12 lg:right-24 z-20 flex-col gap-3"
      >
        <div className="flex items-center gap-3 px-4 py-2 bg-rolling-red/20 border border-rolling-red/50 backdrop-blur-sm">
          <div className="w-2 h-2 bg-rolling-red rounded-full animate-pulse" />
          <span className="text-white text-sm">India</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/30 backdrop-blur-sm">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-white text-sm">United Kingdom</span>
        </div>
      </motion.div>
    </section>
  )
}

