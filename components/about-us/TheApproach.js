'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const methodologyItems = [
  { id: 1, label: 'CULTURAL INSIGHT', icon: '🎭', angle: 0 },
  { id: 2, label: 'ARTIST ANALYSIS', icon: '🎤', angle: 51.4 },
  { id: 3, label: 'MARKET KNOWLEDGE', icon: '📊', angle: 102.8 },
  { id: 4, label: 'VISUAL DIRECTION', icon: '🎨', angle: 154.2 },
  { id: 5, label: 'NETWORK ACCESS', icon: '🌐', angle: 205.6 },
  { id: 6, label: 'EXPERIENCE DESIGN', icon: '✨', angle: 257 },
  { id: 7, label: 'SCALABLE STRATEGY', icon: '📈', angle: 308.4 },
]

const processSteps = [
  { 
    phase: 'UNDERSTAND',
    items: ['Who the artist is', 'What the culture needs', 'How the market is evolving', 'Where the opportunity lies'],
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80'
  },
  { 
    phase: 'BUILD',
    items: ['Timelines', 'Creative frameworks', 'Routing strategies', 'Brand identity systems', 'Partnership mapping', 'Event scaling pathways'],
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80'
  },
  { 
    phase: 'EXECUTE',
    items: ['Launch campaigns', 'Coordinate tours', 'Manage relationships', 'Scale operations'],
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80'
  },
]

function OrbitingElement({ item, radius, isActive, onClick }) {
  const angle = (item.angle * Math.PI) / 180
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: isActive ? 1.2 : 1,
        x,
        y,
      }}
      whileHover={{ scale: 1.3 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        delay: item.id * 0.1 
      }}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${
        isActive ? 'z-20' : ''
      }`}
    >
      <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
        isActive 
          ? 'bg-rolling-red border-2 border-white shadow-lg shadow-rolling-red/50' 
          : 'bg-black/80 border border-white/20 hover:border-rolling-red/50'
      }`}>
        <span className="text-2xl">{item.icon}</span>
        
        {/* Label */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <span className="text-xs text-rolling-red tracking-wider">{item.label}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  )
}

export default function TheApproach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeOrbit, setActiveOrbit] = useState(1)
  const [activePhase, setActivePhase] = useState(0)

  // Auto-rotate orbital elements
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrbit(prev => prev >= 7 ? 1 : prev + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="relative py-16 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-6"
          >
            The BridgeLine Approach
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl text-white leading-[0.95] mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            <span className="text-rolling-red">PRECISION.</span> AESTHETIC. <span className="text-rolling-red">STRATEGY.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto"
          >
            Our methodology blends multiple disciplines into a unified approach
          </motion.p>
        </div>

        {/* Orbital diagram */}
        <div className="relative mb-32">
          <div className="relative w-full max-w-lg mx-auto aspect-square">
            {/* Orbit rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-[10%] rounded-full border border-white/5" />
              <div className="absolute inset-[20%] rounded-full border border-white/10" />
              <div className="absolute inset-[30%] rounded-full border border-white/10 border-dashed" />
              
              {/* Animated rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-rolling-red/20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-rolling-red rounded-full" />
              </motion.div>
            </motion.div>

            {/* Center hub */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-rolling-red to-red-900 flex items-center justify-center border-4 border-black shadow-2xl shadow-rolling-red/30"
              >
                <div className="text-center">
                  <span 
                    className="text-2xl md:text-3xl text-white block"
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    BRIDGE
                  </span>
                  <span 
                    className="text-xl md:text-2xl text-white/80 block"
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    LINE
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Orbiting elements */}
            {methodologyItems.map((item) => (
              <OrbitingElement
                key={item.id}
                item={item}
                radius={typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 180}
                isActive={activeOrbit === item.id}
                onClick={() => setActiveOrbit(item.id)}
              />
            ))}
          </div>

          {/* Active item details */}
          <AnimatePresence mode="wait">
            {methodologyItems.map((item) => (
              item.id === activeOrbit && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mt-8"
                >
                  <span className="text-rolling-red text-lg">{item.icon}</span>
                  <h3 
                    className="text-2xl text-white mt-2"
                    style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                  >
                    {item.label}
                  </h3>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Process timeline */}
        <div className="relative">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl text-white mb-12"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.1em' }}
          >
            THE THREE-PHASE PROCESS
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onMouseEnter={() => setActivePhase(index)}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activePhase === index ? 'bg-rolling-red/10' : 'bg-black/30 hover:bg-white/5'
                }`}
              >
                {/* Top accent */}
                <div className={`h-1 transition-colors duration-300 ${
                  activePhase === index ? 'bg-rolling-red' : 'bg-white/10'
                }`} />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.phase}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      activePhase === index ? 'grayscale-0 scale-105' : 'grayscale scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${
                    activePhase === index ? 'bg-rolling-red/30' : 'bg-black/60'
                  }`} />
                  
                  {/* Phase number */}
                  <div className="absolute top-4 left-4">
                    <span 
                      className={`text-6xl transition-colors duration-300 ${
                        activePhase === index ? 'text-white/30' : 'text-white/10'
                      }`}
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h4 
                    className={`text-2xl mb-4 transition-colors duration-300 ${
                      activePhase === index ? 'text-rolling-red' : 'text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.1em' }}
                  >
                    {step.phase}
                  </h4>
                  
                  <ul className="space-y-2">
                    {step.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-white/60 text-sm"
                      >
                        <span className={`transition-colors duration-300 ${
                          activePhase === index ? 'text-rolling-red' : 'text-white/30'
                        }`}>→</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-px w-px h-1/2 bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Result callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-6 border border-rolling-red/30 bg-rolling-red/5">
            <div className="w-12 h-12 rounded-full bg-rolling-red flex items-center justify-center">
              <span className="text-white text-2xl">★</span>
            </div>
            <p className="text-xl text-white text-left">
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
