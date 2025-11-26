'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
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

export default function ClosingMessage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative min-h-screen bg-[#050505] overflow-hidden">
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
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-32 px-6 md:px-12 lg:px-24">
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
          <div className="space-y-8 mb-20">
            <RevealText words={philosophyWords} delay={0.9} />
            <RevealText words={philosophyWords2} delay={1.1} />
            <RevealText words={philosophyWords3} delay={1.3} />
          </div>

          {/* CTAs with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <MagneticButton href="/contact">
              <span className="inline-block px-10 py-5 bg-rolling-red text-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300">
                Get In Touch
              </span>
            </MagneticButton>
            
            <MagneticButton href="/">
              <span className="inline-block px-10 py-5 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:border-rolling-red hover:text-rolling-red transition-all duration-300">
                Back to Home
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="relative z-10 border-t border-white/10 px-6 md:px-12 lg:px-24 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo / Copyright */}
            <div>
              <h3 
                className="text-2xl text-white mb-2"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.1em' }}
              >
                BRIDGELINE<span className="text-rolling-red">.</span>
              </h3>
              <p className="text-white/40 text-sm">
                © 2024 BridgeLine Creative. All rights reserved.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="flex justify-center gap-8">
              <Link href="/" className="text-white/40 text-sm hover:text-rolling-red transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-white/40 text-sm hover:text-rolling-red transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-white/40 text-sm hover:text-rolling-red transition-colors">
                Contact
              </Link>
            </div>
            
            {/* Location */}
            <div className="text-right">
              <p className="text-white/60 text-sm mb-1">Operating from</p>
              <p className="text-rolling-red">
                India <span className="text-white/30 mx-2">•</span> United Kingdom
              </p>
            </div>
          </div>
          
          {/* Bottom bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-rolling-red to-transparent mt-8 origin-center"
          />
          
          {/* Social */}
          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="https://instagram.com/bridgelinecreative" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/40 hover:text-rolling-red transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-sm group-hover:underline">@bridgelinecreative</span>
            </a>
            
            <a 
              href="mailto:info@bridgeline-creative.com"
              className="group flex items-center gap-2 text-white/40 hover:text-rolling-red transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm group-hover:underline">info@bridgeline-creative.com</span>
            </a>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}
