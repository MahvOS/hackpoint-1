'use client'

import { motion } from 'framer-motion'
import DecorativeArrows from '@/components/shared/DecorativeArrows'

const achievementData = [
  {
    image: "/assets/hackpoint/card_background_1.png",
    title: "Mengadakan beberapa bootcamp dengan ribuan peserta.",
    description: "Dengan Kehadiran HackPoint Langsung Mengadakan beberapa bootcamp dengan ribuan peserta.",
    position: { top: "250px", left: "25px" }
  },
  {
    image: "/assets/hackpoint/card_background_2.png",
    title: "Membangun komunitas aktif dari berbagai kampus di Indonesia.",
    description: "Dengan Kehadiran HackPoint Langsung Membangun komunitas aktif dari berbagai kampus di Indonesia.",
    position: { top: "130px", left: "456px" }
  },
  {
    image: "/assets/hackpoint/card_background_3.png",
    title: "Membuka jalur kerjasama dengan universitas dan perusahaan teknologi.",
    description: "Dengan Kehadiran HackPoint Langsung Membuka jalur kerjasama dengan universitas dan perusahaan teknologi.",
    position: { top: "240px", left: "895px" }
  }
]

const cyberFestData = {
  image: "/assets/hackpoint/card_background_4.png",
  title: "Menjadi inisiator Cyber Fest 2025 sebagai ajang kompetisi & kolaborasi cybersecurity nasional.",
  description: "Dengan Kehadiran HackPoint Langsung Menjadi inisiator Cyber Fest 2025 sebagai ajang kompetisi & kolaborasi cybersecurity nasional."
}

const titleStyles = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 590,
  fontSize: '42px',
  letterSpacing: '-1.28px'
}

const titleStylesDesktop = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 590,
  fontSize: '54px',
  letterSpacing: '-2.16px'
}

const cardTitleStyles = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 590,
  fontSize: '21px',
  letterSpacing: '-0.462px'
}

const cardTitleStylesDesktop = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 590,
  fontSize: '27.615px',
  letterSpacing: '-1.1046px'
}

const cardDescriptionStyles = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 400,
  fontSize: '12px',
  letterSpacing: '-0.2px'
}

const cardDescriptionStylesDesktop = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 400,
  fontSize: '16px',
  letterSpacing: '-0.64px'
}

export default function AchievementSection() {
  return (
    <section className="relative bg-[#1A1A1A] py-8 md:py-12 px-4 md:px-[70px] overflow-hidden min-h-[80vh] md:min-h-[10vh] w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto mb-auto text-left md:text-center"
      >
        <h2
          className="font-semibold leading-none text-white inline-block"
          style={titleStyles}
        >
          <span style={{ opacity: 0.3 }}>Walau baru berdiri di 2025, </span>
          <span>HackPoint </span>
          <span style={{ opacity: 0.3 }}>sudah</span>
        </h2>

        {/* Shape Image - Left Corner */}
        <img
          src="/assets/hackpoint/about_page_shape.png"
          alt="Decorative shape"
          className="absolute left-12 top-3/2 -translate-y-1/5 -translate-x-2/2 w-auto h-116 object-contain z-10"
        />

              </motion.div>

      {/* Mobile Achievement Cards - Vertical Layout */}
      <div className="block md:hidden relative max-w-md mx-auto space-y-6 mt-8 mb-12 z-20">
        {achievementData.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
            className="flex flex-col gap-4 items-start w-full cursor-pointer"
          >
        {/* Regular Achievement Cards */}
            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[25px] shrink-0" style={{ width: '274.822px', height: '308.242px', aspectRatio: '274.82/408.24' }}>
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={achievement.image}
                  alt={achievement.title}
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
            <div className="flex flex-col gap-2 items-start leading-none w-full relative shrink-0">
              <h3
                className="text-white w-full"
                style={cardTitleStyles}
              >
                {achievement.title}
              </h3>
              <p
                className="text-white/50 w-[90%]"
                style={cardDescriptionStyles}
              >
                {achievement.description}
              </p>
            </div>

            {/* Decorative Icon */}
            <motion.div
              className="relative shrink-0 w-[40px] h-[40px]"
              whileHover={{
                rotate: [0, -10, 10, -10, 10, 0],
                transition: {
                  duration: 0.5,
                  ease: "easeInOut"
                }
              }}
            >
              <img
                src="/assets/hackpoint/arrow_card.svg"
                alt="Achievement icon"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Achievement Cards - Original Layout */}
      <div className="hidden md:block relative max-w-[1440px] mx-auto h-[800px] z-20">
        {achievementData.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
            className="absolute flex flex-col gap-6 items-start w-[324px] cursor-pointer"
            style={{
              top: achievement.position.top,
              left: achievement.position.left
            }}
          >
        {/* Regular Achievement Cards */}
            {/* Image Card */}
            <div className="relative overflow-hidden rounded-[25px] w-[300px] h-[300px] shrink-0">
              <div className="absolute inset-0 w-[352px] h-[523px] -top-[103px] -left-[26px]">
                <img
                  src={achievement.image}
                  alt={achievement.title}
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
                className="text-white w-full"
                style={cardTitleStylesDesktop}
              >
                {achievement.title}
              </h3>
              <p
                className="text-white/50 w-full"
                style={cardDescriptionStylesDesktop}
              >
                {achievement.description}
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
                src="/assets/hackpoint/arrow_card.svg"
                alt="Achievement icon"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

    
      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(26, 26, 26, 1) 0%, transparent 100%)'
        }}
      />
      {/* Cyber Fest Card - Separate Section Above */}
      <div className="block md:hidden relative max-w-md mx-auto mb-12 mt-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 12
          }}
          className="flex flex-col gap-4 items-start cursor-pointer z-20"
        >
          {/* Mobile Image Card - Same size as other cards */}
          <div className="relative overflow-hidden rounded-[25px] shrink-0" style={{ width: '274.822px', height: '308.242px', aspectRatio: '274.82/408.24' }}>
            <div className="absolute inset-0 w-full h-full">
              <img
                src={cyberFestData.image}
                alt={cyberFestData.title}
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
          <div className="flex flex-col gap-2 items-start leading-none w-full relative shrink-0">
            <h3
              className="text-white w-full"
              style={cardTitleStyles}
            >
              {cyberFestData.title}
            </h3>
            <p
              className="text-white/50 w-[80%]"
              style={cardDescriptionStyles}
            >
              {cyberFestData.description}
            </p>
          </div>

          {/* Decorative Icon */}
          <motion.div
            className="relative shrink-0 w-[40px] h-[40px]"
            whileHover={{
              rotate: [0, -10, 10, -10, 10, 0],
              transition: {
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
          >
            <img
              src="/assets/hackpoint/arrow_card.svg"
              alt="Achievement icon"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Cyber Fest Card - Original Layout */}
      <div className="hidden md:block relative max-w-7xl mx-auto mb-12 mt-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          transition={{
            duration: 1,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 12
          }}
          className="flex flex-col gap-6 items-start w-full max-w-[700px] relative z-20"
        >
          {/* Large Image Card */}
          <div className="relative overflow-hidden rounded-[34px] w-[700px] h-[280px] shrink-0">
            <div className="absolute inset-0 w-[700px] h-[1000px] -top-[360px] left-0">
              <img
                src={cyberFestData.image}
                alt={cyberFestData.title}
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
              className="text-white w-[600px]"
              style={cardTitleStylesDesktop}
            >
              {cyberFestData.title}
            </h3>
            <p
              className="text-white/50 w-[550px]"
              style={cardDescriptionStylesDesktop}
            >
              {cyberFestData.description}
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
              src="/assets/hackpoint/arrow_card.svg"
              alt="Achievement icon"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Decorative Mask Element */}
          <div className="absolute -right-[120px] top-[60px] w-[250px] h-[250px]">
            <div className="relative flex items-center justify-center w-full h-full">
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
          </div>
        </motion.div>
      </div>

      {/* Globe - Right Side of Achievement Cards - Behind Cards */}
      <div className="absolute -right-8 top-1/2 translate-y-2/4 translate-x-1/4 w-48 h-48 md:w-96 md:h-96 z-5">
        <img
          src="/assets/hackpoint/about_page_globe.png"
          alt="Globe"
          className="w-full h-full object-contain"
        />
      </div>

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