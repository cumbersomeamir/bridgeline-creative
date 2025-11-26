'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const methodologyItems = [
  'Deep cultural insight',
  'Artist behaviour analysis',
  'Market knowledge',
  'Visual direction',
  'Network access',
  'Experience design',
  'Scalable strategy',
]

const processSteps = [
  { label: 'Understand', items: ['Who the artist is', 'What the culture needs', 'How the market is evolving', 'Where the opportunity lies'] },
  { label: 'Build', items: ['Timelines', 'Creative frameworks', 'Routing strategies', 'Brand identity systems', 'Partnership mapping', 'Event scaling pathways'] },
]

export default function TheApproach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span 
          className="text-[15vw] text-white/[0.02] whitespace-nowrap select-none"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          METHODOLOGY
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">The BridgeLine Approach</p>
          <h2 
            className="text-4xl md:text-6xl text-white leading-[0.95] mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            <span className="text-rolling-red">PRECISION.</span> AESTHETIC.{' '}
            <span className="text-rolling-red">STRATEGY.</span>
          </h2>
        </motion.div>

        {/* Methodology blend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <p className="text-white/60 text-lg text-center mb-8">Our methodology blends:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {methodologyItems.map((item, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                className="px-4 py-2 text-sm text-white/80 border border-white/20 hover:border-rolling-red/50 hover:text-rolling-red transition-all duration-300"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              className="p-8 bg-black/50 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <span 
                  className="text-5xl text-rolling-red/20"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  0{index + 1}
                </span>
                <h3 
                  className="text-3xl text-white"
                  style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                >
                  {step.label.toUpperCase()}
                </h3>
              </div>
              <ul className="space-y-3">
                {step.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/70">
                    <span className="text-rolling-red">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Result statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 border border-rolling-red/30 bg-rolling-red/5">
            <p className="text-xl text-white">
              The result: artists and IPs that feel{' '}
              <span className="text-rolling-red font-semibold">coherent</span>,{' '}
              <span className="text-rolling-red font-semibold">distinctive</span>, and{' '}
              <span className="text-rolling-red font-semibold">world-class</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

