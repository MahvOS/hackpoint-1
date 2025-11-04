'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import DecorativeArrows from '@/components/shared/DecorativeArrows'

function CountdownDigit({ value }: { value: string }) {
  return (
    <motion.div
      className="bg-[#770201] flex items-center justify-center px-2 py-1 sm:px-3 sm:py-2 md:px-[19.849px] md:py-[16.32px] rounded-bl-[12px] sm:rounded-bl-[16px] md:rounded-bl-[22.054px] rounded-tr-[12px] sm:rounded-tr-[16px] md:rounded-tr-[22.054px] h-[40px] sm:h-[60px] md:h-[90.865px] w-[35px] sm:w-[50px] md:w-[76.308px] shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <span
        className="capitalize font-medium text-[20px] sm:text-[32px] md:text-[57.855px] text-white leading-none text-center whitespace-nowrap"
        style={{
          fontFamily: 'SF Pro, sans-serif',
          fontVariationSettings: '"wdth" 100',
          fontWeight: 510,
        }}
      >
        {value}
      </span>
    </motion.div>
  )
}

export default function CyberFestHeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('December 25, 2025 09:00:00').getTime()
    const monthMs = 1000 * 60 * 60 * 24 * 30
    const dayMs = 1000 * 60 * 60 * 24
    const hourMs = 1000 * 60 * 60
    const minuteMs = 1000 * 60

    const updateCountdown = () => {
      const now = Date.now()
      const distance = targetDate - now

      if (distance > 0) {
        const months = Math.floor(distance / monthMs)
        const remainingAfterMonths = distance % monthMs
        const days = Math.floor(remainingAfterMonths / dayMs)
        const remainingAfterDays = remainingAfterMonths % dayMs
        const hours = Math.floor(remainingAfterDays / hourMs)
        const remainingAfterHours = remainingAfterDays % hourMs
        const minutes = Math.floor(remainingAfterHours / minuteMs)
        const seconds = Math.floor((remainingAfterHours % minuteMs) / 1000)

        setTimeLeft({ months, days, hours, minutes, seconds })
      } else {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  // Format numbers to always have 2 digits
  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  const handleRegister = () => {
    // Handle registration action
    console.log('Register for CyberFest 2025')
  }

  // Format date for display (cached)
  const formattedDate = new Date('December 25, 2025').toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <section
      id="cyberfest"
      className="relative min-h-screen md:h-[1000px] flex items-center justify-center overflow-hidden pt-[150px] md:pt-[110px]"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <div className="absolute blur-[10px] h-[1250px] md:h-[1250px] left-1/2 top-0 translate-x-[-50%] w-[1500px] md:w-[1500px] sm:w-[200vw] sm:h-[200vh]">
          <img
            src="/assets/hackpoint/cyberfest_page_background.png"
            alt="CyberFest Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center -top-6 gap-[20px] md:gap-[34px] w-full max-w-[1088px] px-4 md:px-2">
        {/* Title Section */}
        <div className="flex flex-col gap-[12px] md:gap-[34px] items-center text-center w-full">
          {/* Mobile Title */}
          <motion.h1
            className="leading-none block md:hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="italic font-bold text-[32px] sm:text-[40px] text-white block font-sf leading-tight leading-7">
              CyberFest 2025
            </span>
            <span className="font-bold text-[32px] sm:text-[22px] text-white/30 block font-sf leading-tight leading-7">
              Indonesia's Biggest Cybersecurity
              <br className="hidden sm:block" />
              Youth & Tech Movement
            </span>
          </motion.h1>

          {/* Desktop Title - Figma Design */}
          <motion.h1
            className="leading-none hidden md:block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontVariationSettings: '"opsz" 14',
              fontWeight: 'bold',
            }}
          >
            <span className="font-bold leading-none">
              <span
                className="italic font-bold text-white"
                style={{
                  fontFamily: 'SF Pro, sans-serif',
                  fontVariationSettings: '"YAXS" 430',
                  fontSize: '54px',
                }}
              >
                CyberFest 2025
              </span>
              <span
                className="text-white mx-2"
                style={{
                  fontFamily: 'SF Pro, sans-serif',
                  fontVariationSettings: '"wdth" 100',
                  fontSize: '54px',
                }}
              >
                -
              </span>
              <span
                className="text-white/30"
                style={{
                  fontFamily: 'SF Pro, sans-serif',
                  fontVariationSettings: '"wdth" 100',
                  fontSize: '50px',
                }}
              >
                Indonesia's Biggest Cybersecurity Youth & Tech Movement
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="text-[12px] sm:text-[16px] md:text-[20px] text-[lightgrey] leading-[1.1] tracking-[0.2px] w-full max-w-[887px] font-poppins px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Event terbesar HackPoint yang mempertemukan pelajar, profesional, dan industri untuk
            belajar, berkompetisi, dan membangun masa depan dunia cyber security.
          </motion.p>
        </div>

        {/* Countdown and CTA Section */}
        <div className="flex flex-col gap-[24px] md:gap-[40px] items-center">
          {/* Countdown Timer */}
          <div className="flex flex-col gap-[12px] md:gap-[20px] items-center w-full max-w-[599px] px-4 sm:px-0">
            {/* Mobile Countdown */}
            <motion.div
              className="flex gap-[18px] sm:gap-[16px] md:hidden items-center justify-center w-full flex-nowrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Months */}
              <div className="flex gap-1 sm:gap-[10px] items-center">
                <CountdownDigit value={formatNumber(timeLeft.months).charAt(0)} />
                <span className="text-white/40 font-medium text-lg sm:text-xl"></span>
                <CountdownDigit value={formatNumber(timeLeft.months).charAt(1)} />
              </div>

              {/* Days */}
              <div className="flex gap-2 sm:gap-[10px] items-center">
                <CountdownDigit value={formatNumber(timeLeft.days).charAt(0)} />
                <CountdownDigit value={formatNumber(timeLeft.days).charAt(1)} />
              </div>

              {/* Hours */}
              <div className="flex gap-2 sm:gap-[12px] items-center">
                <CountdownDigit value={formatNumber(timeLeft.hours).charAt(0)} />
                <CountdownDigit value={formatNumber(timeLeft.hours).charAt(1)} />
              </div>

              {/* Minutes */}
              <div className="flex gap-2 sm:gap-[12px] items-center hidden sm:block">
                <CountdownDigit value={formatNumber(timeLeft.minutes).charAt(0)} />
                <CountdownDigit value={formatNumber(timeLeft.minutes).charAt(1)} />
              </div>

              {/* Seconds */}
              <div className="flex gap-1 sm:gap-[12px] items-center hidden sm:block">
                <CountdownDigit value={formatNumber(timeLeft.seconds).charAt(0)} />
                <CountdownDigit value={formatNumber(timeLeft.seconds).charAt(1)} />
              </div>
            </motion.div>

            {/* Desktop Countdown - Figma Design */}
            <motion.div
              className="hidden md:flex gap-[44.109px] items-center justify-center w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Hours */}
              <div className="flex gap-[17.644px] items-center">
                <CountdownDigit value={formatNumber(timeLeft.hours).charAt(0)} />
                <CountdownDigit value={formatNumber(timeLeft.hours).charAt(1)} />
              </div>

              {/* Minutes */}
              <div className="flex gap-[17.644px] items-center">
                <CountdownDigit value={formatNumber(timeLeft.minutes).charAt(0)} />
                <CountdownDigit value={formatNumber(timeLeft.minutes).charAt(1)} />
              </div>

              {/* Seconds */}
              <div className="flex gap-[17.644px] items-center">
                <CountdownDigit value={formatNumber(timeLeft.seconds).charAt(0)} />
                <CountdownDigit value={formatNumber(timeLeft.seconds).charAt(1)} />
              </div>
            </motion.div>

            <motion.p
              className="text-[15px] md:text-[21px] text-white/80 text-center font-semibold italic w-full"
              style={{ textShadow: 'rgba(0,0,0,0.25) 0px 2.37px 5.926px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {formattedDate}
            </motion.p>
          </div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={handleRegister}
              className="bg-red-600 text-white font-bold text-[14px] sm:text-[15px] md:text-[17px] px-[20px] sm:px-[22px] md:px-[24.917px] py-[10px] sm:py-[11px] md:py-[13px] md:pt-[13px] md:pb-[12.139px] rounded-full shadow-[0px_4px_13.4px_0px_rgba(0,0,0,0.25),0px_0px_63.889px_0px_rgba(255,255,255,0.3)] hover:bg-red-700 transition-colors md:w-[230px] md:h-[47px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontVariationSettings: '"opsz" 14',
                fontWeight: 'bold',
              }}
            >
              Daftar Sekarang
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Arrow pointing down */}
      <div className="absolute bottom-[20px] left-[20px] sm:left-[50px] md:left-[100px] -rotate-[30deg]">
        <DecorativeArrows showLeft={true} showRight={false} position="bottom" />
      </div>
    </section>
  )
}
