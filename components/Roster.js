'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const artists = [
  {
    name: 'EXCLM',
    role: 'Electronic Artist',
    description: 'High-impact electronic artist with a cinematic sonic identity and India-wide touring presence.',
    image: '/exclm.jpg',
    tags: ['Electronic', 'Cinematic', 'India'],
  },
  {
    name: 'RENS',
    role: 'Underground Performer',
    description: 'Dynamic underground performer with UK–India crossover potential and a strong visual aesthetic.',
    image: '/rens.png',
    tags: ['Underground', 'UK-India', 'Visual'],
  },
]

export default function Roster() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="roster" className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=1920&q=80"
          alt="Studio background"
          fill
          className="object-cover"
        />
      </div>

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 0.1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-20 left-6 md:left-12 lg:left-24 text-[200px] font-bold text-white leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        08
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">The Roster</p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-8"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            CULTIVATING TOMORROW'S<br />
            <span className="text-rolling-red">BREAKTHROUGH ARTISTS</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our artist roster is intentionally curated, focused on talent we believe can shape 
            the future of underground culture.
          </p>
        </motion.div>

        {/* Artists grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="group relative"
            >
              {/* Artist card */}
              <div className="relative overflow-hidden border border-white/10 hover:border-rolling-red/50 transition-all duration-500">
                {/* Image */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  {/* Red accent on hover */}
                  <div className="absolute inset-0 bg-rolling-red/0 group-hover:bg-rolling-red/20 transition-all duration-500" />
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 opacity-20">
                    <div 
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artist.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs text-rolling-red border border-rolling-red/30 uppercase tracking-wider bg-black/50 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 
                    className="text-5xl text-white mb-1 group-hover:text-rolling-red transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                  >
                    {artist.name}
                  </h3>
                  <p className="text-rolling-red text-sm tracking-wider uppercase mb-4">
                    {artist.role}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {artist.description}
                  </p>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rolling-red/20 rotate-45 translate-x-16 -translate-y-16 group-hover:bg-rolling-red/40 transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future additions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative p-12 border border-dashed border-white/20 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80"
              alt="Future artists"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 text-center">
            <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Coming Soon</p>
            <h3 
              className="text-3xl text-white/50 mb-4"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
            >
              FUTURE ADDITIONS
            </h3>
            <p className="text-white/40 max-w-xl mx-auto">
              We are onboarding new talent across electronic, techno, and experimental genres — 
              prioritizing originality, discipline, and international scalability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
