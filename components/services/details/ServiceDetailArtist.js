'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Design 1: Split-screen cinematic layout - MOBILE OPTIMIZED
export default function ServiceDetailArtist({ service }) {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const processRef = useRef(null)
  const faqRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const isContentInView = useInView(contentRef, { once: true, margin: '-100px' })
  const isProcessInView = useInView(processRef, { once: true, margin: '-100px' })
  const isFaqInView = useInView(faqRef, { once: true, margin: '-100px' })
  
  const [openFaq, setOpenFaq] = useState(null)

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We begin with a comprehensive audit of your current positioning, sound identity, market presence, and growth trajectory.',
      duration: '2-3 weeks'
    },
    {
      number: '02',
      title: 'Strategic Blueprint',
      description: 'Based on our findings, we develop a 3-5 year career roadmap including brand positioning, target markets, and release strategy.',
      duration: '3-4 weeks'
    },
    {
      number: '03',
      title: 'Brand Development',
      description: 'We craft your complete visual and narrative identity — logo systems, color palettes, photography direction, and brand guidelines.',
      duration: '4-6 weeks'
    },
    {
      number: '04',
      title: 'Market Activation',
      description: 'Launch phase includes promoter outreach, booking acquisition, press campaigns, and strategic content deployment.',
      duration: 'Ongoing'
    },
    {
      number: '05',
      title: 'Growth & Optimization',
      description: 'Continuous management covering daily operations, opportunities evaluation, and strategic pivots based on market response.',
      duration: 'Ongoing'
    }
  ]

  const faqs = [
    {
      question: 'What does artist management include?',
      answer: 'Our management encompasses career strategy, brand development, release planning, tour routing, promoter relations, content direction, social media strategy, partnership negotiations, and international expansion planning.'
    },
    {
      question: 'How long is the management contract?',
      answer: 'We typically work on 2-3 year initial agreements with renewal options. This allows enough time to implement long-term strategies and see meaningful results.'
    },
    {
      question: 'Do you work with artists outside India and UK?',
      answer: 'While our primary focus is India-UK routing and development, we work with artists globally who want to break into these markets.'
    },
    {
      question: 'What genres do you specialize in?',
      answer: 'We focus on electronic, techno, house, and underground genres. However, we consider artists across experimental, bass music, and alternative electronic sounds.'
    },
    {
      question: 'How do you measure success?',
      answer: 'Success metrics include booking frequency and fee growth, streaming numbers, social engagement, brand partnerships secured, and market expansion.'
    }
  ]

  const managementAreas = [
    { title: 'Career Strategy', icon: '◆', desc: 'Long-term planning and goal setting' },
    { title: 'Brand Identity', icon: '◎', desc: 'Visual and narrative positioning' },
    { title: 'Release Planning', icon: '♫', desc: 'Strategic content deployment' },
    { title: 'Tour Development', icon: '→', desc: 'Routing and booking strategy' },
    { title: 'Promoter Relations', icon: '★', desc: 'Network building and maintenance' },
    { title: 'International Expansion', icon: '⬡', desc: 'Cross-border market entry' },
  ]

  return (
    <main className="bg-black pt-20">
      {/* Hero - Full bleed split screen */}
      <section ref={heroRef} className="relative min-h-screen grid lg:grid-cols-2">
        {/* Left - Image */}
        <div className="relative h-[40vh] sm:h-[50vh] lg:h-screen overflow-hidden">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black lg:bg-gradient-to-r lg:from-transparent lg:to-black" />
          
          {/* Floating stats - Mobile optimized */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-wrap gap-2 sm:gap-4">
            {service.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                className="bg-black/60 backdrop-blur-sm border border-white/10 p-2 sm:p-4"
              >
                <span className="text-xl sm:text-3xl text-rolling-red font-bold" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {stat.value}
                </span>
                <p className="text-white/60 text-[10px] sm:text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Right - Content */}
        <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-16 bg-black">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Link href="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-rolling-red transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">All Services</span>
            </Link>
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 0.1 } : {}}
            transition={{ duration: 0.8 }}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-[80px] sm:text-[150px] text-white leading-none pointer-events-none"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            01
          </motion.span>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-rolling-red text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4"
          >
            {service.tagline}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            {service.title.toUpperCase()}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8"
          >
            {service.fullContent.intro}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {service.keyPoints.slice(0, 4).map((point, idx) => (
              <span key={idx} className="px-3 py-1.5 text-xs sm:text-sm text-rolling-red border border-rolling-red/30">
                {point}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Management Areas Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-white mb-8 sm:mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            WHAT WE <span className="text-rolling-red">MANAGE</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {managementAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-4 sm:p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group"
              >
                <span className="text-2xl sm:text-3xl text-rolling-red mb-2 sm:mb-4 block">{area.icon}</span>
                <h3 className="text-base sm:text-xl text-white mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>{area.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution sections */}
      <section ref={contentRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-20"
          >
            <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
              <span className="text-4xl sm:text-6xl text-rolling-red/20" style={{ fontFamily: 'var(--font-bebas)' }}>!</span>
              <div>
                <h2 className="text-xl sm:text-2xl text-rolling-red mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}>
                  THE PROBLEM
                </h2>
                <p className="text-white/70 text-sm sm:text-lg leading-relaxed">{service.fullContent.problem}</p>
              </div>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 sm:mb-20 p-6 sm:p-12 bg-[#0a0a0a] border-l-4 border-rolling-red"
          >
            <h2 className="text-xl sm:text-2xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}>
              OUR SOLUTION
            </h2>
            <p className="text-white/70 text-sm sm:text-lg leading-relaxed">{service.fullContent.solution}</p>
          </motion.div>

          {/* Gap */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 sm:mb-20"
          >
            <h2 className="text-xl sm:text-2xl text-white/50 mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}>
              THE GAP WE FILL
            </h2>
            <p className="text-white/60 text-sm sm:text-lg leading-relaxed">{service.fullContent.gap}</p>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 sm:mb-20"
          >
            <h2 className="text-xl sm:text-2xl text-rolling-red mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}>
              WHAT YOU GET
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
              {service.fullContent.deliverables.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                  className="p-3 sm:p-4 bg-white/5 border border-white/10 hover:border-rolling-red/50 transition-colors"
                >
                  <span className="text-white/80 text-xs sm:text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              OUR <span className="text-rolling-red">PROCESS</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
              A structured approach to building sustainable artist careers
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col sm:grid sm:grid-cols-12 gap-3 sm:gap-6 items-start sm:items-center"
              >
                <div className="sm:col-span-2 flex sm:justify-center items-center gap-4 sm:gap-0">
                  <span className="text-4xl sm:text-6xl text-rolling-red/30" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {step.number}
                  </span>
                  <span className="sm:hidden text-rolling-red text-xs tracking-wider">{step.duration}</span>
                </div>
                <div className="sm:col-span-8 p-4 sm:p-8 bg-black border border-white/10 hover:border-rolling-red/30 transition-colors w-full">
                  <h3 className="text-lg sm:text-xl text-white mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
                <div className="hidden sm:block sm:col-span-2 text-center">
                  <span className="text-rolling-red text-sm tracking-wider">{step.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl text-white mb-8 sm:mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            ARTIST <span className="text-rolling-red">DEVELOPMENT</span> IN ACTION
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {[
              'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
              'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
              'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80',
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative aspect-[4/3] overflow-hidden group ${idx === 2 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <Image
                  src={img}
                  alt="Artist development"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-rolling-red/20 group-hover:opacity-0 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            className="text-2xl sm:text-3xl text-white mb-8 sm:mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            FREQUENTLY ASKED <span className="text-rolling-red">QUESTIONS</span>
          </motion.h2>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="border border-white/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium text-sm sm:text-base pr-4">{faq.question}</span>
                  <span className="text-rolling-red text-xl sm:text-2xl flex-shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-6 sm:p-12 border border-rolling-red/30"
          >
            <h2 className="text-xl sm:text-2xl text-rolling-red mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}>
              THE OUTCOME
            </h2>
            <p className="text-white/80 text-base sm:text-xl leading-relaxed italic">{service.fullContent.outcome}</p>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#050505]">
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
            <Link href="/services/tour-routing" className="p-4 sm:p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-xs sm:text-sm tracking-wider">TOURING</span>
              <h3 className="text-lg sm:text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                TOUR ROUTING & COORDINATION
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            READY TO <span className="text-rolling-red">BUILD YOUR CAREER?</span>
          </h3>
          <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
            Let's discuss how BridgeLine Creative can help transform your artistic vision into a sustainable, globally competitive career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="mailto:info@bridgeline-creative.com" className="px-6 sm:px-8 py-3 sm:py-4 bg-rolling-red text-white text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all">
              Start a Conversation
            </a>
            <Link href="/services" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white text-sm tracking-wider uppercase hover:border-rolling-red hover:text-rolling-red transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
