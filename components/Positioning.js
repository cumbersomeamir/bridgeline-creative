'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const positions = [
  {
    title: 'India-First',
    description: "We operate from the heart of one of the world's fastest-growing music ecosystems.",
    items: ['Promoters', 'Venues', 'Festivals', 'Artists', 'Communities', 'Creative partners'],
    color: 'rolling-red',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80'
  },
  {
    title: 'UK-Second',
    description: 'Our UK presence opens access to:',
    items: ["Europe's electronic music infrastructure", 'Underground collectives', 'International artist routing', 'Collaboration pipelines', 'Creative networks'],
    color: 'white',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80'
  },
  {
    title: 'Global Vision',
    description: 'Our long-term roadmap involves:',
    items: ['Cross-country collaborations', 'Multi-market artist growth', 'International touring routes', 'Global brand partnerships', 'Scalable cultural IPs'],
    color: 'rolling-red',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80'
  },
]

export default function Positioning() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#080808] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=80"
          alt=""
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
        07
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Our Positioning</p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95]"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            <span className="text-rolling-red">INDIA-FIRST.</span> UK-SECOND.<br />
            GLOBAL IN VISION.
          </h2>
        </motion.div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative group"
            >
              {/* Card */}
              <div className="h-full bg-black/50 border border-white/10 hover:border-rolling-red/30 transition-all duration-500 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={position.image}
                    alt={position.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className={`absolute inset-0 ${position.color === 'rolling-red' ? 'bg-rolling-red/20' : 'bg-white/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                
                <div className="p-8">
                  {/* Number */}
                  <span 
                    className={`text-6xl ${position.color === 'rolling-red' ? 'text-rolling-red/20' : 'text-white/10'}`}
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    0{index + 1}
                  </span>
                  
                  {/* Title */}
                  <h3 
                    className={`text-3xl mt-4 mb-4 ${position.color === 'rolling-red' ? 'text-rolling-red' : 'text-white'}`}
                    style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                  >
                    {position.title.toUpperCase()}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {position.description}
                  </p>
                  
                  {/* Items */}
                  <ul className="space-y-2">
                    {position.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                        <span className={position.color === 'rolling-red' ? 'text-rolling-red' : 'text-white'}>→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 w-full h-1 ${position.color === 'rolling-red' ? 'bg-rolling-red' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            We aim to create a <span className="text-rolling-red font-semibold">new standard</span> for artist management 
            and experiential culture from South Asia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
