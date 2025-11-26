'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:direction-rtl'}`}
    >
      {/* Image side - Clickable */}
      <Link 
        href={`/services/${service.slug}`}
        className={`relative h-[280px] sm:h-[350px] lg:h-[500px] overflow-hidden cursor-pointer block ${!isEven ? 'lg:order-2' : ''}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className={`absolute inset-0 ${isEven ? 'bg-rolling-red/20' : 'bg-white/10'} group-hover:opacity-0 transition-opacity duration-500`} />
        
        {/* Number overlay */}
        <div className="absolute top-6 left-6">
          <span 
            className="text-8xl text-white/10 group-hover:text-rolling-red/30 transition-colors duration-500"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            0{index + 1}
          </span>
        </div>
        
        {/* Click indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 px-4 py-2 bg-rolling-red/90 backdrop-blur-sm">
            <span className="text-white text-xs tracking-wider uppercase">View Service</span>
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
      
      {/* Content side */}
      <div className={`relative flex flex-col justify-center p-5 sm:p-8 lg:p-12 bg-[#0a0a0a] ${!isEven ? 'lg:order-1' : ''}`}>
        {/* Accent line */}
        <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-1 h-full bg-gradient-to-b from-rolling-red via-rolling-red/50 to-transparent`} />
        
        {/* Icon */}
        <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-rolling-red/10 border border-rolling-red/30 mb-4 sm:mb-6 group-hover:bg-rolling-red group-hover:border-rolling-red transition-all duration-300">
          <span className="text-rolling-red text-lg sm:text-2xl group-hover:text-white transition-colors duration-300">
            {service.icon}
          </span>
        </div>
        
        {/* Title */}
        <h3 
          className="text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-4 group-hover:text-rolling-red transition-colors duration-300"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
        >
          {service.title}
        </h3>
        
        {/* Tagline */}
        <p className="text-rolling-red text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
          {service.tagline}
        </p>
        
        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed mb-4 sm:mb-6">
          {service.shortDesc}
        </p>
        
        {/* Key points - Hide on mobile */}
        <div className="hidden sm:flex flex-wrap gap-2 mb-8">
          {service.keyPoints.slice(0, 4).map((point, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-xs text-white/50 border border-white/10 group-hover:border-rolling-red/30 group-hover:text-white/70 transition-all duration-300"
            >
              {point}
            </span>
          ))}
        </div>
        
        {/* CTA */}
        <Link 
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-3 text-white hover:text-rolling-red transition-colors duration-300"
        >
          <span className="text-sm tracking-wider uppercase">Explore Service</span>
          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

