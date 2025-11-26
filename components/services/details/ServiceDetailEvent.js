'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Design 2: Magazine editorial layout - MOBILE OPTIMIZED
export default function ServiceDetailEvent({ service }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIP, setActiveIP] = useState(0)

  const ipTypes = [
    {
      title: 'Underground Series',
      description: 'Recurring event formats that build community around specific sounds, aesthetics, or cultural movements.',
      features: ['Community-focused', 'Curated lineup', 'Consistent branding', 'Local + international'],
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80'
    },
    {
      title: 'Cinematic Experiences',
      description: 'Audiovisual spectacles combining music, art installations, and immersive environments.',
      features: ['Visual installations', 'Spatial design', 'Multi-sensory', 'Limited editions'],
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80'
    },
    {
      title: 'Cross-Continental',
      description: 'Event IPs designed for rollout across India and UK markets with consistent identity.',
      features: ['Multi-market design', 'Cultural adaptation', 'Unified branding', 'Touring framework'],
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80'
    },
    {
      title: 'Artist-Led Properties',
      description: 'Signature events owned by artists, creating platforms for their creative vision.',
      features: ['Artist ownership', 'Creative control', 'Brand extension', 'Revenue stream'],
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80'
    }
  ]

  const creationProcess = [
    { phase: 'CONCEPT', title: 'Narrative Development', desc: 'Defining the story and emotional journey' },
    { phase: 'IDENTITY', title: 'Brand Architecture', desc: 'Visual systems and positioning strategy' },
    { phase: 'DESIGN', title: 'Experience Blueprint', desc: 'Stage design and flow planning' },
    { phase: 'ASSETS', title: 'Creative Production', desc: 'Posters, motion graphics, content' },
    { phase: 'LAUNCH', title: 'Market Activation', desc: 'Rollout and promotional campaign' },
    { phase: 'SCALE', title: 'Growth Planning', desc: 'Multi-city expansion and iteration' },
  ]

  const caseStudyStats = [
    { label: 'IPs Created', value: '12+' },
    { label: 'Cities Reached', value: '8' },
    { label: 'Events Produced', value: '45+' },
    { label: 'Brand Partners', value: '15+' },
  ]

  return (
    <main className="bg-[#0a0a0a] pt-20">
      {/* Hero - Magazine cover style */}
      <section className="relative min-h-screen flex items-end pb-12 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        </div>
        
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-0 text-[25vw] sm:text-[40vw] text-white leading-none pointer-events-none"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          02
        </motion.span>
        
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 w-full">
          <Link href="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-rolling-red transition-colors mb-6 sm:mb-8">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">Back to Services</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 sm:px-4 py-1 bg-rolling-red text-white text-xs tracking-wider uppercase mb-4 sm:mb-6">
              {service.tagline}
            </span>
            <h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
            >
              EVENT & IP<br />
              <span className="text-rolling-red">CREATION</span>
            </h1>
            <p className="text-white/70 text-base sm:text-xl max-w-2xl leading-relaxed">
              {service.shortDesc}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6 sm:gap-12 mt-8 sm:mt-12"
          >
            {service.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="text-2xl sm:text-4xl text-rolling-red" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {stat.value}
                </span>
                <p className="text-white/50 text-xs sm:text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-rolling-red">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {caseStudyStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <span className="text-3xl sm:text-5xl text-white font-bold" style={{ fontFamily: 'var(--font-bebas)' }}>
                {stat.value}
              </span>
              <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content - Editorial columns */}
      <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Two column intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 sm:gap-16 mb-16 sm:mb-24"
          >
            <div>
              <span className="text-6xl sm:text-8xl text-rolling-red/20" style={{ fontFamily: 'Georgia, serif' }}>"</span>
              <p className="text-white text-lg sm:text-2xl leading-relaxed -mt-8 sm:-mt-12 pl-4 sm:pl-8">
                {service.fullContent.intro}
              </p>
            </div>
            <div className="lg:pt-24">
              <h2 className="text-lg sm:text-xl text-rolling-red mb-3 sm:mb-4 tracking-wider uppercase">The Challenge</h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">{service.fullContent.problem}</p>
            </div>
          </motion.div>

          {/* Full width image break */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[35vh] sm:h-[50vh] mb-16 sm:mb-24 overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80"
              alt="Event"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-rolling-red/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-4xl sm:text-6xl md:text-8xl text-white text-center px-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                IDEAS INTO<br /><span className="text-rolling-red">EXPERIENCES</span>
              </h3>
            </div>
          </motion.div>

          {/* Solution & Gap */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-24"
          >
            <div className="lg:col-span-2 p-6 sm:p-12 bg-black border border-white/10">
              <h2 className="text-lg sm:text-xl text-white mb-4 sm:mb-6 tracking-wider uppercase">Our Approach</h2>
              <p className="text-white/70 text-sm sm:text-lg leading-relaxed">{service.fullContent.solution}</p>
            </div>
            <div className="p-6 sm:p-12 bg-rolling-red/10 border border-rolling-red/30">
              <h2 className="text-lg sm:text-xl text-rolling-red mb-4 sm:mb-6 tracking-wider uppercase">The Gap</h2>
              <p className="text-white/60 text-sm leading-relaxed">{service.fullContent.gap}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IP Types Interactive Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              TYPES OF <span className="text-rolling-red">IPs WE CREATE</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
              From intimate underground series to large-scale experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left - Tabs */}
            <div className="flex lg:flex-col gap-2 sm:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {ipTypes.map((ip, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setActiveIP(idx)}
                  className={`flex-shrink-0 lg:w-full p-4 sm:p-6 text-left border transition-all ${
                    activeIP === idx 
                      ? 'bg-rolling-red/10 border-rolling-red' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-xl text-white whitespace-nowrap" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {ip.title}
                    </h3>
                    <span className={`text-xl sm:text-2xl ${activeIP === idx ? 'text-rolling-red' : 'text-white/30'}`}>
                      0{idx + 1}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right - Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIP}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative aspect-video mb-4 sm:mb-6 overflow-hidden">
                  <Image
                    src={ipTypes[activeIP].image}
                    alt={ipTypes[activeIP].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {ipTypes[activeIP].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {ipTypes[activeIP].features.map((feature, idx) => (
                    <span key={idx} className="px-2 sm:px-3 py-1 text-xs text-rolling-red border border-rolling-red/30">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Creation Process */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              IP CREATION <span className="text-rolling-red">PROCESS</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
              From initial concept to market-ready cultural property
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {creationProcess.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 sm:p-8 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group"
              >
                <span className="text-rolling-red text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] block mb-2 sm:mb-4">{step.phase}</span>
                <h3 className="text-sm sm:text-xl text-white mb-2 sm:mb-3 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {step.title}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm hidden sm:block">{step.desc}</p>
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
            DELIVERABLES
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {service.fullContent.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`p-4 sm:p-6 border border-white/10 hover:border-rolling-red/50 transition-all ${idx % 3 === 0 ? 'md:col-span-2' : ''}`}
              >
                <span className="text-rolling-red text-xs">0{idx + 1}</span>
                <p className="text-white text-xs sm:text-sm mt-2">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-white mb-8 sm:mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            EVENT <span className="text-rolling-red">AESTHETICS</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
              'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
              'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80',
              'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80',
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative overflow-hidden group ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src={img}
                  alt="Event aesthetic"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-rolling-red/20 group-hover:opacity-0 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome quote */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center py-12 sm:py-20 border-t border-b border-white/10"
        >
          <p className="text-lg sm:text-2xl md:text-3xl text-white/90 italic leading-relaxed px-4">
            "{service.fullContent.outcome}"
          </p>
        </motion.div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl text-white mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
            RELATED <span className="text-rolling-red">SERVICES</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <Link href="/services/creative-direction" className="p-4 sm:p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-xs sm:text-sm tracking-wider">VISUAL IDENTITY</span>
              <h3 className="text-lg sm:text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                CREATIVE DIRECTION & BRANDING
              </h3>
            </Link>
            <Link href="/services/strategic-partnerships" className="p-4 sm:p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-xs sm:text-sm tracking-wider">BRAND PARTNERSHIPS</span>
              <h3 className="text-lg sm:text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                STRATEGIC PARTNERSHIPS
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            READY TO CREATE YOUR <span className="text-rolling-red">IP?</span>
          </h3>
          <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
            Let's transform your vision into a cultural property that resonates across markets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="mailto:info@bridgeline-creative.com" className="px-6 sm:px-8 py-3 sm:py-4 bg-rolling-red text-white text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all">
              Let's Build Together
            </a>
            <Link href="/services" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white text-sm tracking-wider uppercase hover:border-rolling-red hover:text-rolling-red transition-all">
              Explore More Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
