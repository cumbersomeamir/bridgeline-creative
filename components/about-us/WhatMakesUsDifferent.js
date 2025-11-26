'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const differentiators = [
  {
    id: 1,
    title: 'DUAL-MARKET OPERATIONS',
    subtitle: 'India + UK',
    icon: '🌍',
    description: 'We work on the ground in both regions, giving us unmatched access to international opportunities, promoters, venues, and creative collaborators.',
    stats: [
      { value: '2', label: 'Countries' },
      { value: '50+', label: 'Venues' },
      { value: '100+', label: 'Promoters' },
    ],
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80',
  },
  {
    id: 2,
    title: 'HYBRID AGENCY MODEL',
    subtitle: 'All-In-One',
    icon: '⚡',
    description: 'Management + Creative Direction + IP Development — everything in one place. No fragmentation, no handoffs, no lost vision.',
    stats: [
      { value: '360°', label: 'Coverage' },
      { value: '1', label: 'Team' },
      { value: '∞', label: 'Possibilities' },
    ],
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80',
  },
  {
    id: 3,
    title: 'MULTI-DISCIPLINARY TEAM',
    subtitle: 'Collective Expertise',
    icon: '👥',
    description: 'Artist managers, tour coordinators, creative directors, designers, promoters, brand strategists, and event producers — all under one roof.',
    stats: [
      { value: '7+', label: 'Disciplines' },
      { value: '20+', label: 'Specialists' },
      { value: '1', label: 'Vision' },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    id: 4,
    title: 'IP-CENTRIC APPROACH',
    subtitle: 'Beyond Shows',
    icon: '💎',
    description: 'We develop intellectual properties — not just shows. Our IPs tell stories, build communities, and create lasting value beyond single events.',
    stats: [
      { value: '5+', label: 'Active IPs' },
      { value: '3-5', label: 'Year Vision' },
      { value: '∞', label: 'Scalability' },
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
  },
  {
    id: 5,
    title: 'UNDERGROUND EXPERTISE',
    subtitle: 'Cultural Depth',
    icon: '🎧',
    description: 'We specialize in electronic and experimental communities, where authenticity and identity drive growth. We speak the language.',
    stats: [
      { value: '10+', label: 'Years Deep' },
      { value: '1000+', label: 'Shows' },
      { value: '1', label: 'Culture' },
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
  },
]

function AccordionItem({ item, isOpen, onClick, index }) {
  const contentRef = useRef(null)

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connector line */}
      <div className="absolute left-[27px] top-16 bottom-0 w-px bg-white/10" />
      
      {/* Main accordion */}
      <div className={`relative transition-all duration-500 ${isOpen ? 'bg-[#0a0a0a]' : 'bg-transparent hover:bg-white/5'}`}>
        {/* Header - always visible */}
        <button
          onClick={onClick}
          className="w-full flex items-start gap-6 p-6 text-left group"
        >
          {/* Number circle */}
          <div className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500 ${
            isOpen 
              ? 'bg-rolling-red border-rolling-red' 
              : 'bg-black border-white/20 group-hover:border-rolling-red/50'
          }`}>
            <span 
              className={`text-xl ${isOpen ? 'text-white' : 'text-white/50 group-hover:text-rolling-red'} transition-colors duration-300`}
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              0{item.id}
            </span>
          </div>
          
          {/* Title area */}
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-4 mb-2">
              <h3 
                className={`text-xl md:text-2xl transition-colors duration-300 ${isOpen ? 'text-rolling-red' : 'text-white group-hover:text-rolling-red'}`}
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
              >
                {item.title}
              </h3>
              <span className="text-white/30 text-sm tracking-wider uppercase">
                {item.subtitle}
              </span>
            </div>
            
            {/* Preview text when closed */}
            <AnimatePresence mode="wait">
              {!isOpen && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white/40 text-sm line-clamp-1"
                >
                  {item.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          
          {/* Toggle icon */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-2"
          >
            <div className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
              isOpen ? 'border-rolling-red bg-rolling-red/10' : 'border-white/20 group-hover:border-rolling-red/50'
            }`}>
              <svg className={`w-5 h-5 ${isOpen ? 'text-rolling-red' : 'text-white/50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
              </svg>
            </div>
          </motion.div>
        </button>
        
        {/* Expanded content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={contentRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-8 pl-20">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left - Content */}
                  <div className="space-y-6">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/70 text-lg leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                    
                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-8"
                    >
                      {item.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <motion.span 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + idx * 0.1, type: 'spring' }}
                            className="block text-3xl text-rolling-red mb-1"
                            style={{ fontFamily: 'var(--font-bebas)' }}
                          >
                            {stat.value}
                          </motion.span>
                          <span className="text-white/40 text-xs uppercase tracking-wider">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                  
                  {/* Right - Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative h-64 lg:h-auto overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-rolling-red/20 hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-black/80 backdrop-blur-sm flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Divider */}
      <div className="h-px bg-white/5 ml-20" />
    </motion.div>
  )
}

export default function WhatMakesUsDifferent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openId, setOpenId] = useState(1)

  return (
    <section ref={ref} className="relative py-16 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-[#050505] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&q=80"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      
      {/* Large background text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 0.02, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none"
      >
        <span 
          className="text-[20vw] text-white leading-none"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          EDGE
        </span>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-6"
          >
            What Sets Us Apart
          </motion.p>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95]"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
            >
              OUR <span className="text-rolling-red">COMPETITIVE</span><br />
              ADVANTAGE
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/50 max-w-sm text-sm leading-relaxed"
            >
              In a fast-evolving industry, we've built a unique position that can't be easily replicated.
            </motion.p>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {differentiators.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-rolling-red/5 border border-rolling-red/20 relative overflow-hidden"
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-rolling-red/50" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-rolling-red/50" />
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-rolling-red">
              <span className="text-white text-3xl">★</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 
                className="text-xl text-rolling-red mb-2"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
              >
                HIGH-QUALITY CREATIVE STANDARDS
              </h3>
              <p className="text-white/60">
                Cinematic visuals, minimal design, bold compositions — the BridgeLine aesthetic elevates every project we touch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
