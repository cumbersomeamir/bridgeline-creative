'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function ServicesCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Ready to Start?</p>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] mb-8"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            LET'S BUILD <span className="text-rolling-red">SOMETHING</span><br />
            EXTRAORDINARY TOGETHER
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're an artist seeking management, a promoter building an IP, 
            or a brand exploring cultural partnerships — we're ready to collaborate.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:info@bridgeline-creative.com"
              className="px-10 py-5 bg-rolling-red text-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Get In Touch
            </a>
            <a 
              href="/about"
              className="px-10 py-5 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:border-rolling-red hover:text-rolling-red transition-all duration-300"
            >
              Learn About Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

