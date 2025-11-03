'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DESIGN_TOKENS } from '@/constants/design'

const rotatingTexts = ['Cybersecurity', 'Ilmu Teknologi', 'Perangkat Lunak', 'Perangkat Keras']

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % rotatingTexts.length)
    }, DESIGN_TOKENS.animation.interval.hero)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex min-h-[600px] md:h-[912px] w-full flex-col items-center justify-center py-16 md:py-8">
      <img
        src={DESIGN_TOKENS.assets.hackpoint.backgroundLanding}
        alt="hackpoint_landing_page"
        className="absolute -inset-x-0 inset-y-0 h-full w-full object-cover mix-blend-luminosity"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 py-12 px-4">
        <motion.div
          className="relative flex h-[50px] w-[50px] md:h-[61px] md:w-[59px] items-center justify-center p-3 transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <img
            src={DESIGN_TOKENS.assets.hackpoint.heroLogo}
            alt="HackPoint Logo"
            className="h-full w-full object-contain"
          />
        </motion.div>

        <div className="flex flex-col items-center gap-6 md:gap-8 ">
          <div className="flex flex-col items-center gap-2 md:gap-3">
            <h1 className="text-center font-dm text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-bold leading-[100%] text-white capitalize max-w-full md:max-w-[1033px] px-4">
              Tempat Belajar & Berkembang
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <h2 className="text-center font-dm text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-bold leading-[100%] text-white capitalize">
                di Dunia
              </h2>
              <div className="relative h-[40px] sm:h-[50px] md:h-[66px] min-w-[200px] sm:min-w-[280px] md:min-w-[400px]">
                {rotatingTexts.map((text, index) => (
                  <h2
                    key={text}
                    className={`absolute left-0 right-0 text-center font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-[66px] font-normal italic leading-[100%] text-white capitalize transition-all duration-500 whitespace-nowrap ${
                      index === currentTextIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {text}
                  </h2>
                ))}
              </div>
            </div>

            <p className="mt-2 md:mt-4 max-w-full md:max-w-[887px] text-center font-poppins text-sm sm:text-base md:text-lg lg:text-xl leading-[110%] tracking-[0.2px] text-[#D3D3D3] capitalize px-4">
              Dari pemula sampai profesional, kami bantu Kalian step by step lewat bootcamp, course,
              dan event — 100% hands-on, tanpa teori berbelit.
            </p>
          </div>

          <button className="flex h-[40px] md:h-[47px] w-auto px-6 md:w-[230px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D33533] to-[#6D1B1A] py-3 transition-all hover:scale-105 hover:shadow-[0_4px_13.4px_rgba(0,0,0,0.25),0_0_63.889px_rgba(255,255,255,0.3)]">
            <span className="text-center font-dm text-sm md:text-[17px] font-bold leading-[100%] text-white capitalize whitespace-nowrap">
              Mulai Belajar Sekarang
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
