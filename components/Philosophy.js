'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const philosophyPoints = [
  'We build artists who stand for something.',
  'We build experiences that feel timeless.',
  'We build IPs that create community.',
  'We build bridges across markets and cultures.',
]

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=1920&q=80"
          alt="Abstract art"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      {/* Large quote marks */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 text-[300px] text-rolling-red leading-none pointer-events-none select-none"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        "
      </motion.div>

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 0.1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-20 right-6 md:right-12 lg:right-24 text-[200px] font-bold text-white leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        09
      </motion.span>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Image row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80"
              alt="DJ culture"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-rolling-red/10" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden translate-y-8">
            <Image
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80"
              alt="Concert lights"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-rolling-red/10" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80"
              alt="Festival crowd"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-rolling-red/10" />
          </div>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Brand Philosophy</p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95]"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            CULTURE BEFORE COMMERCIAL.<br />
            <span className="text-rolling-red">DEPTH OVER NOISE.</span>
          </h2>
        </motion.div>

        {/* Philosophy intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 text-lg mb-16 max-w-3xl mx-auto text-center"
        >
          Every decision, every strategy, every design is built on our underlying philosophy:
        </motion.p>

        {/* Philosophy points */}
        <div className="space-y-8 mb-16">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              className="relative text-center"
            >
              <p className="text-2xl md:text-3xl text-white/90 leading-relaxed">
                <span className="text-rolling-red">We build</span>{' '}
                {point.replace('We build ', '')}
              </p>
              {index < philosophyPoints.length - 1 && (
                <div className="w-16 h-px bg-white/10 mx-auto mt-8" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="pt-16 border-t border-white/10 text-center"
        >
          <p className="text-xl text-white/70 leading-relaxed">
            We aim to elevate underground culture into global relevance —{' '}
            <span className="text-rolling-red font-semibold">without compromising authenticity.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
