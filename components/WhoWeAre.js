'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const pillars = [
  { title: 'A talent incubator', icon: '◆' },
  { title: 'A strategic partner', icon: '◆' },
  { title: 'A creative studio', icon: '◆' },
  { title: 'An event IP powerhouse', icon: '◆' },
  { title: 'A culture-first agency', icon: '◆' },
]

export default function WhoWeAre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80"
          alt="Concert crowd"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
      </div>
      
      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 0.1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-20 left-6 md:left-12 lg:left-24 text-[200px] font-bold text-white leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        02
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Who We Are</p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            A NEW-AGE AGENCY FOR<br />
            <span className="text-rolling-red">A NEW WAVE OF ARTISTS</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              BridgeLine Creative operates at the intersection of talent management, creative consulting, 
              event IP development, and cross-border music ecosystems.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              We represent breakthrough electronic and underground artists, partner with promoters and festivals, 
              and develop original IPs that push culture forward.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Our India-first foundation gives us deep access to one of the world's fastest-growing music markets, 
              while our growing UK presence connects us to Europe's established club and festival networks.
            </p>
            
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80"
                  alt="DJ performing"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-rolling-red/20 mix-blend-multiply" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&q=80"
                  alt="Music studio"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-rolling-red/20 mix-blend-multiply" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Pillars */}
          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex items-center gap-4 p-4 border border-white/10 hover:border-rolling-red/50 transition-all duration-300 bg-black/50 backdrop-blur-sm"
              >
                <span className="text-rolling-red text-xl group-hover:scale-125 transition-transform duration-300">
                  {pillar.icon}
                </span>
                <span className="text-white text-lg tracking-wide">{pillar.title}</span>
              </motion.div>
            ))}
            
            {/* Additional image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative h-48 mt-6 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80"
                alt="Concert lights"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/70 text-sm italic">
                  "Elevating South Asian talent onto the global stage"
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Team description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <p className="text-white/70 text-xl max-w-4xl leading-relaxed">
            Our team spans <span className="text-rolling-red">artist managers</span>, <span className="text-white">creative directors</span>, 
            <span className="text-rolling-red"> designers</span>, <span className="text-white">promoters</span>, and 
            <span className="text-rolling-red"> strategists</span> — united by a shared goal: 
            <span className="text-white font-medium"> elevate South Asian talent onto the global stage.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
