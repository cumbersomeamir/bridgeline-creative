'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function ClosingMessage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Large quote mark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 text-[250px] text-rolling-red leading-none pointer-events-none select-none"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        "
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">This Is Just The Beginning</p>
          <h2 
            className="text-4xl md:text-5xl text-white leading-[0.95]"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            WELCOME TO <span className="text-rolling-red">BRIDGELINE CREATIVE</span>
          </h2>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 mb-16"
        >
          <p className="text-white/80 text-lg leading-relaxed">
            BridgeLine Creative is built on <span className="text-rolling-red">ambition</span>,{' '}
            <span className="text-rolling-red">integrity</span>,{' '}
            <span className="text-rolling-red">creativity</span>, and{' '}
            <span className="text-rolling-red">cultural purpose</span>.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            We are here to support artists who dream big, collaborate deeply, and push boundaries fearlessly.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            If you are a promoter, artist, brand, or collaborator who sees value in long-term vision 
            and premium creative storytelling — you are already part of our world.
          </p>
        </motion.div>

        {/* Philosophy taglines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3 mb-16"
        >
          <p className="text-xl text-white/70 italic">Where creativity meets strategy.</p>
          <p className="text-xl text-white/70 italic">Where culture meets scale.</p>
          <p className="text-xl text-rolling-red italic font-semibold">And where India meets the world.</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a 
            href="mailto:info@bridgeline-creative.com"
            className="px-10 py-5 bg-rolling-red text-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Get In Touch
          </a>
          <a 
            href="/"
            className="px-10 py-5 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:border-rolling-red hover:text-rolling-red transition-all duration-300"
          >
            Back to Home
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-white/40 text-sm">
          © 2024 BridgeLine Creative. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="/" className="text-white/40 text-sm hover:text-rolling-red transition-colors">Home</a>
          <a href="/#roster" className="text-white/40 text-sm hover:text-rolling-red transition-colors">Roster</a>
          <a href="/#contact" className="text-white/40 text-sm hover:text-rolling-red transition-colors">Contact</a>
        </div>
        <p className="text-white/40 text-sm">
          India — UK
        </p>
      </motion.div>
    </section>
  )
}

