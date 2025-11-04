'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import DecorativeBadge from '@/components/shared/DecorativeBadge'

export default function CyberFestAboutSection() {
  return (
    <SectionWrapper id="cyberfest-about" bgColor="#1A1A1A" py="py-20 md:py-32">
      <div className="relative max-w-7xl min-h-[400px] md:h-[560px] mx-auto px-4 sm:px-6 md:px-[70px]">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Union Shape - Large decorative element */}
          <motion.div
            className="absolute left-4 md:left-[135px] top-8 md:top-[138px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[661.815px] md:h-[627.615px] opacity-20"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 0.2, rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ transform: 'rotate(350.708deg)' }}
          >
            <div
              className="w-full h-full"
              style={{
                maskImage: `url('/assets/170eca75392c8db062eb464df5be7150b58fb862.svg')`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: `url('/assets/170eca75392c8db062eb464df5be7150b58fb862.svg')`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                background: 'linear-gradient(135deg, #d33533 0%, #770201 100%)',
              }}
            />
          </motion.div>

          {/* CyberFest Page Element - Behind Description */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
            <img
              src="/assets/hackpoint/cyberfest_page_element.png"
              alt="CyberFest Page Element"
              className="w-[200px] h-[100px] sm:w-[300px] sm:h-[150px] md:w-[500px] md:h-[250px] lg:w-[768px] lg:h-[384px] object-contain drop-shadow-lg opacity-30"
            />
          </div>

          {/* New Decorative Badge from Figma */}
          <div className="absolute right-16 md:right-[120px] -bottom-3 md:bottom-[100px] scale-70 md:scale-100">
            <DecorativeBadge size="md" />
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center gap-[32px] md:gap-[48px] lg:gap-[60px] w-full max-w-[1129px] mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h2
            className="font-bold leading-none text-left w-full text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'SF Pro, sans-serif',
              fontVariationSettings: '"wdth" 100',
              fontWeight: 700,
            }}
          >
            <span
              className="text-[43px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[85.658px] text-[#D33533] md:text-white/30"
              style={{
                fontVariationSettings: '"wdth" 100',
                display: 'inline-block',
              }}
            >
              About
            </span>
            <span
              className="text-[28px] sm:text-[36px] md:text-[46px] lg:text-[58px] xl:text-[78.683px] text-white mx-1 sm:mx-2"
              style={{
                fontVariationSettings: '"wdth" 100',
                display: 'inline-block',
              }}
            ></span>
            <span
              className="text-[42px] sm:text-[36px] md:text-[46px] lg:text-[58px] xl:text-[78.683px] text-white"
              style={{
                fontVariationSettings: '"wdth" 100',
                display: 'inline-block',
              }}
            >
              CyberFest?
            </span>
          </motion.h2>

          {/* Description Text */}
          <motion.div
            className="relative w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] lg:max-w-[1123px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p
              className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] text-left text-white leading-[1.2] italic"
              style={{
                fontFamily: 'SF Pro, sans-serif',
                fontVariationSettings: '"opsz" 14, "YAXS" 419.2',
                fontWeight: 550.8,
              }}
            >
              <span style={{ fontVariationSettings: '"YAXS" 419.2' }}>
                Cyber Fest 2025 adalah event cybersecurity nasional yang diinisiasi HackPoint.
              </span>
              <span className="text-white/30" style={{ fontVariationSettings: '"YAXS" 419.2' }}>
                Event ini menggabungkan kompetisi CTF, seminar, workshop, dan networking dalam satu
                panggung besar.
              </span>
            </p>
            <p
              className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] text-left text-white leading-[1.2] italic"
              style={{
                fontFamily: 'SF Pro, sans-serif',
                fontVariationSettings: '"opsz" 14, "YAXS" 419.2',
                fontWeight: 550.8,
              }}
            >
              Tujuannya sederhana: membangun generasi baru talenta digital Indonesia yang siap
              menghadapi tantangan keamanan cyber global.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
