'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const footerLinks = {
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services/artist-management', label: 'Artist Management' },
    { href: '/services/event-ip-creation', label: 'Event IP Creation' },
    { href: '/services/tour-routing', label: 'Tour Routing' },
    { href: '/services/creative-direction', label: 'Creative Direction' },
    { href: '/services/strategic-partnerships', label: 'Partnerships' },
  ],
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <footer ref={ref} className="relative bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 0, 0, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <h4 
                className="text-2xl text-white"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
              >
                BRIDGE<span className="text-rolling-red">LINE</span>
              </h4>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              India–UK based talent management and culture-building agency shaping the next generation of artists, experiences, and IPs.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/bridgelinecreative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-rolling-red hover:bg-rolling-red/10 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white/50 group-hover:text-rolling-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </a>
              <a
                href="mailto:info@bridgeline-creative.com"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-rolling-red hover:bg-rolling-red/10 transition-all duration-300 group"
                aria-label="Email"
              >
                <svg className="w-4 h-4 text-white/50 group-hover:text-rolling-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h5 className="text-white text-sm tracking-wider uppercase mb-6">Navigation</h5>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-rolling-red transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h5 className="text-white text-sm tracking-wider uppercase mb-6">Services</h5>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-rolling-red transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h5 className="text-white text-sm tracking-wider uppercase mb-6">Get in Touch</h5>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Email</p>
                <a
                  href="mailto:info@bridgeline-creative.com"
                  className="text-white/80 text-sm hover:text-rolling-red transition-colors"
                >
                  info@bridgeline-creative.com
                </a>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Instagram</p>
                <a
                  href="https://instagram.com/bridgelinecreative"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-rolling-red transition-colors"
                >
                  @bridgelinecreative
                </a>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Locations</p>
                <p className="text-rolling-red text-sm">India • United Kingdom</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider with animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 origin-center"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-white/30 text-sm"
          >
            © {new Date().getFullYear()} BridgeLine Creative. All rights reserved.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-6"
          >
            <Link href="/" className="text-white/30 text-sm hover:text-rolling-red transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-white/30 text-sm hover:text-rolling-red transition-colors">
              Terms of Service
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Large decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
      >
        <span 
          className="block text-[15vw] text-white whitespace-nowrap -mb-[5vw]"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          BRIDGELINE CREATIVE
        </span>
      </motion.div>
    </footer>
  )
}

