'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Design 5: Network/connection focused layout - MOBILE OPTIMIZED
export default function ServiceDetailPartnership({ service }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activePartnership, setActivePartnership] = useState(0)

  const partnershipTypes = [
    {
      title: 'Brand Partnerships',
      icon: '⬡',
      desc: 'Connecting artists and events with brands seeking authentic cultural engagement',
      services: ['Brand alignment', 'Sponsorship', 'Integration', 'Activation', 'ROI tracking'],
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80'
    },
    {
      title: 'Label Connections',
      icon: '♫',
      desc: 'Facilitating relationships with labels for releases and distribution',
      services: ['Label matching', 'Deal structuring', 'Distribution', 'Catalog', 'Rights'],
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80'
    },
    {
      title: 'Promoter Networks',
      icon: '★',
      desc: 'Building sustainable relationships with promoters across markets',
      services: ['Network mapping', 'Introductions', 'Contracts', 'Management', 'Expansion'],
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80'
    },
    {
      title: 'Cross-Border Ventures',
      icon: '→',
      desc: 'Creating pathways for India-UK cultural exchange',
      services: ['Market entry', 'Cultural bridge', 'Regulatory', 'Local partners', 'Strategy'],
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80'
    }
  ]

  const networkCategories = [
    { category: 'Festivals', count: '25+', markets: 'India, UK, EU' },
    { category: 'Clubs', count: '100+', markets: 'Pan-India, UK' },
    { category: 'Promoters', count: '50+', markets: 'Cross-border' },
    { category: 'Labels', count: '30+', markets: 'India, UK, Global' },
    { category: 'Brands', count: '40+', markets: 'FMCG, Tech' },
    { category: 'Media', count: '20+', markets: 'Music press' },
  ]

  const partnershipProcess = [
    { step: '01', title: 'Opportunity Mapping', desc: 'Identifying aligned opportunities' },
    { step: '02', title: 'Partner Research', desc: 'Analyzing potential partners' },
    { step: '03', title: 'Pitch Development', desc: 'Creating compelling proposals' },
    { step: '04', title: 'Introduction', desc: 'Facilitating meetings and deals' },
    { step: '05', title: 'Contract Support', desc: 'Ensuring favorable terms' },
    { step: '06', title: 'Relationship Mgmt', desc: 'Ongoing partnership nurturing' },
  ]

  const successMetrics = [
    { metric: 'Revenue', growth: '+180%' },
    { metric: 'Reach', growth: '2x' },
    { metric: 'Deal Closure', rate: '85%' },
    { metric: 'Retention', rate: '90%' },
  ]

  return (
    <main className="bg-black pt-20">
      {/* Hero */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center py-12 sm:py-0">
        <div className="absolute inset-0">
          <Image src={service.heroImage} alt={service.title} fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle, #D40000 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 w-full">
          <div className="max-w-6xl mx-auto">
            <Link href="/services" className="inline-flex items-center gap-2 text-white/50 hover:text-rolling-red transition-colors mb-8 sm:mb-12">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">All Services</span>
            </Link>
            
            <div className="grid lg:grid-cols-12 gap-8">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-8">
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <span className="text-5xl sm:text-8xl text-rolling-red/30" style={{ fontFamily: 'var(--font-bebas)' }}>05</span>
                  <span className="text-rolling-red text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">{service.tagline}</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}>
                  STRATEGIC<br /><span className="text-rolling-red">PARTNERSHIPS</span><br />& INTERNATIONAL<br />BUSINESS
                </h1>
                
                <p className="text-white/60 text-sm sm:text-lg max-w-xl leading-relaxed">{service.shortDesc}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 sm:gap-8">
          {service.stats.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="text-center">
              <span className="text-3xl sm:text-5xl text-rolling-red" style={{ fontFamily: 'var(--font-bebas)' }}>{stat.value}</span>
              <p className="text-white/40 text-xs sm:text-sm mt-1 sm:mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Categories */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>OUR <span className="text-rolling-red">NETWORK</span></h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">Established relationships across the music ecosystem</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {networkCategories.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="p-4 sm:p-8 bg-black border border-white/10 hover:border-rolling-red/50 transition-all text-center">
                <span className="text-2xl sm:text-4xl text-rolling-red" style={{ fontFamily: 'var(--font-bebas)' }}>{item.count}</span>
                <h3 className="text-base sm:text-xl text-white mt-2 sm:mt-4 mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>{item.category}</h3>
                <p className="text-white/40 text-xs sm:text-sm">{item.markets}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Interactive */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>PARTNERSHIP <span className="text-rolling-red">TYPES</span></h2>
            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">Different pathways to growth and collaboration</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Tabs */}
            <div className="flex lg:flex-col gap-2 sm:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {partnershipTypes.map((type, idx) => (
                <motion.button key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} onClick={() => setActivePartnership(idx)} className={`flex-shrink-0 lg:w-full p-4 sm:p-6 text-left border transition-all ${activePartnership === idx ? 'bg-rolling-red/10 border-rolling-red' : 'border-white/10 hover:border-white/30'}`}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className={`text-xl sm:text-2xl ${activePartnership === idx ? 'text-rolling-red' : 'text-white/30'}`}>{type.icon}</span>
                    <h3 className="text-sm sm:text-lg text-white whitespace-nowrap" style={{ fontFamily: 'var(--font-bebas)' }}>{type.title}</h3>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div key={activePartnership} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <div className="relative aspect-video mb-4 sm:mb-6 overflow-hidden">
                  <Image src={partnershipTypes[activePartnership].image} alt={partnershipTypes[activePartnership].title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <h3 className="text-xl sm:text-2xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>{partnershipTypes[activePartnership].title}</h3>
                <p className="text-white/60 text-sm mb-4 sm:mb-6">{partnershipTypes[activePartnership].desc}</p>
                <div className="flex flex-wrap gap-2">
                  {partnershipTypes[activePartnership].services.map((svc, idx) => (
                    <span key={idx} className="px-2 sm:px-3 py-1 text-xs text-rolling-red border border-rolling-red/30">{svc}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-20">
            <p className="text-white text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">{service.fullContent.intro}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-0 mb-12 sm:mb-20">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="p-6 sm:p-12 bg-rolling-red/10 border border-rolling-red/30">
              <h2 className="text-lg sm:text-xl text-rolling-red mb-4 sm:mb-6 tracking-wider uppercase">The Barrier</h2>
              <p className="text-white/60 text-sm leading-relaxed">{service.fullContent.problem}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="p-6 sm:p-12 bg-black border border-white/10">
              <h2 className="text-lg sm:text-xl text-white mb-4 sm:mb-6 tracking-wider uppercase">Our Bridge</h2>
              <p className="text-white/60 text-sm leading-relaxed">{service.fullContent.solution}</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="relative py-12 sm:py-20 mb-12 sm:mb-20">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rolling-red via-white to-rolling-red" />
            <p className="text-white/70 text-base sm:text-xl pl-6 sm:pl-12 leading-relaxed max-w-3xl">{service.fullContent.gap}</p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>PARTNERSHIP <span className="text-rolling-red">PROCESS</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {partnershipProcess.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="p-4 sm:p-8 bg-[#050505] border border-white/10 hover:border-rolling-red/50 transition-all">
                <span className="text-2xl sm:text-4xl text-rolling-red/30" style={{ fontFamily: 'var(--font-bebas)' }}>{item.step}</span>
                <h3 className="text-base sm:text-xl text-white mt-2 sm:mt-4 mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>{item.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm hidden sm:block">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl text-white mb-8 sm:mb-12 text-center" style={{ fontFamily: 'var(--font-bebas)' }}>SUCCESS <span className="text-rolling-red">METRICS</span></motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {successMetrics.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="p-4 sm:p-8 bg-black border border-white/10 text-center">
                <span className="text-3xl sm:text-4xl text-rolling-red" style={{ fontFamily: 'var(--font-bebas)' }}>{item.growth || item.rate}</span>
                <h3 className="text-sm sm:text-lg text-white mt-2 sm:mt-4" style={{ fontFamily: 'var(--font-bebas)' }}>{item.metric}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl text-white mb-8 sm:mb-12 text-center" style={{ fontFamily: 'var(--font-bebas)' }}>HOW WE <span className="text-rolling-red">CONNECT</span></motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {service.fullContent.deliverables.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: idx * 0.05 }} className="p-4 sm:p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-rolling-red text-base sm:text-lg">⬡</span>
                  <p className="text-white/70 text-xs sm:text-sm group-hover:text-white transition-colors">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative p-6 sm:p-12 border border-rolling-red text-center">
            <h2 className="text-lg sm:text-xl text-rolling-red mb-4 sm:mb-6 tracking-wider uppercase">The Ecosystem</h2>
            <p className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">{service.fullContent.outcome}</p>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl text-white mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-bebas)' }}>RELATED <span className="text-rolling-red">SERVICES</span></h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <Link href="/services/tour-routing" className="p-4 sm:p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-xs sm:text-sm tracking-wider">TOURING</span>
              <h3 className="text-lg sm:text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>TOUR ROUTING</h3>
            </Link>
            <Link href="/services/artist-management" className="p-4 sm:p-6 bg-black border border-white/10 hover:border-rolling-red/50 transition-all group">
              <span className="text-rolling-red text-xs sm:text-sm tracking-wider">CAREER DEVELOPMENT</span>
              <h3 className="text-lg sm:text-xl text-white mt-2 group-hover:text-rolling-red transition-colors" style={{ fontFamily: 'var(--font-bebas)' }}>ARTIST MANAGEMENT</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl text-white mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>READY TO <span className="text-rolling-red">BUILD CONNECTIONS?</span></h3>
          <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">Let's explore how strategic partnerships can accelerate your growth.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="mailto:info@bridgeline-creative.com" className="px-6 sm:px-8 py-3 sm:py-4 bg-rolling-red text-white text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all">Connect With Us</a>
            <Link href="/services" className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white text-sm tracking-wider uppercase hover:border-rolling-red hover:text-rolling-red transition-all">View All Services</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
