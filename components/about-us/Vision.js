'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const visionPoints = [
  'A leading India–UK artist incubator',
  'A global hub for creative collaboration',
  'A producer of iconic cultural IPs',
  'A bridge that launches South Asian talent globally',
  'A trusted partner for promoters, festivals, brands worldwide',
]

export default function Vision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Our Vision</p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] mb-8"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            TO BECOME THE <span className="text-rolling-red">DEFINING</span><br />
            CULTURE-BUILDING AGENCY<br />
            OF <span className="text-rolling-red">OUR GENERATION</span>
          </h2>
        </motion.div>

        {/* Vision points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-white/60 text-lg mb-8">In the next decade, we envision BridgeLine Creative becoming:</p>
          <div className="space-y-4">
            {visionPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                className="flex items-center justify-center gap-4"
              >
                <span className="text-rolling-red">◆</span>
                <span className="text-white/90 text-lg">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Aspirational statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-12 border-t border-white/10"
        >
          <p className="text-white/70 text-xl leading-relaxed">
            We want our <span className="text-rolling-red">artists to headline stages</span> across continents, 
            our <span className="text-rolling-red">IPs to become cultural landmarks</span>, and our work to 
            inspire the <span className="text-rolling-red">next generation of creative talent</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

