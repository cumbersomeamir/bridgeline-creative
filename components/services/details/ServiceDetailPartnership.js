'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Design 5: Network/connection focused layout - ENHANCED
export default function ServiceDetailPartnership({ service }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activePartnership, setActivePartnership] = useState(0)

  const partnershipTypes = [
    {
      title: 'Brand Partnerships',
      icon: '⬡',
      desc: 'Connecting artists and events with brands seeking authentic cultural engagement',
      services: ['Brand alignment strategy', 'Sponsorship acquisition', 'Integration planning', 'Activation design', 'ROI measurement'],
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
    },
    {
      title: 'Label Connections',
      icon: '♫',
      desc: 'Facilitating relationships with labels for releases, distribution, and artist development',
      services: ['Label matching', 'Deal structuring', 'Distribution strategy', 'Catalog management', 'Rights negotiation'],
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80'
    },
    {
      title: 'Promoter Networks',
      icon: '★',
      desc: 'Building sustainable relationships with promoters across India and UK markets',
      services: ['Network mapping', 'Introduction facilitation', 'Contract support', 'Relationship management', 'Market expansion'],
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80'
    },
    {
      title: 'Cross-Border Ventures',
      icon: '→',
      desc: 'Creating pathways for India-UK cultural exchange and business development',
      services: ['Market entry planning', 'Cultural bridge building', 'Regulatory guidance', 'Local partnerships', 'Expansion strategy'],
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80'
    }
  ]

  const networkCategories = [
    { category: 'Festivals', count: '25+', markets: 'India, UK, EU' },
    { category: 'Clubs & Venues', count: '100+', markets: 'Pan-India, London, UK' },
    { category: 'Promoters', count: '50+', markets: 'Cross-border network' },
    { category: 'Labels', count: '30+', markets: 'India, UK, Global' },
    { category: 'Brands', count: '40+', markets: 'FMCG, Tech, Lifestyle' },
    { category: 'Media', count: '20+', markets: 'Music press, Platforms' },
  ]

  const partnershipProcess = [
    { step: '01', title: 'Opportunity Mapping', desc: 'Identifying partnership opportunities aligned with your goals and brand' },
    { step: '02', title: 'Partner Research', desc: 'Deep analysis of potential partners, their audiences, and alignment potential' },
    { step: '03', title: 'Pitch Development', desc: 'Creating compelling proposals and presentation materials' },
    { step: '04', title: 'Introduction & Negotiation', desc: 'Facilitating meetings and supporting deal negotiations' },
    { step: '05', title: 'Contract Support', desc: 'Reviewing agreements and ensuring favorable terms' },
    { step: '06', title: 'Relationship Management', desc: 'Ongoing partnership nurturing and expansion' },
  ]

  const successMetrics = [
    { metric: 'Partnership Revenue', growth: '+180%', desc: 'Average revenue growth from brand partnerships' },
    { metric: 'Market Reach', growth: '2x', desc: 'Expansion of audience reach through partnerships' },
    { metric: 'Deal Closure', rate: '85%', desc: 'Success rate in closing introduced partnerships' },
    { metric: 'Long-term Retention', rate: '90%', desc: 'Partners who continue beyond initial deals' },
  ]

  const caseStudies = [
    {
      title: 'India Festival Partnership',
      type: 'Brand × Festival',
      result: '3-year deal',
      desc: 'Connected lifestyle brand with major Indian festival for multi-year activation partnership'
    },
    {
      title: 'UK Label Connection',
      type: 'Artist × Label',
      result: 'Album deal',
      desc: 'Facilitated signing of Indian artist with established UK underground label'
    },
    {
      title: 'Cross-Border Tour',
      type: 'Promoter × Artist',
      result: '8-city tour',
      desc: 'Coordinated UK artist debut India tour with network of local promoters'
    }
  ]

  return (
    <main className="bg-black">
      {/* Hero - Network visualization style */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, #D40000 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        
        <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full">
          <div className="max-w-6xl mx-auto">
            <Link href="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-rolling-red transition-colors mb-12">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">All Services</span>
            </Link>
            
            <div className="grid lg:grid-cols-12 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-8"
              >
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-8xl text-rolling-red/30" style={{ fontFamily: 'var(--font-bebas)' }}>05</span>
                  <span className="text-rolling-red text-sm tracking-[0.3em] uppercase">{service.tagline}</span>
                </div>
                
                <h1 
                  className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-8"
                  style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
                >
                  STRATEGIC<br />
                  <span className="text-rolling-red">PARTNERSHIPS</span><br />
                  & INTERNATIONAL<br />
                  BUSINESS
                </h1>
                
                <p className="text-white/60 text-lg max-w-xl leading-relaxed">
                  {service.shortDesc}
                </p>
              </motion.div>
              
              {/* Connection nodes visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-4 flex items-center justify-center"
              >
                <div className="relative w-64 h-64">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-rolling-red rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">⬡</span>
                  </div>
                  {[0, 72, 144, 216, 288].map((angle, idx) => {
                    const x = 100 * Math.cos((angle * Math.PI) / 180)
                    const y = 100 * Math.sin((angle * Math.PI) / 180)
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        className="absolute w-8 h-8 bg-white/10 border border-white/30 rounded-full"
                        style={{
                          top: `calc(50% + ${y}px - 16px)`,
                          left: `calc(50% + ${x}px - 16px)`
                        }}
                      />
                    )
                  })}
                  <svg className="absolute inset-0 w-full h-full">
                    {[0, 72, 144, 216, 288].map((angle, idx) => {
                      const x = 100 * Math.cos((angle * Math.PI) / 180) + 128
                      const y = 100 * Math.sin((angle * Math.PI) / 180) + 128
                      return (
                        <motion.line
                          key={idx}
                          x1="128" y1="128" x2={x} y2={y}
                          stroke="#D40000"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        />
                      )
                    })}
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 md:px-12 lg:px-24 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
          {service.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <span className="text-5xl text-rolling-red" style={{ fontFamily: 'var(--font-bebas)' }}>
                {stat.value}
              </span>
              <p className="text-white/40 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Categories */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              OUR <span className="text-rolling-red">NETWORK</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Established relationships across the music ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkCategories.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-black border border-white/10 hover:border-rolling-red/50 transition-all text-center"
              >
                <span className="text-4xl text-rolling-red" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.count}
                </span>
                <h3 className="text-xl text-white mt-4 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.category}
                </h3>
                <p className="text-white/40 text-sm">{item.markets}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Interactive */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              PARTNERSHIP <span className="text-rolling-red">TYPES</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Different pathways to growth and collaboration
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tabs */}
            <div className="space-y-4">
              {partnershipTypes.map((type, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setActivePartnership(idx)}
                  className={`w-full p-6 text-left border transition-all ${
                    activePartnership === idx 
                      ? 'bg-rolling-red/10 border-rolling-red' 
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl ${activePartnership === idx ? 'text-rolling-red' : 'text-white/30'}`}>
                      {type.icon}
                    </span>
                    <div>
                      <h3 className="text-lg text-white" style={{ fontFamily: 'var(--font-bebas)' }}>
                        {type.title}
                      </h3>
                      <p className="text-white/40 text-sm">{type.desc.substring(0, 60)}...</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePartnership}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video mb-6 overflow-hidden">
                  <Image
                    src={partnershipTypes[activePartnership].image}
                    alt={partnershipTypes[activePartnership].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <h3 className="text-2xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {partnershipTypes[activePartnership].title}
                </h3>
                <p className="text-white/60 mb-6">
                  {partnershipTypes[activePartnership].desc}
                </p>
                <div className="space-y-2">
                  {partnershipTypes[activePartnership].services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-rolling-red">⬡</span>
                      <span className="text-white/70">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-white text-xl leading-relaxed max-w-3xl mx-auto">
              {service.fullContent.intro}
            </p>
          </motion.div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-0 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-12 bg-rolling-red/10 border border-rolling-red/30"
            >
              <h2 className="text-xl text-rolling-red mb-6 tracking-wider uppercase">The Barrier</h2>
              <p className="text-white/60 leading-relaxed">{service.fullContent.problem}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-12 bg-black border border-white/10"
            >
              <h2 className="text-xl text-white mb-6 tracking-wider uppercase">Our Bridge</h2>
              <p className="text-white/60 leading-relaxed">{service.fullContent.solution}</p>
            </motion.div>
          </div>

          {/* Gap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative py-20 mb-20"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rolling-red via-white to-rolling-red" />
            <p className="text-white/70 text-xl pl-12 leading-relaxed max-w-3xl">
              {service.fullContent.gap}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              PARTNERSHIP <span className="text-rolling-red">PROCESS</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              From opportunity identification to long-term relationship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipProcess.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-[#050505] border border-white/10 hover:border-rolling-red/50 transition-all"
              >
                <span className="text-4xl text-rolling-red/30" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.step}
                </span>
                <h3 className="text-xl text-white mt-4 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-white mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            SUCCESS <span className="text-rolling-red">METRICS</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-black border border-white/10 text-center"
              >
                <span className="text-4xl text-rolling-red" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.growth || item.rate}
                </span>
                <h3 className="text-lg text-white mt-4 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.metric}
                </h3>
                <p className="text-white/40 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-white mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            PARTNERSHIP <span className="text-rolling-red">EXAMPLES</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-[#050505] border border-white/10 hover:border-rolling-red/50 transition-all"
              >
                <span className="text-rolling-red text-xs tracking-wider">{study.type}</span>
                <h3 className="text-xl text-white mt-2 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {study.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-rolling-red/10 text-rolling-red text-xs mb-4">
                  {study.result}
                </span>
                <p className="text-white/50 text-sm">{study.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-white mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            HOW WE <span className="text-rolling-red">CONNECT</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.fullContent.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-rolling-red text-lg">⬡</span>
                  <p className="text-white/70 group-hover:text-white transition-colors">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 border border-rolling-red text-center"
          >
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle, #D40000 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
            <h2 className="text-xl text-rolling-red mb-6 tracking-wider uppercase relative z-10">The Ecosystem</h2>
            <p className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto relative z-10">
              {service.fullContent.outcome}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl text-white mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>
            RELATED <span className="text-rolling-red">SERVICES</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services/tour-routing" className="p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-sm tracking-wider">TOURING</span>
              <h3 className="text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                TOUR ROUTING & PROMOTER COORDINATION
              </h3>
            </Link>
            <Link href="/services/artist-management" className="p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-sm tracking-wider">CAREER DEVELOPMENT</span>
              <h3 className="text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                ARTIST MANAGEMENT & TALENT DEVELOPMENT
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            READY TO <span className="text-rolling-red">BUILD CONNECTIONS?</span>
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Let's explore how strategic partnerships can accelerate your growth across India and UK markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@bridgeline-creative.com" className="px-8 py-4 bg-rolling-red text-white text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all">
              Connect With Us
            </a>
            <Link href="/services" className="px-8 py-4 border border-white/30 text-white text-sm tracking-wider uppercase hover:border-rolling-red hover:text-rolling-red transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
