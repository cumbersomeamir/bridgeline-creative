'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    number: '01',
    title: 'Artist-First',
    description: 'We prioritize long-term artist growth over short-term noise. Every decision is rooted in the artist\'s vision, identity, and sustainability.',
    icon: '◆'
  },
  {
    number: '02',
    title: 'Culture Over Hype',
    description: 'Trends fade — culture lasts. We invest in talent and experiences with depth, impact, and emotional resonance.',
    icon: '◆'
  },
  {
    number: '03',
    title: 'Global Thinking',
    description: "India-first doesn't mean India-only. We build careers and IPs that scale across borders, markets, and communities.",
    icon: '◆'
  },
  {
    number: '04',
    title: 'Creativity Meets Strategy',
    description: 'We reject the false separation between creativity and structure. BridgeLine Creative is engineered to deliver both — with precision.',
    icon: '◆'
  },
  {
    number: '05',
    title: 'Relationship-Driven',
    description: 'This industry moves through trust, understanding, and long-term partnerships. We build strong, meaningful relationships.',
    icon: '◆'
  },
  {
    number: '06',
    title: 'Execution Excellence',
    description: 'From visual identity to touring to IP creation — we care about details because details matter.',
    icon: '◆'
  },
]

export default function Values() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(212, 0, 0, 0.5) 100px,
              rgba(212, 0, 0, 0.5) 101px
            )`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Our Values</p>
          <h2 
            className="text-4xl md:text-6xl text-white leading-[0.95] mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            THE PRINCIPLES THAT<br />
            <span className="text-rolling-red">GUIDE EVERYTHING</span> WE BUILD
          </h2>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group relative p-8 bg-[#0a0a0a] border border-white/5 hover:border-rolling-red/30 transition-all duration-500"
            >
              {/* Number */}
              <span 
                className="absolute top-4 right-4 text-5xl text-white/5 group-hover:text-rolling-red/20 transition-colors duration-500"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {value.number}
              </span>
              
              {/* Icon */}
              <span className="inline-flex items-center justify-center w-10 h-10 text-rolling-red text-xl border border-rolling-red/30 mb-6 group-hover:bg-rolling-red group-hover:text-white transition-all duration-300">
                {value.icon}
              </span>
              
              {/* Title */}
              <h3 className="text-xl text-white font-semibold mb-3 group-hover:text-rolling-red transition-colors duration-300">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {value.description}
              </p>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-rolling-red group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

