'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Artist Management',
    subtitle: 'India + UK',
    description: 'We develop artists with a holistic, career-first vision.',
    features: [
      'Career strategy',
      'Branding & identity',
      'Releases and content planning',
      'Tour development (India, UK, international)',
      'Show bookings & promoter relations',
      'International expansion',
      'Creative direction',
      'Social identity & positioning',
      'Narrative building',
      'Partnerships & collaborations',
    ],
    note: 'Our roster — currently featuring EXCLM and REN — reflects our commitment to emerging talent with international potential.',
  },
  {
    id: 2,
    title: 'Event & IP Creation',
    subtitle: 'Concept to Execution',
    description: 'We develop uniquely branded IPs that resonate with niche audiences.',
    features: [
      'High-concept underground series',
      'Cinematic audiovisual experiences',
      'Cross-continental event formats',
      'Artist-led pop-ups & experiential shows',
      'India-first cultural properties with UK expansions',
    ],
    tags: ['Artist-driven', 'Visually compelling', 'Scalable across markets', 'Brand collaboration ready'],
  },
  {
    id: 3,
    title: 'Creative Direction & Branding',
    subtitle: 'Visual Identity',
    description: 'We shape how artists and events are perceived — visually, strategically, and emotionally.',
    features: [
      'Visual identity',
      'Creative direction',
      'Brand assets',
      'Cinematic photography & design',
      'Moodboards',
      'Storytelling',
      'Aesthetic positioning',
      'Social media creative frameworks',
    ],
    note: 'Our visual style is dark, minimal, cinematic, high contrast — inspired by underground culture and premium international design.',
  },
  {
    id: 4,
    title: 'Strategic Partnerships',
    subtitle: 'International Business Development',
    description: 'We build bridges across continents — helping artists and brands access new audiences.',
    features: [
      'India ⇄ UK tour routing',
      'Artist–promoter partnerships',
      'Brand sponsorships',
      'Cross-border collaborations',
      'International market entry planning',
      'Festival networking',
    ],
  },
  {
    id: 5,
    title: 'Experiential & Cultural Design',
    subtitle: 'Immersive Experiences',
    description: 'We collaborate with festivals, venues, promoters, and brands to design experiences.',
    features: [
      'Tell a story',
      'Build a subculture',
      'Feel premium & cinematic',
      'Speak the language of underground communities',
    ],
    note: 'We combine spatial thinking, creative storytelling, and sound-driven experience design to create immersive cultural moments.',
  },
]

export default function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeService, setActiveService] = useState(1)

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Section number */}
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 0.1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-20 left-6 md:left-12 lg:left-24 text-[200px] font-bold text-white leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        06
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">What We Do</p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95]"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            OUR CORE<br />
            <span className="text-rolling-red">SPECIALISATIONS</span>
          </h2>
        </motion.div>

        {/* Service tabs */}
        <div className="grid lg:grid-cols-[300px,1fr] gap-8">
          {/* Tab navigation */}
          <div className="space-y-2">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left p-4 border transition-all duration-300 ${
                  activeService === service.id
                    ? 'border-rolling-red bg-rolling-red/10'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <span 
                  className={`text-sm ${activeService === service.id ? 'text-rolling-red' : 'text-white/40'}`}
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  0{service.id}
                </span>
                <h3 className={`text-lg font-medium ${activeService === service.id ? 'text-white' : 'text-white/70'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm ${activeService === service.id ? 'text-rolling-red' : 'text-white/40'}`}>
                  {service.subtitle}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Tab content */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === activeService && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 border border-white/10 bg-black/50"
                  >
                    <div className="mb-8">
                      <h3 
                        className="text-4xl text-white mb-2"
                        style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-rolling-red text-sm tracking-wider uppercase">{service.subtitle}</p>
                    </div>
                    
                    <p className="text-white/80 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-rolling-red rounded-full" />
                          <span className="text-white/70 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {service.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 text-xs text-rolling-red border border-rolling-red/30 uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {service.note && (
                      <p className="text-white/50 text-sm italic border-l-2 border-rolling-red/50 pl-4">
                        {service.note}
                      </p>
                    )}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

