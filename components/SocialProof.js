'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const networkItems = [
  'Indian festival promoters',
  'UK/Europe collectives',
  'International booking partners',
  'Brand collaborators',
  'Creative directors',
  'Designers & visual storytellers',
]

const experienceItems = [
  'Artist launches',
  'India-wide tours',
  'UK–India routing',
  'Event IP creation',
  'Creative consulting',
  'High-impact branding',
  'Underground culture building',
]

const edgePoints = [
  { label: 'Industry Experience', icon: '◆' },
  { label: 'Creative Vision', icon: '◆' },
  { label: 'International Networks', icon: '◆' },
]

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Background images grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-4 h-full">
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&q=80" alt="" fill className="object-cover" />
          </div>
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80" alt="" fill className="object-cover" />
          </div>
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80" alt="" fill className="object-cover" />
          </div>
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80" alt="" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 0.1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-20 left-6 md:left-12 lg:left-24 text-[200px] font-bold text-white leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        10
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Our Credentials</p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95]"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            TRUSTED BY THE<br />
            <span className="text-rolling-red">UNDERGROUND</span>
          </h2>
        </motion.div>

        {/* Image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&q=80',
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80',
            'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&q=80',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80',
          ].map((src, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden group">
              <Image
                src={src}
                alt="Event"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-rolling-red/0 group-hover:bg-rolling-red/20 transition-all duration-500" />
            </div>
          ))}
        </motion.div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Network */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/50 backdrop-blur-sm p-8 border border-white/10"
          >
            <h3 
              className="text-xl text-rolling-red mb-6 pb-4 border-b border-rolling-red/30"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.1em' }}
            >
              OUR NETWORK INCLUDES
            </h3>
            <ul className="space-y-3">
              {networkItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
                  className="flex items-center gap-3 text-white/70"
                >
                  <span className="w-1.5 h-1.5 bg-rolling-red rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black/50 backdrop-blur-sm p-8 border border-white/10"
          >
            <h3 
              className="text-xl text-white mb-6 pb-4 border-b border-white/30"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.1em' }}
            >
              OUR EXPERIENCE SPANS
            </h3>
            <ul className="space-y-3">
              {experienceItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
                  className="flex items-center gap-3 text-white/70"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Edge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-black/50 backdrop-blur-sm p-8 border border-white/10"
          >
            <h3 
              className="text-xl text-rolling-red mb-6 pb-4 border-b border-rolling-red/30"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.1em' }}
            >
              OUR EDGE
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              A rare combination in South Asia's growing music scene:
            </p>
            <div className="space-y-4">
              {edgePoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-white/10 hover:border-rolling-red/50 transition-all duration-300"
                >
                  <span className="text-rolling-red text-xl">{point.icon}</span>
                  <span className="text-white font-medium">{point.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10"
        >
          {[
            { value: '2', label: 'Artists' },
            { value: '2', label: 'Countries' },
            { value: '∞', label: 'Possibilities' },
            { value: '1', label: 'Vision' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <span 
                className="text-5xl md:text-6xl text-rolling-red"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {stat.value}
              </span>
              <p className="text-white/50 text-sm uppercase tracking-wider mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
