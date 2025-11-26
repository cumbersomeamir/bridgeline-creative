'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group flex flex-col items-start leading-none">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                {/* BRIDGELINE text */}
                <span 
                  className="text-lg sm:text-xl md:text-2xl text-white font-bold tracking-wide"
                  style={{ 
                    fontFamily: 'var(--font-inter)',
                    fontStyle: 'italic',
                    fontWeight: 700,
                  }}
                >
                  BRIDGELINE
                </span>
                
                {/* Diagonal lines */}
                <div className="relative h-[3px] mt-0.5 overflow-visible">
                  <div 
                    className="absolute left-0 right-0 h-[1.5px] bg-white origin-left"
                    style={{ transform: 'rotate(-3deg)', top: '0' }}
                  />
                  <div 
                    className="absolute left-0 right-0 h-[1px] bg-white/70 origin-left"
                    style={{ transform: 'rotate(-3deg)', top: '3px' }}
                  />
                </div>
                
                {/* CREATIVE text */}
                <span 
                  className="block text-[8px] sm:text-[9px] md:text-[10px] text-white/90 tracking-[0.35em] mt-1"
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 300 }}
                >
                  CREATIVE
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || 
                  (link.href !== '/' && pathname.startsWith(link.href))
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group"
                  >
                    <span className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                      isActive ? 'text-rolling-red' : 'text-white/70 hover:text-white'
                    }`}>
                      {link.label}
                    </span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rolling-red"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover indicator */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300" />
                  </Link>
                )
              })}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  pathname === '/contact'
                    ? 'bg-white text-black'
                    : 'bg-rolling-red text-white hover:bg-white hover:text-black'
                }`}
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  className="absolute top-0 left-0 w-full h-0.5 bg-white origin-center"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? -10 : 0,
                  }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-white"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-20 right-0 bottom-0 w-full bg-black/90 backdrop-blur-md border-l border-white/10 p-8"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href || 
                    (link.href !== '/' && pathname.startsWith(link.href))
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`block text-3xl transition-colors duration-300 ${
                          isActive ? 'text-rolling-red' : 'text-white hover:text-rolling-red'
                        }`}
                        style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 border-t border-white/10"
                >
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 bg-rolling-red text-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </motion.div>

                {/* Social */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto pt-8"
                >
                  <a
                    href="https://instagram.com/bridgelinecreative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/40 hover:text-rolling-red transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                    <span className="text-sm">@bridgelinecreative</span>
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

