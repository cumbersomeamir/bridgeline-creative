'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

const values = [
  {
    number: '01',
    title: 'ARTIST-FIRST',
    shortTitle: 'ARTIST',
    description: 'We prioritize long-term artist growth over short-term noise. Every decision is rooted in the artist\'s vision, identity, and sustainability.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
    color: '#D40000',
  },
  {
    number: '02',
    title: 'CULTURE OVER HYPE',
    shortTitle: 'CULTURE',
    description: 'Trends fade — culture lasts. We invest in talent and experiences with depth, impact, and emotional resonance.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
    color: '#FF4444',
  },
  {
    number: '03',
    title: 'GLOBAL THINKING',
    shortTitle: 'GLOBAL',
    description: "India-first doesn't mean India-only. We build careers and IPs that scale across borders, markets, and communities.",
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
    color: '#D40000',
  },
  {
    number: '04',
    title: 'CREATIVITY × STRATEGY',
    shortTitle: 'HYBRID',
    description: 'We reject the false separation between creativity and structure. BridgeLine Creative is engineered to deliver both — with precision.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
    color: '#FF4444',
  },
  {
    number: '05',
    title: 'RELATIONSHIP-DRIVEN',
    shortTitle: 'TRUST',
    description: 'This industry moves through trust, understanding, and long-term partnerships. We build strong, meaningful relationships.',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80',
    color: '#D40000',
  },
  {
    number: '06',
    title: 'EXECUTION EXCELLENCE',
    shortTitle: 'EXECUTE',
    description: 'From visual identity to touring to IP creation — we care about details because details matter.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80',
    color: '#FF4444',
  },
]

function TiltCard({ value, index }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 })
  const scale = useSpring(isHovered ? 1.05 : 1, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  // Masonry layout - alternating heights
  const isLarge = index % 3 === 0
  const height = isLarge ? 'h-[500px]' : 'h-[400px]'

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.15, type: 'spring' }}
      style={{ 
        rotateX, 
        rotateY, 
        scale,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative ${height} cursor-pointer group overflow-hidden`}
    >
      {/* Glowing border on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${value.color}40, transparent, ${value.color}40)`,
          padding: '1px',
        }}
      />
      
      {/* Main card */}
      <div className="absolute inset-[1px] bg-[#0a0a0a] overflow-hidden">
        {/* Background image with parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            translateX: useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
            translateY: useTransform(mouseY, [-0.5, 0.5], [-10, 10]),
          }}
        >
          <Image
            src={value.image}
            alt={value.title}
            fill
            className="object-cover opacity-30 grayscale group-hover:opacity-50 group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
        
        {/* Number - 3D floating */}
        <motion.div 
          className="absolute top-6 right-6"
          style={{
            translateZ: '50px',
            transformStyle: 'preserve-3d',
          }}
        >
          <span 
            className="text-8xl text-white/5 group-hover:text-rolling-red/20 transition-colors duration-500"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            {value.number}
          </span>
        </motion.div>
        
        {/* Short title - floating tag */}
        <motion.div
          className="absolute top-6 left-6"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          style={{ transformStyle: 'preserve-3d', translateZ: '30px' }}
        >
          <span className="px-3 py-1 bg-rolling-red/20 border border-rolling-red/50 text-rolling-red text-xs tracking-widest uppercase">
            {value.shortTitle}
          </span>
        </motion.div>
        
        {/* Content */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-8"
          style={{ transformStyle: 'preserve-3d', translateZ: '40px' }}
        >
          {/* Title */}
          <h3 
            className="text-2xl md:text-3xl text-white mb-4 group-hover:text-rolling-red transition-colors duration-300"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.05em' }}
          >
            {value.title}
          </h3>
          
          {/* Description - reveals on hover */}
          <motion.p 
            className="text-white/60 text-sm leading-relaxed"
            initial={{ opacity: 0.7, height: 'auto' }}
            whileHover={{ opacity: 1 }}
          >
            {value.description}
          </motion.p>
          
          {/* Bottom line animation */}
          <motion.div 
            className="h-0.5 bg-rolling-red mt-6 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          />
        </div>
      </div>
      
      {/* Reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  )
}

export default function Values() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(212, 0, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(212, 0, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(212, 0, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(212, 0, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(212, 0, 0, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-6"
          >
            Our Core Values
          </motion.p>
          
          {/* Animated title with stagger */}
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="text-4xl md:text-6xl lg:text-7xl text-white leading-[0.95]"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
            >
              THE PRINCIPLES
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 100 }}
              className="text-4xl md:text-6xl lg:text-7xl text-rolling-red leading-[0.95]"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
            >
              THAT DEFINE US
            </motion.h2>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <TiltCard key={value.number} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
