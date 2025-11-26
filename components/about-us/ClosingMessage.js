'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const philosophyWords = [
  { word: 'CREATIVITY', color: 'text-rolling-red' },
  { word: 'meets', color: 'text-white/50', size: 'text-2xl md:text-4xl' },
  { word: 'STRATEGY', color: 'text-white' },
]

const philosophyWords2 = [
  { word: 'CULTURE', color: 'text-white' },
  { word: 'meets', color: 'text-white/50', size: 'text-2xl md:text-4xl' },
  { word: 'SCALE', color: 'text-rolling-red' },
]

const philosophyWords3 = [
  { word: 'INDIA', color: 'text-rolling-red' },
  { word: 'meets', color: 'text-white/50', size: 'text-2xl md:text-4xl' },
  { word: 'THE WORLD', color: 'text-white' },
]

function RevealText({ words, delay = 0 }) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
      {words.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: delay + index * 0.15,
            type: 'spring',
            stiffness: 100
          }}
          className={`${item.color} ${item.size || 'text-4xl md:text-6xl'}`}
          style={{ fontFamily: item.size ? '' : 'var(--font-bebas)', letterSpacing: item.size ? '' : '0.02em' }}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  )
}

function MagneticButton({ children, href }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.a
      ref={ref}
      href={href}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
    >
      {children}
    </motion.a>
  )
}

import { useState } from 'react'

export default function ClosingMessage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Parallax background images */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
      </motion.div>

      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              ease: 'linear',
              delay: i * 1.5
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-rolling-red/30 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: '50%' }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-12"
          >
            <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-6">
              This Is Just The Beginning
            </p>
            <h2 
              className="text-5xl md:text-7xl lg:text-8xl text-white"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
            >
              WELCOME TO<br />
              <span className="text-rolling-red">BRIDGELINE</span> CREATIVE
            </h2>
          </motion.div>

          {/* Message with staggered reveal */}
          <div className="space-y-6 mb-16">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed"
            >
              BridgeLine Creative is built on{' '}
              <motion.span
                initial={{ color: 'rgba(255,255,255,0.7)' }}
                whileInView={{ color: '#D40000' }}
                transition={{ delay: 0.8 }}
                className="font-semibold"
              >
                ambition
              </motion.span>,{' '}
              <motion.span
                initial={{ color: 'rgba(255,255,255,0.7)' }}
                whileInView={{ color: '#D40000' }}
                transition={{ delay: 1 }}
                className="font-semibold"
              >
                integrity
              </motion.span>,{' '}
              <motion.span
                initial={{ color: 'rgba(255,255,255,0.7)' }}
                whileInView={{ color: '#D40000' }}
                transition={{ delay: 1.2 }}
                className="font-semibold"
              >
                creativity
              </motion.span>, and{' '}
              <motion.span
                initial={{ color: 'rgba(255,255,255,0.7)' }}
                whileInView={{ color: '#D40000' }}
                transition={{ delay: 1.4 }}
                className="font-semibold"
              >
                cultural purpose
              </motion.span>.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed"
            >
              We are here to support artists who dream big, collaborate deeply, and push boundaries fearlessly.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white/50 text-lg leading-relaxed"
            >
              If you are a promoter, artist, brand, or creative collaborator who sees value in long-term vision 
              and premium creative storytelling — you are already part of our world.
            </motion.p>
          </div>

          {/* Philosophy taglines with reveal animation */}
          <div className="space-y-8 mb-16">
            <RevealText words={philosophyWords} delay={0.9} />
            <RevealText words={philosophyWords2} delay={1.1} />
            <RevealText words={philosophyWords3} delay={1.3} />
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-rolling-red text-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Get In Touch
            </Link>
            
            <Link
              href="/"
              className="inline-block px-10 py-5 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:border-rolling-red hover:text-rolling-red transition-all duration-300"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
