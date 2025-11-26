'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Image from 'next/image'

const storyMilestones = [
  {
    year: '2021',
    title: 'THE VISION',
    description: 'BridgeLine Creative was conceived at the intersection of two cultural powerhouses.',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80',
    location: 'Mumbai',
  },
  {
    year: '2022',
    title: 'FIRST ARTISTS',
    description: 'Signed our founding roster of breakthrough electronic artists.',
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80',
    location: 'Delhi',
  },
  {
    year: '2023',
    title: 'UK EXPANSION',
    description: 'Established operations in the United Kingdom, opening doors to Europe.',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&q=80',
    location: 'London',
  },
  {
    year: '2024',
    title: 'GLOBAL REACH',
    description: 'Cross-border collaborations and international touring routes established.',
    image: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=800&q=80',
    location: 'Worldwide',
  },
]

const FloatingWord = ({ children, delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50, rotateX: -90 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay, 
        type: 'spring',
        stiffness: 100,
        damping: 15 
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}

export default function OurStory() {
  const containerRef = useRef(null)
  const horizontalRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 })
  
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative h-[300vh] sm:h-[400vh] bg-black">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden pt-0">
        {/* Background pattern - animated dots grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 0, 0, 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        {/* Section intro */}
        <motion.div
          style={{ opacity }}
          className="absolute top-4 sm:top-24 left-4 sm:left-6 md:left-12 lg:left-24 z-20"
        >
          <p className="text-rolling-red text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2">Our Journey</p>
          <h2 
            className="text-2xl sm:text-3xl md:text-5xl text-white"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            <FloatingWord delay={0}>FROM</FloatingWord>{' '}
            <FloatingWord delay={0.1}><span className="text-rolling-red">INDIA</span></FloatingWord>{' '}
            <FloatingWord delay={0.2}>TO</FloatingWord>{' '}
            <FloatingWord delay={0.3}>THE</FloatingWord>{' '}
            <FloatingWord delay={0.4}><span className="text-rolling-red">WORLD</span></FloatingWord>
          </h2>
        </motion.div>

        {/* Progress line */}
        <motion.div 
          className="absolute top-1/2 left-0 right-0 h-px bg-white/10 z-10"
          style={{ opacity }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-rolling-red to-white"
            style={{ width: lineWidth }}
          />
        </motion.div>

        {/* Horizontal scroll container */}
        <motion.div 
          ref={horizontalRef}
          style={{ x: smoothX }}
          className="absolute top-0 h-full flex items-start sm:items-center pt-16 sm:pt-32"
        >
          <div className="flex gap-4 md:gap-8 pl-6 md:pl-12 lg:pl-24 pr-[50vw]">
            {storyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] group"
              >
                {/* Card */}
                <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden border border-white/10 group-hover:border-rolling-red/50 transition-colors duration-500">
                  {/* Image with parallax */}
                  <motion.div 
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-rolling-red/20 group-hover:bg-rolling-red/10 transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Year - massive background */}
                  <motion.span 
                    className="absolute -right-4 top-4 text-[8rem] sm:text-[12rem] md:text-[15rem] text-white/5 group-hover:text-rolling-red/10 transition-colors duration-500 font-bold leading-none select-none"
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    {milestone.year}
                  </motion.span>
                  
                  {/* Timeline dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div 
                      className="w-4 h-4 bg-rolling-red rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(212, 0, 0, 0.4)',
                          '0 0 0 20px rgba(212, 0, 0, 0)',
                          '0 0 0 0 rgba(212, 0, 0, 0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="text-rolling-red text-xs sm:text-sm tracking-wider uppercase mb-2 block">
                        {milestone.location}
                      </span>
                      <h3 
                        className="text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3"
                        style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Index number */}
                  <div className="absolute top-8 left-8">
                    <span className="text-white/20 text-sm tracking-widest font-mono">
                      {String(index + 1).padStart(2, '0')} / {String(storyMilestones.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-6 h-6 text-rolling-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
