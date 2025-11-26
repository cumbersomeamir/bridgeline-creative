'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const indiaPoints = [
  'Explosive streaming growth',
  'Expanding festival circuits',
  'New venues across metros',
  'Global-minded artists',
  'Underground communities building unique sounds',
]

const ukPoints = [
  'Most influential electronic genres',
  'Legendary clubs and festivals',
  'Industry-leading talent agencies',
  'Established promoter networks',
  'Deep-rooted underground culture',
]

export default function OurStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
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
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h2 
            className="text-4xl md:text-6xl text-white leading-[0.95] mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            BORN IN <span className="text-rolling-red">INDIA.</span><br />
            GROWING IN THE <span className="text-rolling-red">UK.</span><br />
            OPEN TO THE WORLD.
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            BridgeLine Creative emerged at the intersection of two powerful cultural hubs.
          </p>
        </motion.div>

        {/* Two columns - India & UK */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* India */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80"
                  alt="India music scene"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-rolling-red/20 group-hover:bg-rolling-red/10 transition-colors duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 
                  className="text-4xl text-rolling-red mb-4"
                  style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                >
                  INDIA
                </h3>
                <p className="text-white/70 mb-6">
                  A rapidly rising independent music scene fueled by:
                </p>
                <ul className="space-y-2">
                  {indiaPoints.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                      className="flex items-center gap-2 text-white/80 text-sm"
                    >
                      <span className="text-rolling-red">▸</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* UK */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                  alt="UK music scene"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/5 transition-colors duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 
                  className="text-4xl text-white mb-4"
                  style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                >
                  UNITED KINGDOM
                </h3>
                <p className="text-white/70 mb-6">
                  A global powerhouse known for:
                </p>
                <ul className="space-y-2">
                  {ukPoints.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-2 text-white/80 text-sm"
                    >
                      <span className="text-white">▸</span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Gap / Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-black/50 border border-white/10 p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/50 text-lg mb-6">Our founders recognized a massive gap:</p>
            <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed">
              <span className="text-rolling-red font-semibold">Indian artists</span> had the talent and audience — 
              but lacked structured access to global ecosystems.
            </p>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Simultaneously, <span className="text-rolling-red font-semibold">UK promoters and brands</span> sought 
              emerging markets and new cultural narratives.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-rolling-red to-transparent mb-8" />
            <p className="text-white/80 text-lg">
              BridgeLine Creative was designed to sit precisely in the middle — 
              <span className="text-rolling-red"> connecting people, cultures, networks, and opportunities.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

