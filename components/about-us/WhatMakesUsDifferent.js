'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const differentiators = [
  {
    title: 'Dual-Market Operations',
    subtitle: 'India + UK',
    description: 'We work on the ground in both regions, giving us unmatched access to international opportunities, promoters, venues, and creative collaborators.',
  },
  {
    title: 'Hybrid Agency Model',
    subtitle: 'All-In-One',
    description: 'Management + Creative Direction + IP Development — everything in one place.',
  },
  {
    title: 'Multi-Disciplinary Team',
    subtitle: 'Collective Expertise',
    description: 'Artist managers, tour coordinators, creative directors, designers, promoters, brand strategists, and event producers.',
  },
  {
    title: 'IP-Centric Approach',
    subtitle: 'Beyond Shows',
    description: 'We develop intellectual properties — not just shows. Our IPs tell stories, build communities, and create lasting value.',
  },
  {
    title: 'Underground Expertise',
    subtitle: 'Cultural Depth',
    description: 'We specialize in electronic and experimental communities, where authenticity and identity drive growth.',
  },
  {
    title: 'Long-Term Vision',
    subtitle: '3-5 Year Scale',
    description: 'Our focus is 3–5 year scale, not 3–5 month noise.',
  },
]

export default function WhatMakesUsDifferent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">What Makes Us Different</p>
          <h2 
            className="text-4xl md:text-6xl text-white leading-[0.95] mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            OUR <span className="text-rolling-red">EDGE</span> IN A<br />
            FAST-EVOLVING INDUSTRY
          </h2>
        </motion.div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group flex gap-6"
            >
              {/* Checkmark */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-rolling-red/10 border border-rolling-red/30 group-hover:bg-rolling-red group-hover:border-rolling-red transition-all duration-300">
                <svg className="w-6 h-6 text-rolling-red group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-xl text-white font-semibold group-hover:text-rolling-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-rolling-red text-xs tracking-wider uppercase">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Creative standards callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-black/50 border border-rolling-red/30"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-rolling-red">
              <span className="text-white text-xl">★</span>
            </div>
            <div>
              <h3 className="text-xl text-rolling-red font-semibold mb-2">
                High-Quality Creative Standards
              </h3>
              <p className="text-white/70">
                Cinematic visuals, minimal design, bold compositions — the BridgeLine aesthetic elevates every project we touch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

