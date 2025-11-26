'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const indiaStats = [
  'Independent music expanding at 30–40% YoY',
  'Top 10 streaming markets globally',
  'Electronic & underground culture growing rapidly',
  'Cross-border India-UK collaborations rising',
  'International promoters routing through India',
  'Social media driving artist success',
  'Festivals scaling across South Asia',
]

const ukStats = [
  "Europe's most influential electronic music market",
  'Global hub for underground culture',
  'Birthplace of leading music brands & festivals',
]

export default function Industry() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&q=80"
            alt="India nightlife"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80"
            alt="UK club scene"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]" />
        </div>
      </div>

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 0.1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-20 right-6 md:right-12 lg:right-24 text-[200px] font-bold text-white leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        05
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">The Industry</p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-8"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            WHERE INDIA MEETS A<br />
            <span className="text-rolling-red">GLOBAL CREATIVE RENAISSANCE</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* India column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* India image */}
            <div className="relative aspect-video mb-8 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80"
                alt="India city lights"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-rolling-red text-3xl" style={{ fontFamily: 'var(--font-bebas)' }}>
                  INDIA
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-rolling-red" />
              <h3 
                className="text-3xl text-rolling-red"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
              >
                FASTEST GROWING MARKET
              </h3>
            </div>
            <p className="text-white/70 mb-8 leading-relaxed">
              The Indian music industry is entering a historic growth phase:
            </p>
            <ul className="space-y-4">
              {indiaStats.map((stat, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-rolling-red mt-1">▸</span>
                  <span className="text-white/80">{stat}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* UK column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* UK image */}
            <div className="relative aspect-video mb-8 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80"
                alt="UK festival"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white text-3xl" style={{ fontFamily: 'var(--font-bebas)' }}>
                  UNITED KINGDOM
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-white" />
              <h3 
                className="text-3xl text-white"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
              >
                ELECTRONIC MUSIC HUB
              </h3>
            </div>
            <p className="text-white/70 mb-8 leading-relaxed">
              Simultaneously, the UK remains:
            </p>
            <ul className="space-y-4 mb-12">
              {ukStats.map((stat, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-white mt-1">▸</span>
                  <span className="text-white/80">{stat}</span>
                </motion.li>
              ))}
            </ul>

            {/* Visual element - Bridge graphic */}
            <div className="relative h-32 mt-8">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-rolling-red via-white to-rolling-red origin-left"
              />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-rolling-red rounded-full" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-rolling-red rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="w-8 h-8 bg-white rotate-45"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl text-white/90" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}>
            BRIDGELINE CREATIVE SITS AT THE{' '}
            <span className="text-rolling-red">PERFECT INTERSECTION</span> OF BOTH WORLDS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
