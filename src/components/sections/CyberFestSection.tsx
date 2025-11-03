'use client'

import { motion } from 'framer-motion'
import DecorativeArrows from '@/components/shared/DecorativeArrows'

const titleStyles = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 590,
  fontSize: '27.615px',
  letterSpacing: '-1.1046px'
}

const descriptionStyles = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 400,
  fontSize: '16px',
  letterSpacing: '-0.64px'
}

export default function CyberFestSection() {
  return (
    <section className="relative bg-[#1A1A1A] py-32 px-4 md:px-[70px] overflow-hidden min-h-screen w-screen">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto mb-16 text-center"
      >
        <h2
          className="font-semibold leading-none text-white inline-block"
          style={titleStyles}
        >
          <span style={{ opacity: 0.3 }}>Our Latest </span>
          <span>Initiative</span>
        </h2>

        {/* Decorative Arrow */}
        <div className="absolute top-0 right-0 -translate-y-6">
          <DecorativeArrows showLeft={false} showRight={true} position="top" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content - Image and Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-6 items-start w-full lg:w-[998px]"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[34px] w-full lg:w-[979px] h-[360px] shrink-0">
              <div className="absolute inset-0 w-[979px] h-[1454px] -top-[587px] left-0">
                <img
                  src="/assets/a8a7c66fbdc8c0e8467574be8ed0e64fb71936a1.png"
                  alt="Cyber Fest 2025"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_50%]"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000000 100%)'
                  }}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2.5 items-start leading-none w-full relative shrink-0">
              <h3
                className="text-white w-full lg:w-[713px]"
                style={titleStyles}
              >
                Menjadi inisiator Cyber Fest 2025 sebagai ajang kompetisi & kolaborasi cybersecurity nasional.
              </h3>
              <p
                className="text-white/50 w-full lg:w-[635px]"
                style={descriptionStyles}
              >
                Dengan Kehadiran HackPoint Langsung Menjadi inisiator Cyber Fest 2025 sebagai ajang kompetisi & kolaborasi cybersecurity nasional.
              </p>
            </div>

            {/* Decorative Icon */}
            <motion.div
              className="relative shrink-0 w-[50px] h-[50px]"
              whileHover={{
                rotate: [0, -10, 10, -10, 10, 0],
                transition: {
                  duration: 0.5,
                  ease: "easeInOut"
                }
              }}
            >
              <img
                src="/assets/756e30b197eebe08d96c0c50d817ff8af1cd5397.svg"
                alt="Achievement icon"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Right Content - Decorative Mask Element */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute lg:relative right-0 lg:right-auto lg:left-auto top-[74px] lg:top-auto w-[400px] h-[400px] lg:w-auto lg:h-auto"
            style={{
              left: '1102px'
            }}
          >
            <div className="relative flex items-center justify-center w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              <div
                className="relative w-full h-full transform rotate-180 scale-y-[-1]"
                style={{
                  maskImage: `url('/assets/83094dcb928fef64ca7c76aeea28e0c9dc32350b.svg')`,
                  maskPosition: '371.806px 369.948px',
                  maskSize: '422px 422px',
                  maskRepeat: 'no-repeat',
                  WebkitMaskImage: `url('/assets/83094dcb928fef64ca7c76aeea28e0c9dc32350b.svg')`,
                  WebkitMaskPosition: '371.806px 369.948px',
                  WebkitMaskSize: '422px 422px',
                  WebkitMaskRepeat: 'no-repeat'
                }}
              >
                <img
                  src="/assets/f2223d29493c60417b3e2126b56925343bf14d37.png"
                  alt="Cyber Fest decorative element"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_50%]"
                />
                <div className="absolute inset-0" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background gradient transition */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(211, 53, 51, 0.05) 0%, rgba(211, 53, 51, 0.1) 30%, rgba(211, 53, 51, 0.15) 60%, rgba(211, 53, 51, 0.2) 100%)'
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(26, 26, 26, 1) 0%, transparent 100%)'
        }}
      />
    </section>
  )
}