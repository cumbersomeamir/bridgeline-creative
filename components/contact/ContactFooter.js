'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ContactFooter() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-[#050505] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 
              className="text-2xl text-white mb-4"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              BRIDGELINE <span className="text-rolling-red">CREATIVE</span>
            </h4>
            <p className="text-white/40 text-sm leading-relaxed">
              India–UK based talent management and culture-building agency shaping the next generation of artists, experiences, and IPs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white text-sm tracking-wider uppercase mb-4">Quick Links</h5>
            <div className="space-y-2">
              <Link href="/" className="block text-white/40 text-sm hover:text-rolling-red transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-white/40 text-sm hover:text-rolling-red transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block text-white/40 text-sm hover:text-rolling-red transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-sm tracking-wider uppercase mb-4">Contact</h5>
            <div className="space-y-2">
              <a 
                href="mailto:info@bridgeline-creative.com"
                className="block text-white/40 text-sm hover:text-rolling-red transition-colors"
              >
                info@bridgeline-creative.com
              </a>
              <a 
                href="https://instagram.com/bridgelinecreative"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/40 text-sm hover:text-rolling-red transition-colors"
              >
                @bridgelinecreative
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} BridgeLine Creative. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/30 text-sm hover:text-rolling-red transition-colors">
              Privacy
            </Link>
            <Link href="/" className="text-white/30 text-sm hover:text-rolling-red transition-colors">
              Terms
            </Link>
          </div>
          <p className="text-white/30 text-sm">India — UK</p>
        </div>
      </div>
    </footer>
  )
}

