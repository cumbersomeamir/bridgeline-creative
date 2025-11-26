'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const inquiryTypes = [
  'Artist looking for representation',
  'Promoter planning your next event',
  'Brand wanting to collaborate on culture projects',
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="contact" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
          alt="Concert"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '100%' } : {}}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-rolling-red to-transparent"
        />
        <motion.div
          initial={{ x: '100%' }}
          animate={isInView ? { x: '-100%' } : {}}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 1.5 }}
          className="absolute top-3/4 right-0 w-1/2 h-px bg-gradient-to-r from-transparent via-rolling-red to-transparent"
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
        11
      </motion.span>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Top image row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 mb-16"
        >
          <div className="relative w-24 h-24 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&q=80"
              alt=""
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="relative w-24 h-24 overflow-hidden rotate-3">
            <Image
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&q=80"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-rolling-red/30" />
          </div>
          <div className="relative w-24 h-24 overflow-hidden -rotate-3">
            <Image
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=200&q=80"
              alt=""
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Let's Connect</p>
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            <span className="text-rolling-red">WORK</span> WITH US
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-center"
        >
          Whether you're an artist looking for representation, a promoter planning your next event, 
          or a brand wanting to collaborate on high-impact culture projects, BridgeLine Creative 
          is your partner for long-term creative and strategic success.
        </motion.p>

        {/* Inquiry types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {inquiryTypes.map((type, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 text-sm text-white/60 border border-white/20 hover:border-rolling-red/50 hover:text-rolling-red transition-all duration-300 bg-black/30 backdrop-blur-sm"
            >
              {type}
            </span>
          ))}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8 text-center"
        >
          {/* Email */}
          <div>
            <p className="text-white/40 text-sm uppercase tracking-wider mb-3">
              For bookings, collaborations & partnerships
            </p>
            <a 
              href="mailto:info@bridgeline-creative.com"
              className="group inline-block"
            >
              <span 
                className="text-3xl md:text-4xl lg:text-5xl text-white group-hover:text-rolling-red transition-colors duration-300"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
              >
                INFO@BRIDGELINE-CREATIVE.COM
              </span>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-white/20" />
            <span className="text-white/40">or</span>
            <div className="w-16 h-px bg-white/20" />
          </div>

          {/* Social */}
          <div>
            <p className="text-white/40 text-sm uppercase tracking-wider mb-3">
              Follow us
            </p>
            <a 
              href="https://instagram.com/bridgelinecreative"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3"
            >
              {/* Instagram icon */}
              <svg 
                className="w-6 h-6 text-white/60 group-hover:text-rolling-red transition-colors duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span 
                className="text-2xl md:text-3xl text-white group-hover:text-rolling-red transition-colors duration-300"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
              >
                @BRIDGELINECREATIVE
              </span>
            </a>
          </div>
        </motion.div>

        {/* Bottom CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-16"
        >
          <a 
            href="mailto:info@bridgeline-creative.com"
            className="px-10 py-5 bg-rolling-red text-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Get In Touch
          </a>
          <a 
            href="#roster"
            className="px-10 py-5 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:border-rolling-red hover:text-rolling-red transition-all duration-300"
          >
            View Our Roster
          </a>
        </motion.div>
      </div>
    </section>
  )
}
