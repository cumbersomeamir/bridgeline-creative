'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const workAreas = [
  {
    id: 1,
    title: 'Talent Management',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    description: 'We develop artists with a holistic 360° approach.',
    features: [
      'Artist branding',
      'Creative strategy',
      'Release planning',
      'Tour development',
      'India × UK routing',
      'Promoter relations',
      'Visual storytelling',
      'Career architecture',
      'Long-term scaling',
    ],
    goal: 'Transform emerging artists into global-ready acts.',
  },
  {
    id: 2,
    title: 'Creative Consulting',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80',
    description: 'We craft the visual and narrative identity behind artists, events, and brands.',
    features: [
      'Brand identity',
      'Visual systems',
      'Moodboards',
      'Story-driven content',
      'Cinematic direction',
      'Aesthetic positioning',
      'Experiential identity',
    ],
    goal: 'Every output feels premium, powerful, and culturally aligned.',
  },
  {
    id: 3,
    title: 'Event IP Development',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80',
    description: 'We conceptualize, design, and launch full-scale IPs.',
    features: [
      'Underground event series',
      'Experiential concerts',
      'Audiovisual properties',
      'Cross-border collabs',
      'Artist-branded shows',
      'Festival modules',
      'Boutique experiences',
    ],
    goal: 'India-first, UK-second, global-ready.',
  },
  {
    id: 4,
    title: 'International Strategy',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    description: 'We help artists and partners navigate global markets.',
    features: [
      'UK/Europe entry',
      'India-wide touring',
      'Cross-border partnerships',
      'Brand collaborations',
      'Cultural networking',
      'International positioning',
    ],
    goal: 'We create bridges — and open doors.',
  },
]

export default function OurWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeWork, setActiveWork] = useState(1)

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-rolling-red text-sm tracking-[0.3em] uppercase mb-4">Our Work</p>
          <h2 
            className="text-4xl md:text-6xl text-white leading-[0.95] mb-6"
            style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
          >
            HOW WE CREATE <span className="text-rolling-red">IMPACT</span><br />
            ACROSS CULTURES & MARKETS
          </h2>
        </motion.div>

        {/* Work selector */}
        <div className="grid lg:grid-cols-[350px,1fr] gap-8">
          {/* Tab navigation */}
          <div className="space-y-3">
            {workAreas.map((work, index) => (
              <motion.button
                key={work.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                onClick={() => setActiveWork(work.id)}
                className={`w-full text-left p-5 border transition-all duration-300 ${
                  activeWork === work.id
                    ? 'border-rolling-red bg-rolling-red/10'
                    : 'border-white/10 hover:border-white/30 bg-black/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span 
                    className={`text-3xl ${activeWork === work.id ? 'text-rolling-red' : 'text-white/20'}`}
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    0{work.id}
                  </span>
                  <div>
                    <h3 className={`text-lg font-medium ${activeWork === work.id ? 'text-white' : 'text-white/70'}`}>
                      {work.title}
                    </h3>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Tab content */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {workAreas.map((work) => (
                work.id === activeWork && (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="border border-white/10 overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                      <div className="absolute bottom-6 left-6">
                        <h3 
                          className="text-4xl text-white"
                          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.02em' }}
                        >
                          {work.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 bg-[#0a0a0a]">
                      <p className="text-white/80 text-lg mb-6">{work.description}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {work.features.map((feature, idx) => (
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
                      
                      <div className="pt-6 border-t border-white/10">
                        <p className="text-rolling-red font-medium italic">
                          "{work.goal}"
                        </p>
                      </div>
                    </div>
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

