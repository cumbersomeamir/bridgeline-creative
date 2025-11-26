'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Design 4: Gallery/portfolio inspired layout - MOBILE OPTIMIZED
export default function ServiceDetailCreative({ service }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeService, setActiveService] = useState(0)

  const creativeServices = [
    {
      title: 'Visual Identity Systems',
      icon: '◎',
      items: ['Logo design', 'Color palette', 'Typography', 'Brand marks', 'Guidelines'],
      desc: 'Complete visual DNA that scales from social posts to festival stages'
    },
    {
      title: 'Brand Strategy',
      icon: '◆',
      items: ['Positioning', 'Audience mapping', 'Competitive analysis', 'Brand voice', 'Story architecture'],
      desc: 'Strategic foundation that guides all creative decisions'
    },
    {
      title: 'Content Direction',
      icon: '★',
      items: ['Social grid design', 'Content calendars', 'Photo direction', 'Video treatment', 'Platform strategy'],
      desc: 'Cohesive content framework for consistent brand presence'
    },
    {
      title: 'Campaign Creative',
      icon: '→',
      items: ['Release artwork', 'Tour visuals', 'Event branding', 'Merchandise', 'Promotional materials'],
      desc: 'Campaign-specific creative that drives engagement'
    }
  ]

  const aestheticPrinciples = [
    { principle: 'DARK', desc: 'Black-dominant palettes', visual: 'Deep shadows, night energy' },
    { principle: 'MINIMAL', desc: 'Clean compositions', visual: 'Reduction to essence' },
    { principle: 'CINEMATIC', desc: 'Film-inspired textures', visual: 'Visual storytelling' },
    { principle: 'HIGH-CONTRAST', desc: 'Bold type, clear hierarchies', visual: 'Command attention' }
  ]

  const brandingProcess = [
    { step: '01', title: 'Discovery', desc: 'Deep dive into your sound and story' },
    { step: '02', title: 'Strategy', desc: 'Define positioning and audience' },
    { step: '03', title: 'Exploration', desc: 'Moodboarding and concepts' },
    { step: '04', title: 'Design', desc: 'Visual identity creation' },
    { step: '05', title: 'Refinement', desc: 'Iteration and testing' },
    { step: '06', title: 'Delivery', desc: 'Complete brand kit' },
  ]

  const portfolioImages = [
    { src: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&q=80', aspect: 'square' },
    { src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80', aspect: 'wide' },
    { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80', aspect: 'square' },
    { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80', aspect: 'tall' },
    { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80', aspect: 'square' },
    { src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80', aspect: 'wide' },
  ]

  return (
    <main className="bg-[#0a0a0a] pt-20">
      {/* Hero */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 gap-1 opacity-20">
          {[1,2,3,4,5,6].map((_, idx) => (
            <div key={idx} className="relative overflow-hidden">
              <Image
                src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1598387993441-a364f854c3e1' : '1459749411175-04bf5292ceea'}?w=600&q=80`}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />
        
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-rolling-red transition-colors mb-8 sm:mb-12">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">All Services</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <span className="text-rolling-red text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase">{service.tagline}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-white leading-[0.85] mb-6 sm:mb-8"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
            >
              CREATIVE<br />
              <span className="text-rolling-red">DIRECTION</span><br />
              & BRANDING
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/50 text-base sm:text-xl max-w-xl mx-auto"
            >
              {service.shortDesc}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12"
            >
              {service.keyPoints.slice(0, 4).map((point, idx) => (
                <span 
                  key={idx} 
                  className="px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-white/70 bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  {point}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 sm:bottom-12 hidden sm:block"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/30 text-xs tracking-wider uppercase">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3 sm:gap-6">
          {service.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4 sm:p-8 bg-black border border-white/10 text-center hover:border-rolling-red/50 transition-colors"
            >
              <span className="text-3xl sm:text-5xl text-rolling-red" style={{ fontFamily: 'var(--font-bebas)' }}>
                {stat.value}
              </span>
              <p className="text-white/50 text-xs sm:text-sm mt-1 sm:mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Aesthetic Principles */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              OUR <span className="text-rolling-red">AESTHETIC</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
              Four principles that define our visual approach
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {aestheticPrinciples.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 sm:p-8 bg-[#0a0a0a] border border-white/10 hover:border-rolling-red/50 transition-all group text-center"
              >
                <h3 className="text-xl sm:text-3xl text-rolling-red mb-2 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.principle}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mb-2 sm:mb-4">{item.desc}</p>
                <p className="text-white/40 text-[10px] sm:text-xs italic hidden sm:block">{item.visual}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Services Interactive */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              CREATIVE <span className="text-rolling-red">SERVICES</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
              Comprehensive visual and strategic solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service tabs - horizontal scroll on mobile */}
            <div className="flex lg:flex-col gap-2 sm:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {creativeServices.map((item, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setActiveService(idx)}
                  className={`flex-shrink-0 lg:w-full p-4 sm:p-6 text-left border transition-all ${
                    activeService === idx 
                      ? 'bg-rolling-red/10 border-rolling-red' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className={`text-xl sm:text-2xl ${activeService === idx ? 'text-rolling-red' : 'text-white/30'}`}>
                      {item.icon}
                    </span>
                    <h3 className="text-sm sm:text-lg text-white whitespace-nowrap" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {item.title}
                    </h3>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Service content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 sm:p-8 bg-black border border-white/10"
                >
                  <h3 className="text-xl sm:text-2xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {creativeServices[activeService].title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 sm:mb-6">{creativeServices[activeService].desc}</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {creativeServices[activeService].items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-rolling-red rounded-full flex-shrink-0" />
                        <span className="text-white/70 text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Intro block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-5 gap-8 sm:gap-12 mb-16 sm:mb-24"
          >
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl text-white mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-bebas)' }}>
                THE CONTEXT
              </h2>
              <p className="text-white/70 text-sm sm:text-lg leading-relaxed">{service.fullContent.intro}</p>
            </div>
            <div className="lg:col-span-2 relative h-48 sm:h-64 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&q=80"
                alt="Creative"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-rolling-red/30 mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Problem & Solution */}
          <div className="relative mb-16 sm:mb-24 space-y-4 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl p-6 sm:p-12 bg-black border border-rolling-red/30"
            >
              <h2 className="text-lg sm:text-xl text-rolling-red mb-3 sm:mb-4 tracking-wider uppercase">The Challenge</h2>
              <p className="text-white/60 text-sm leading-relaxed">{service.fullContent.problem}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl p-6 sm:p-12 bg-[#0a0a0a] border border-white/10 ml-auto sm:-mt-12 lg:-mt-24 relative z-10"
            >
              <h2 className="text-lg sm:text-xl text-white mb-3 sm:mb-4 tracking-wider uppercase">Our Method</h2>
              <p className="text-white/60 text-sm leading-relaxed">{service.fullContent.solution}</p>
            </motion.div>
          </div>

          {/* Gap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-10 sm:py-16 mb-16 sm:mb-24"
          >
            <p className="text-white/40 text-sm sm:text-lg max-w-3xl mx-auto italic">
              "{service.fullContent.gap}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              BRANDING <span className="text-rolling-red">PROCESS</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
              From discovery to delivery in six phases
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {brandingProcess.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 sm:p-8 bg-[#0a0a0a] border border-white/10 hover:border-rolling-red/50 transition-all"
              >
                <span className="text-2xl sm:text-4xl text-rolling-red/30" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.step}
                </span>
                <h3 className="text-base sm:text-xl text-white mt-2 sm:mt-4 mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm hidden sm:block">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Portfolio */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-white mb-8 sm:mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            VISUAL <span className="text-rolling-red">DIRECTION</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {portfolioImages.slice(0, 6).map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden group aspect-square"
              >
                <Image
                  src={img.src}
                  alt="Portfolio"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-rolling-red/20 group-hover:opacity-0 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-white mb-8 sm:mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            WHAT WE <span className="text-rolling-red">CREATE</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {service.fullContent.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="aspect-square bg-[#0a0a0a] flex items-center justify-center p-3 sm:p-4 text-center border border-white/5 hover:border-rolling-red/50 hover:bg-rolling-red/5 transition-all group"
              >
                <span className="text-white/70 text-xs sm:text-sm group-hover:text-white transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block p-6 sm:p-12 border border-rolling-red bg-rolling-red/5"
          >
            <h2 className="text-lg sm:text-xl text-rolling-red mb-3 sm:mb-4 tracking-wider uppercase">The Result</h2>
            <p className="text-white/80 text-base sm:text-xl max-w-2xl leading-relaxed">{service.fullContent.outcome}</p>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl text-white mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
            RELATED <span className="text-rolling-red">SERVICES</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <Link href="/services/artist-management" className="p-4 sm:p-6 bg-[#0a0a0a] border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-xs sm:text-sm tracking-wider">CAREER DEVELOPMENT</span>
              <h3 className="text-lg sm:text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                ARTIST MANAGEMENT
              </h3>
            </Link>
            <Link href="/services/event-ip-creation" className="p-4 sm:p-6 bg-[#0a0a0a] border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-xs sm:text-sm tracking-wider">EVENT BRANDING</span>
              <h3 className="text-lg sm:text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                EVENT & IP CREATION
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            READY TO DEFINE YOUR <span className="text-rolling-red">VISUAL IDENTITY?</span>
          </h3>
          <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
            Let's create a visual language that captures your artistic essence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="mailto:info@bridgeline-creative.com" className="px-6 sm:px-8 py-3 sm:py-4 bg-rolling-red text-white text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all">
              Start Creating
            </a>
            <Link href="/services" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white text-sm tracking-wider uppercase hover:border-rolling-red hover:text-rolling-red transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
