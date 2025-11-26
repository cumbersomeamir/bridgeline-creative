'use client'

import dynamic from 'next/dynamic'

// Dynamically import Bridge3D to avoid SSR issues with Three.js
const Bridge3D = dynamic(() => import('./Bridge3D'), { 
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
})

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Bridge Background */}
      <Bridge3D />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-30 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24">
        {/* Main content */}
        <div className="max-w-5xl">
          {/* Main headline */}
          <h1 className="hero-headline text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] mb-8">
            <span className="text-rolling-red">Shaping</span>
            <br />
            <span className="text-white">the Future of</span>
            <br />
            <span className="text-rolling-red">Music, Talent</span>
            <br />
            <span className="text-white">&</span>{' '}
            <span className="text-rolling-red">Culture</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10 font-light">
            BridgeLine Creative is an India–UK based talent management and culture-building 
            agency dedicated to shaping the next generation of artists, experiences, and IPs 
            emerging from South Asia and beyond.
          </p>
          
          {/* Philosophy lines */}
          <div className="flex flex-col gap-2 mb-12">
            <p className="text-white/50 text-sm md:text-base italic">
              Where artistry meets execution.
            </p>
            <p className="text-white/50 text-sm md:text-base italic">
              Where culture meets strategy.
            </p>
            <p className="text-rolling-red/80 text-sm md:text-base italic font-medium">
              Where India meets the world.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-rolling-red text-white text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative z-10">Work With Us</span>
            </a>
            <a 
              href="#roster" 
              className="px-8 py-4 border border-white/30 text-white text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:border-rolling-red hover:text-rolling-red"
            >
              View Roster
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 md:right-12 lg:right-24 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-rolling-red animate-pulse" />
        </div>
        
        {/* Social link */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-24">
          <a 
            href="https://instagram.com/bridgelinecreative" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 text-xs tracking-[0.15em] uppercase hover:text-rolling-red transition-colors"
          >
            @bridgelinecreative
          </a>
        </div>
      </div>
    </section>
  )
}

