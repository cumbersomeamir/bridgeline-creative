'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { services } from './servicesData'

export default function ServicesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-20 bg-black">
      {/* Section intro */}
      <div className="px-6 md:px-12 lg:px-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Our Services</p>
          <h2 
            className="text-3xl md:text-4xl text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            COMPREHENSIVE SOLUTIONS FOR{' '}
            <span className="text-rolling-red">ARTISTS, EVENTS & BRANDS</span>
          </h2>
          <p className="text-white/60 leading-relaxed">
            Each service is designed to address specific gaps in the India–UK creative ecosystem, 
            delivering measurable impact and long-term value.
          </p>
        </motion.div>
      </div>

      {/* Services list */}
      <div className="space-y-0">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}

