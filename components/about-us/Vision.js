'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring, animate } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: 100, suffix: '+', label: 'Artists Launched', duration: 2 },
  { value: 50, suffix: '+', label: 'Events Created', duration: 2.2 },
  { value: 25, suffix: '+', label: 'Cities Reached', duration: 2.4 },
  { value: 10, suffix: 'M+', label: 'Audience Touched', duration: 2.6 },
]

const visionPoints = [
  { icon: '🏆', text: 'A leading India–UK artist incubator' },
  { icon: '🌍', text: 'A global hub for creative collaboration' },
  { icon: '💎', text: 'A producer of iconic cultural IPs' },
  { icon: '🚀', text: 'A bridge that launches South Asian talent globally' },
  { icon: '🤝', text: 'A trusted partner for promoters, festivals, brands worldwide' },
]

function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (v) => setDisplayValue(Math.round(v))
      })
      return () => controls.stop()
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  )
}

export default function Vision() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 grid md:grid-cols-2">
        <div className="relative">
          <motion.div 
            style={{ y, scale }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80"
              alt="Vision"
              fill
              className="object-cover grayscale"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
        </div>
        <div className="relative hidden md:block">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), scale }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80"
              alt="Future"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-black" />
          <div className="absolute inset-0 bg-rolling-red/10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-16 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header with split reveal */}
          <div className="mb-20 overflow-hidden">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-8"
            >
              Our Vision for the Next Decade
            </motion.p>
            
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 50 }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.9]"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
              >
                TO BECOME THE
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 50 }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-rolling-red leading-[0.9]"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
              >
                DEFINING CULTURE-BUILDING
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 50 }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.9]"
                style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
              >
                AGENCY OF OUR <span className="text-rolling-red">GENERATION</span>
              </motion.h2>
            </div>
          </div>

          {/* Stats counter row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-12 border-y border-white/10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <span 
                  className="text-4xl md:text-5xl lg:text-6xl text-rolling-red block mb-2"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
                </span>
                <span className="text-white/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Vision points - staggered list */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/60 text-lg leading-relaxed"
            >
              In the next decade, we envision BridgeLine Creative becoming:
            </motion.p>
            
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 border border-transparent hover:border-rolling-red/30 hover:bg-rolling-red/5 transition-all duration-300"
                >
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    {point.icon}
                  </span>
                  <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Aspirational quote */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-20 relative"
          >
            {/* Quote mark */}
            <span 
              className="absolute -left-4 -top-8 text-[8rem] text-rolling-red/10 leading-none select-none"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              "
            </span>
            
            <div className="border-l-4 border-rolling-red pl-8 py-4">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed italic">
                We want our <span className="text-rolling-red not-italic font-semibold">artists to headline stages</span> across continents, 
                our <span className="text-rolling-red not-italic font-semibold">IPs to become cultural landmarks</span>, and our work to 
                inspire the <span className="text-rolling-red not-italic font-semibold">next generation of creative talent</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-rolling-red/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-white/10 hidden lg:block"
      />
    </section>
  )
}
