'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Design 3: Timeline/route inspired layout - ENHANCED
export default function ServiceDetailTour({ service }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeMarket, setActiveMarket] = useState('india')

  const indiaMarkets = [
    { city: 'Mumbai', venues: '50+', genre: 'All electronic', peak: 'Oct-Mar' },
    { city: 'Delhi NCR', venues: '35+', genre: 'Techno, House', peak: 'Oct-Feb' },
    { city: 'Bangalore', venues: '40+', genre: 'Underground, Tech', peak: 'Year-round' },
    { city: 'Goa', venues: '25+', genre: 'Psytrance, Techno', peak: 'Nov-Mar' },
    { city: 'Pune', venues: '20+', genre: 'House, Techno', peak: 'Oct-Apr' },
    { city: 'Hyderabad', venues: '15+', genre: 'House, Commercial', peak: 'Oct-Mar' },
  ]

  const ukMarkets = [
    { city: 'London', venues: '200+', genre: 'All electronic', peak: 'Year-round' },
    { city: 'Manchester', venues: '60+', genre: 'Techno, House', peak: 'Sep-May' },
    { city: 'Bristol', venues: '40+', genre: 'Bass, DnB, Techno', peak: 'Year-round' },
    { city: 'Leeds', venues: '30+', genre: 'Techno, House', peak: 'Sep-May' },
    { city: 'Glasgow', venues: '35+', genre: 'Techno, Warehouse', peak: 'Year-round' },
    { city: 'Birmingham', venues: '25+', genre: 'House, Tech House', peak: 'Sep-May' },
  ]

  const routingServices = [
    {
      icon: '📊',
      title: 'Market Intelligence',
      desc: 'Data-driven analysis of venue performance, audience demographics, and optimal timing for each city.',
    },
    {
      icon: '🤝',
      title: 'Promoter Matching',
      desc: 'Strategic alignment with promoters whose audiences and brand values match your artistic identity.',
    },
    {
      icon: '📅',
      title: 'Seasonal Planning',
      desc: 'Timing tours around peak seasons, festivals, and market demand cycles for maximum impact.',
    },
    {
      icon: '💰',
      title: 'Fee Optimization',
      desc: 'Negotiation strategies and market-appropriate pricing to maximize tour revenue.',
    },
    {
      icon: '🛫',
      title: 'Logistics Coordination',
      desc: 'Travel planning, accommodation, technical riders, and ground coordination for seamless execution.',
    },
    {
      icon: '📈',
      title: 'Performance Tracking',
      desc: 'Post-tour analytics on attendance, engagement, and market growth for future planning.',
    },
  ]

  const tourTypes = [
    {
      title: 'India Circuit Tour',
      duration: '2-4 weeks',
      cities: '4-8 cities',
      desc: 'Comprehensive routing across major Indian metros, optimized for efficiency and market impact.',
    },
    {
      title: 'UK/EU Showcase',
      duration: '1-3 weeks',
      cities: '3-6 cities',
      desc: 'Strategic exposure to UK/European markets, building relationships with key promoters.',
    },
    {
      title: 'Cross-Border Package',
      duration: '3-6 weeks',
      cities: 'India + UK',
      desc: 'Combined India-UK routing maximizing international positioning and promoter relationships.',
    },
    {
      title: 'Festival Season',
      duration: 'Seasonal',
      cities: 'Multi-country',
      desc: 'Festival-focused routing during peak seasons across India, UK, and European circuits.',
    },
  ]

  return (
    <main className="bg-black">
      {/* Hero - Map/route inspired */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,30 50,50 T100,50"
              fill="none"
              stroke="#D40000"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
        
        <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full">
          <div className="max-w-6xl mx-auto">
            <Link href="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-rolling-red transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back to Services</span>
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl text-rolling-red" style={{ fontFamily: 'var(--font-bebas)' }}>03</span>
                  <div className="h-px flex-1 bg-rolling-red/50" />
                </div>
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-6"
                  style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
                >
                  TOUR ROUTING &<br />
                  <span className="text-rolling-red">PROMOTER</span><br />
                  COORDINATION
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {service.shortDesc}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-rolling-red rounded-full" />
                    <span className="text-white text-sm">India</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-rolling-red to-white" />
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full" />
                    <span className="text-white text-sm">UK</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-8 px-6 md:px-12 lg:px-24 bg-rolling-red">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8">
          {service.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="text-4xl text-white font-bold" style={{ fontFamily: 'var(--font-bebas)' }}>
                {stat.value}
              </span>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Routing Services Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              ROUTING <span className="text-rolling-red">SERVICES</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Comprehensive tour planning from market analysis to execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routingServices.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl text-white mb-3 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content - Timeline style */}
      <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative grid md:grid-cols-2 gap-8 mb-20"
            >
              <div className="md:text-right md:pr-12">
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-rolling-red rounded-full -translate-x-1/2" />
                <span className="text-rolling-red text-sm tracking-wider uppercase">Challenge</span>
                <h2 className="text-2xl text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                  THE PROBLEM
                </h2>
                <p className="text-white/60 leading-relaxed">{service.fullContent.problem}</p>
              </div>
              <div />
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative grid md:grid-cols-2 gap-8 mb-20"
            >
              <div />
              <div className="md:pl-12">
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2" />
                <span className="text-white/50 text-sm tracking-wider uppercase">Approach</span>
                <h2 className="text-2xl text-white mt-2 mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                  OUR SOLUTION
                </h2>
                <p className="text-white/60 leading-relaxed">{service.fullContent.solution}</p>
              </div>
            </motion.div>

            {/* Gap */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative grid md:grid-cols-2 gap-8 mb-20"
            >
              <div className="md:text-right md:pr-12">
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-rolling-red/50 rounded-full -translate-x-1/2" />
                <span className="text-rolling-red/70 text-sm tracking-wider uppercase">Insight</span>
                <h2 className="text-2xl text-white/70 mt-2 mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                  THE GAP
                </h2>
                <p className="text-white/50 leading-relaxed">{service.fullContent.gap}</p>
              </div>
              <div />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Explorer */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
              MARKET <span className="text-rolling-red">EXPLORER</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-8">
              Key touring markets across India and UK
            </p>
            
            {/* Market toggle */}
            <div className="inline-flex gap-0 border border-white/20">
              <button
                onClick={() => setActiveMarket('india')}
                className={`px-8 py-3 text-sm tracking-wider transition-all ${
                  activeMarket === 'india' 
                    ? 'bg-rolling-red text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                INDIA
              </button>
              <button
                onClick={() => setActiveMarket('uk')}
                className={`px-8 py-3 text-sm tracking-wider transition-all ${
                  activeMarket === 'uk' 
                    ? 'bg-rolling-red text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                UK
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMarket}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {(activeMarket === 'india' ? indiaMarkets : ukMarkets).map((market, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all"
                >
                  <h3 className="text-2xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {market.city}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Venues</span>
                      <span className="text-white">{market.venues}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Genre Focus</span>
                      <span className="text-rolling-red">{market.genre}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Peak Season</span>
                      <span className="text-white">{market.peak}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Tour Types */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl text-white mb-12 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            TOUR <span className="text-rolling-red">PACKAGES</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {tourTypes.map((tour, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-[#050505] border border-white/10 hover:border-rolling-red/50 transition-all"
              >
                <h3 className="text-2xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {tour.title}
                </h3>
                <div className="flex gap-6 mb-4 text-sm">
                  <div>
                    <span className="text-white/50 block">Duration</span>
                    <span className="text-rolling-red">{tour.duration}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block">Coverage</span>
                    <span className="text-rolling-red">{tour.cities}</span>
                  </div>
                </div>
                <p className="text-white/60">{tour.desc}</p>
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
            className="text-3xl text-white mb-8 text-center"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            WHAT WE <span className="text-rolling-red">DELIVER</span>
          </motion.h2>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 scrollbar-hide">
            {service.fullContent.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex-shrink-0 w-64 p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-colors"
              >
                <span className="text-rolling-red text-3xl" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-white mt-4">{item}</p>
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
            className="p-12 bg-gradient-to-r from-rolling-red/20 to-transparent border-l-4 border-rolling-red"
          >
            <h2 className="text-xl text-rolling-red mb-4 tracking-wider uppercase">The Destination</h2>
            <p className="text-white/80 text-xl leading-relaxed">{service.fullContent.outcome}</p>
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
            <Link href="/services/artist-management" className="p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-sm tracking-wider">CAREER DEVELOPMENT</span>
              <h3 className="text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                ARTIST MANAGEMENT & TALENT DEVELOPMENT
              </h3>
            </Link>
            <Link href="/services/strategic-partnerships" className="p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-sm tracking-wider">NETWORK ACCESS</span>
              <h3 className="text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>
                STRATEGIC PARTNERSHIPS & BUSINESS DEVELOPMENT
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl text-white mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
            READY TO <span className="text-rolling-red">HIT THE ROAD?</span>
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Let's build a touring strategy that expands your markets, grows your audience, and maximizes your live presence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@bridgeline-creative.com" className="px-8 py-4 bg-rolling-red text-white text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all">
              Plan Your Tour
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
