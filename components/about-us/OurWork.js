'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import Image from 'next/image'

const workAreas = [
  {
    id: 1,
    title: 'TALENT MANAGEMENT',
    tagline: 'Artist-First. Career-Focused.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80',
    description: 'We develop artists with a holistic 360° approach that transforms emerging talent into global-ready acts.',
    features: ['Artist branding', 'Creative strategy', 'Release planning', 'Tour development', 'India × UK routing', 'Promoter relations'],
    color: '#D40000',
  },
  {
    id: 2,
    title: 'CREATIVE CONSULTING',
    tagline: 'Visual Identity. Narrative Power.',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=1200&q=80',
    description: 'We craft the visual and narrative identity behind artists, events, and brands that demand attention.',
    features: ['Brand identity', 'Visual systems', 'Moodboards', 'Story-driven content', 'Cinematic direction', 'Aesthetic positioning'],
    color: '#FF3333',
  },
  {
    id: 3,
    title: 'EVENT IP DEVELOPMENT',
    tagline: 'Experiences That Last.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80',
    description: 'We conceptualize, design, and launch full-scale IPs that become cultural landmarks.',
    features: ['Underground series', 'Experiential concerts', 'Audiovisual properties', 'Cross-border collabs', 'Artist-branded shows', 'Festival modules'],
    color: '#D40000',
  },
  {
    id: 4,
    title: 'INTERNATIONAL STRATEGY',
    tagline: 'Bridges, Not Borders.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
    description: 'We help artists and partners navigate global markets with precision and cultural intelligence.',
    features: ['UK/Europe entry', 'India-wide touring', 'Cross-border partnerships', 'Brand collaborations', 'Cultural networking', 'International positioning'],
    color: '#FF3333',
  },
]

function Counter({ value, suffix = '' }) {
  const nodeRef = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)
  const isInView = useInView(nodeRef, { once: true })

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(0, parseInt(value), {
        duration: 2,
        onUpdate: (v) => setDisplayValue(Math.round(v))
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={nodeRef}>{displayValue}{suffix}</span>
  )
}

import React from 'react'

export default function OurWork() {
  const containerRef = useRef(null)
  const sliderRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  
  const dragX = useMotionValue(0)
  const dragProgress = useTransform(dragX, [-200, 0, 200], [1, 0, -1])

  const handleDragEnd = (event, info) => {
    const threshold = 100
    if (info.offset.x < -threshold && currentIndex < workAreas.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
    setIsDragging(false)
  }

  const goTo = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {workAreas.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentIndex === index ? 0.4 : 0,
              scale: currentIndex === index ? 1 : 1.1 
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={work.image}
              alt=""
              fill
              className="object-cover grayscale"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Section header */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 pt-16 sm:pt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-6"
        >
          How We Create Impact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95] max-w-4xl"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
        >
          FOUR PILLARS OF <span className="text-rolling-red">CULTURAL</span> EXCELLENCE
        </motion.h2>
      </div>

      {/* Main slider area */}
      <div className="relative z-10 h-[60vh] flex items-center mt-16">
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          style={{ x: dragX }}
          className="w-full px-4 sm:px-6 md:px-12 lg:px-24 cursor-grab active:cursor-grabbing"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="relative">
              {workAreas.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    x: currentIndex === index ? 0 : 50,
                    position: currentIndex === index ? 'relative' : 'absolute',
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${currentIndex !== index ? 'pointer-events-none' : ''}`}
                >
                  {/* Number */}
                  <span 
                    className="text-[10rem] md:text-[15rem] text-white/5 absolute -left-4 -top-20 select-none"
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    0{work.id}
                  </span>
                  
                  {/* Title */}
                  <h3 
                    className="text-4xl md:text-5xl text-white mb-4 relative z-10"
                    style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
                  >
                    {work.title}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-rolling-red text-lg mb-6">{work.tagline}</p>
                  
                  {/* Description */}
                  <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
                    {work.description}
                  </p>
                  
                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {work.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-rolling-red rounded-full" />
                        <span className="text-white/60 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Right - Visual */}
            <div className="relative h-[400px] hidden lg:block">
              {workAreas.map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    scale: currentIndex === index ? 1 : 0.9,
                    rotateY: currentIndex === index ? 0 : 45,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 perspective-1000"
                >
                  <div className="relative h-full border border-white/10 overflow-hidden">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${work.color}40, transparent)` }}
                    />
                    
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute bottom-8 right-8 px-6 py-4 bg-black/80 backdrop-blur-sm border border-white/20"
                    >
                      <span 
                        className="text-2xl text-white"
                        style={{ fontFamily: 'var(--font-bebas)' }}
                      >
                        0{work.id} / 04
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 pb-10 sm:pb-20">
        <div className="flex items-center justify-between">
          {/* Dots */}
          <div className="flex gap-3">
            {workAreas.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="relative group"
              >
                <div className={`w-12 h-1 transition-all duration-300 ${
                  currentIndex === index ? 'bg-rolling-red' : 'bg-white/20 group-hover:bg-white/40'
                }`} />
                {currentIndex === index && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 bg-rolling-red"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => currentIndex > 0 && goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                currentIndex === 0 
                  ? 'border-white/10 text-white/20 cursor-not-allowed' 
                  : 'border-white/30 text-white hover:border-rolling-red hover:text-rolling-red'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => currentIndex < workAreas.length - 1 && goTo(currentIndex + 1)}
              disabled={currentIndex === workAreas.length - 1}
              className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                currentIndex === workAreas.length - 1 
                  ? 'border-white/10 text-white/20 cursor-not-allowed' 
                  : 'border-white/30 text-white hover:border-rolling-red hover:text-rolling-red'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isDragging ? 0 : 0.4 }}
          className="text-center text-white text-sm mt-8"
        >
          ← Drag or use arrows to explore →
        </motion.p>
      </div>
    </section>
  )
}
