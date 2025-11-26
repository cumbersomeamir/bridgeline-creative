'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    type: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', type: '', message: '' })
      } else {
        setError(data.error || 'Failed to submit form. Please try again.')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inquiryTypes = [
    { value: '', label: 'Select inquiry type' },
    { value: 'artist', label: 'Artist Management & Bookings' },
    { value: 'event', label: 'Event & IP Creation' },
    { value: 'brand', label: 'Brand Partnership' },
    { value: 'creative', label: 'Creative Direction' },
    { value: 'other', label: 'Other' },
  ]

  return (
    <section ref={ref} className="py-12 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
            >
              SEND US A <span className="text-rolling-red">MESSAGE</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base mb-6 sm:mb-8">
              We respond to all serious inquiries.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 border border-rolling-red/30 bg-rolling-red/5 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-rolling-red rounded-full">
                  <svg className="w-8 h-8 text-rolling-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                  MESSAGE SENT
                </h3>
                <p className="text-white/60">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-rolling-red text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error message */}
                {error && (
                  <div className="p-4 border border-red-500/50 bg-red-500/10 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                {/* Name */}
                <div>
                  <label className="block text-white/50 text-sm mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-4 text-white focus:border-rolling-red focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/50 text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-4 text-white focus:border-rolling-red focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-white/50 text-sm mb-2">Inquiry Type *</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/20 px-4 py-4 text-white focus:border-rolling-red focus:outline-none transition-colors appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23D40000'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-black">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white/50 text-sm mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/20 px-4 py-4 text-white focus:border-rolling-red focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/50 text-sm mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border border-white/20 px-4 py-4 text-white focus:border-rolling-red focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-rolling-red text-white text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Intro text */}
            <div>
              <p className="text-white/70 text-lg leading-relaxed">
                BridgeLine Creative works with artists, promoters, brands, festivals, and collaborators across India and the UK. Whether you're looking for representation, project partnerships, IP development, touring, or creative consulting — we're here to build long-term value and meaningful cultural work.
              </p>
            </div>

            {/* Contact sections */}
            <div className="space-y-4 sm:space-y-8">
              {/* Bookings */}
              <div className="p-5 sm:p-8 border border-white/10 hover:border-rolling-red/30 transition-colors">
                <h3 
                  className="text-lg sm:text-xl text-white mb-2 sm:mb-3"
                  style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                >
                  BOOKINGS & ARTIST MANAGEMENT
                </h3>
                <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4">
                  For bookings, routing, collaborations, and artist-related inquiries
                </p>
                <a 
                  href="mailto:info@bridgeline-creative.com"
                  className="text-rolling-red text-sm sm:text-base hover:text-white transition-colors break-all"
                >
                  info@bridgeline-creative.com
                </a>
              </div>

              {/* Partnerships */}
              <div className="p-5 sm:p-8 border border-white/10 hover:border-rolling-red/30 transition-colors">
                <h3 
                  className="text-lg sm:text-xl text-white mb-2 sm:mb-3"
                  style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                >
                  PARTNERSHIPS & PROJECTS
                </h3>
                <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4">
                  For brand partnerships, event IPs, creative collaborations
                </p>
                <a 
                  href="mailto:info@bridgeline-creative.com"
                  className="text-rolling-red text-sm sm:text-base hover:text-white transition-colors break-all"
                >
                  info@bridgeline-creative.com
                </a>
              </div>

              {/* Social */}
              <div className="p-5 sm:p-8 border border-white/10 hover:border-rolling-red/30 transition-colors">
                <h3 
                  className="text-lg sm:text-xl text-white mb-2 sm:mb-3"
                  style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
                >
                  SOCIAL
                </h3>
                <a 
                  href="https://instagram.com/bridgelinecreative"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 text-rolling-red text-sm sm:text-base hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @bridgelinecreative
                </a>
              </div>
            </div>

            {/* Work with us */}
            <div className="p-5 sm:p-8 bg-rolling-red/5 border border-rolling-red/30">
              <h3 
                className="text-lg sm:text-xl text-rolling-red mb-2 sm:mb-3"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
              >
                WORK WITH US
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                If you're an artist, promoter, brand, or creative collaborator who aligns with our vision, reach out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

