'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const missionPillars = [
  'Develop and represent breakthrough talent',
  'Build sustainable careers through long-term strategy',
  'Create high-impact event IPs rooted in storytelling',
  'Bridge Indian and UK music networks through tours, collaborations & routing',
  'Elevate underground culture with premium creative direction',
  'Support artists through branding, marketing, and international expansion',
]

export default function Mission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80"
          alt="Festival crowd"
          fill
          className="object-cover"
        />
      </div>

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 0.1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-20 right-6 md:right-12 lg:right-24 text-[200px] font-bold text-white leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        03
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Our Mission</p>
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-8"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
            >
              BUILD ARTISTS.<br />
              <span className="text-rolling-red">BUILD CULTURE.</span><br />
              BUILD LEGACY.
            </h2>
            <p className="text-white/70 text-xl leading-relaxed">
              We exist to empower artists, shape cultural experiences, and create scalable IPs 
              that have real impact across India, the UK, and international circuits.
            </p>
          </motion.div>
          
          {/* Feature image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80"
                alt="Concert performance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-rolling-red/30" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rolling-red/20 backdrop-blur-sm border border-rolling-red/50 flex items-center justify-center">
              <span className="text-rolling-red text-4xl" style={{ fontFamily: 'var(--font-bebas)' }}>
                ∞
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mission pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 bg-black/50 border border-white/5 hover:border-rolling-red/30 transition-all duration-500"
            >
              {/* Number indicator */}
              <span 
                className="absolute top-4 right-4 text-4xl text-white/5 group-hover:text-rolling-red/20 transition-colors duration-500"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                0{index + 1}
              </span>
              
              {/* Red accent line */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-rolling-red group-hover:w-full transition-all duration-500" />
              
              <p className="text-white/90 text-lg leading-relaxed pr-8">{pillar}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement with images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&q=80"
              alt="Music production"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-rolling-red/10" />
          </div>
          <div className="md:col-span-2 flex items-center">
            <p className="text-white/50 text-lg italic">
              Our mission is not only to manage talent — but to 
              <span className="text-rolling-red font-medium"> build ecosystems where talent thrives.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
