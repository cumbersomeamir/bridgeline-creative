'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reasons = [
  {
    title: 'Artist-First Philosophy',
    description: 'We operate with a long-term management approach built around career sustainability, timeless artistry, and structured international growth.',
    icon: '✦'
  },
  {
    title: 'India × UK Positioning',
    description: 'Few agencies operate actively across both India and the UK — giving us the unique advantage of bridging two major markets.',
    icon: '✦'
  },
  {
    title: 'Creative + Strategic Hybrid Model',
    description: 'Most agencies are either strategic or creative. We are both — delivering brand direction, visual identity, event design, and strategic scaling under one roof.',
    icon: '✦'
  },
  {
    title: 'Access to Promoters, Festivals & Partners',
    description: 'Through our network, artists gain access to Indian club & festival promoters, UK/Europe underground circuits, international event brands, music labels, and creative collaborators.',
    icon: '✦'
  },
  {
    title: 'IP-Driven Approach',
    description: "We don't just book shows — we build long-lasting properties (events, concerts, series, concepts) that become platforms for artists & brands.",
    icon: '✦'
  },
  {
    title: 'High-Quality Creative Execution',
    description: 'From brand design to visual identity to event narrative — our work adheres to cinematic, premium aesthetics that elevate the entire artist experience.',
    icon: '✦'
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span 
          className="text-[20vw] text-white/[0.02] whitespace-nowrap select-none"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          WHY BRIDGELINE
        </span>
      </div>

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 0.1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-20 left-6 md:left-12 lg:left-24 text-[200px] font-bold text-white leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        04
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Why Us</p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95]"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            BECAUSE WE BUILD<br />
            <span className="text-rolling-red">VALUE, NOT NOISE</span>
          </h2>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 text-rolling-red text-2xl border border-rolling-red/30 group-hover:bg-rolling-red group-hover:text-white transition-all duration-300">
                    {reason.icon}
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-rolling-red transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
              
              {/* Bottom border */}
              <div className="mt-8 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

