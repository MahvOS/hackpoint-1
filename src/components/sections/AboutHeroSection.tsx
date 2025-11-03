'use client'

import { motion } from 'framer-motion'
import DecorativeArrows from '@/components/shared/DecorativeArrows'

export default function AboutHeroSection() {
  return (
    <div className="relative flex min-h-[450px] md:h-[700px] w-full flex-col items-center justify-center py-32 pt-48 md:py-8 md:pt-8 bg-[#1A1A1A]">
      {/* Particle Effect Behind Text */}
      <img
        src="/assets/hackpoint/about_page_particle.png"
        alt="Particle effect"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain opacity-60 z-0"
      />

      {/* Light Effect Behind Text */}
      <img
        src="/assets/hackpoint/about_section_light.png"
        alt="Light effect"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain opacity-80 z-0 hidden md:block"
      />
      {/* Mobile Red Light Effect */}
      <img
        src="/assets/hackpoint/about_red_light_mobile.png"
        alt="Light effect"
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 scale-[110%] object-contain opacity-100 z-20 block md:hidden"
      />

      {/* Mobile Decorative Arrow below red light */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 block md:hidden z-30">
        <div className="relative w-20 h-20">
          <DecorativeArrows showLeft={false} showRight={true} position="bottom" />
        </div>
      </div>

      {/* Mobile Mini Decorative Arrows at bottom */}
      <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 block md:hidden z-30">
        <div className="relative w-12 h-12 scale-50">
          <DecorativeArrows showLeft={false} showRight={true} position="bottom" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-[30px] text-center pt-8 px-4 mt-0">
        <motion.div
          className="flex flex-col items-center gap-[30px] text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Siapa Kami? Heading with Texture and Noise Effects */}
          <div className="relative">
            {/* Main Text */}
            <h1
              className="font-bold text-[60px] md:text-[87.076px] uppercase w-full leading-[0.91] relative"
              style={{
                fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                fontWeight: 500,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                position: 'relative',
                backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/><feBlend mode='multiply'/></filter><rect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/></svg>"), radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 50%, rgba(50,50,50,0.8) 100%)`,
                backgroundSize: '200px 200px, 100% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Siapa Kami?
            </h1>
          </div>

          {/* Description with Gradient Text Background */}
          <div
            className="font-medium text-[16px] md:text-[21px] leading-none tracking-[0.93px] w-full capitalize px-4 md:px-20 lg:px-32 gradient-text-fallback"
            style={{
              fontFamily: 'SF Pro, sans-serif',
              fontVariationSettings: '"wdth" 100',
              fontWeight: 510,
              backgroundImage: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.50) 100%)',
              backgroundSize: '100% 200%',
              backgroundPosition: 'top center',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {/* Fallback for browsers that don't support background-clip */}
            <noscript>
              <style>{`
                .gradient-text-fallback {
                  color: #FFFFFF !important;
                  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
                }
              `}</style>
            </noscript>
            <p className="mb-0">
              HackPoint adalah komunitas sekaligus platform pembelajaran cybersecurity yang lahir
              pada tahun 2025. Kami hadir dengan tujuan sederhana: menjadikan dunia keamanan siber
              lebih mudah diakses, dipahami, dan dipraktikkan oleh siapa saja.
            </p>
            <p className="mb-0">
              Di HackPoint, kami percaya bahwa belajar cybersecurity gak harus rumit atau eksklusif.
              Justru, dengan pendekatan pembelajaran interaktif dan komunitas yang solid, siapa pun
              bisa berkembang dari pemula hingga profesional.
            </p>
            <p>&nbsp;</p>
          </div>

          {/* Decorative Arrow above Vision & Misi button for mobile ONLY - in front of red light */}
          <div className="block md:!hidden w-28 h-28 mx-auto mb-3 relative z-40">
            <DecorativeArrows showLeft={false} showRight={true} position="bottom" />
          </div>

          <motion.button
            className="flex h-[40px] md:h-[47px] w-auto px-6 md:w-[230px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D33533] to-[#6D1B1A] py-3 transition-all hover:scale-105 hover:shadow-[0_4px_13.4px_rgba(0,0,0,0.25),0_0_63.889px_rgba(255,255,255,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-center font-dm text-sm md:text-[17px] font-bold leading-[100%] text-white capitalize whitespace-nowrap">
              Visi & Misi
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}