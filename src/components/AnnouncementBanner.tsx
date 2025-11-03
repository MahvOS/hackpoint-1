'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function CountdownDigit({ value }: { value: string }) {
  return (
    <motion.div
      className="flex h-10 w-8 sm:h-12 sm:w-10 items-center justify-center shadow-lg"
      style={{
        backgroundImage: "url('/assets/hackpoint/announcement_element_countdown.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <span className="font-bold text-white text-sm sm:text-base leading-none drop-shadow-lg">
        {value}
      </span>
    </motion.div>
  )
}

export default function AnnouncementBanner() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to December 25, 2025 (CyberFest date)
    const targetDate = new Date('December 25, 2025 09:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        // Calculate months
        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30))
        const remainingAfterMonths = distance % (1000 * 60 * 60 * 24 * 30)

        // Calculate days
        const days = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24))
        const remainingAfterDays = remainingAfterMonths % (1000 * 60 * 60 * 24)

        // Calculate hours
        const hours = Math.floor(remainingAfterDays / (1000 * 60 * 60))
        const remainingAfterHours = remainingAfterDays % (1000 * 60 * 60)

        // Calculate minutes
        const minutes = Math.floor(remainingAfterHours / (1000 * 60))

        // Calculate seconds
        const seconds = Math.floor((remainingAfterHours % (1000 * 60)) / 1000)

        setTimeLeft({ months, days, hours, minutes, seconds })
      } else {
        // Event has started
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Update immediately
    updateCountdown()

    // Then update every second
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  // Format numbers to always have 2 digits
  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  const handleNavigateToCyberfest = () => {
    window.location.href = '/cyberfest-2025'
  }

  return (
    <div className="block w-full bg-gradient-to-r from-red-900 to-red-600 py-2 md:py-3 px-3 md:px-6">
      {/* Mobile Layout */}
      <div className="flex md:hidden py-3 flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <CountdownDigit value={formatNumber(timeLeft.months).charAt(0)} />
            <CountdownDigit value={formatNumber(timeLeft.months).charAt(1)} />
          </div>
          <span className="text-white text-xs">:</span>
          <div className="flex items-center gap-1">
            <CountdownDigit value={formatNumber(timeLeft.days).charAt(0)} />
            <CountdownDigit value={formatNumber(timeLeft.days).charAt(1)} />
          </div>
          <span className="text-white text-xs">:</span>
          <div className="flex items-center gap-1">
            <CountdownDigit value={formatNumber(timeLeft.hours).charAt(0)} />
            <CountdownDigit value={formatNumber(timeLeft.hours).charAt(1)} />
          </div>
        </div>
        <p className="text-white text-xs text-center">CyberFest 2025 Coming Soon!</p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex py-4 items-center justify-between gap-x-4">
        {/* Logo Section */}
        <div className="flex items-center gap-7 flex-shrink-0">
          <motion.div
            className="relative inline-block overflow-visible select-none"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="pb-5">
              {/* HACKPOINT! - Red base rectangle */}
              <div className="absolute left-8 bg-[#D33533] px-0.5 py-0.5 transform rotate-[350.05deg] shadow-lg relative z-20">
                <span
                  className="font-bebas text-[40px] font-semibold text-white whitespace-nowrap uppercase block leading-none tracking-wide"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  HACKPOINT!
                </span>
              </div>

              {/* CyberFest 2025! - White overlay rectangle */}
              <div className="absolute left-9 bg-white px-0.5 py-0.5 transform rotate-[356.17deg] shadow-md z-10">
                <span
                  className="text-[#D33533] text-[25px] font-bold whitespace-nowrap uppercase block leading-none tracking-tight"
                  style={{ fontFamily: 'Trap, sans-serif', fontWeight: '800' }}
                >
                  CyberFest 2025!
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description Text */}
        <p className="text-white text-sm lg:text-base flex-1 text-left mr-12 ml-34 leading-snug break-words">
          HackPoint Buka Cyberfest Pertamanya Nih Yang Bakal Di Adain Bulan Desember Di Universitas
          Indonesia!
        </p>

        {/* Countdown Timer and CTA with Background Image */}
        <div className="relative flex items-center gap-4 mr-4 flex-shrink-0">
          {/* Background Image - Behind */}
          <motion.img
            src="/assets/hackpoint/anouncement_element_behind_countdown.png"
            alt="Countdown background"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-auto h-32 object-contain opacity-70 z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          />

          {/* Countdown Timer - Foreground */}
          <div className="flex items-center gap-1.5 relative z-10">
            {/* Months */}
            <div className="flex items-center gap-1">
              <CountdownDigit value={formatNumber(timeLeft.months).charAt(0)} />
              <CountdownDigit value={formatNumber(timeLeft.months).charAt(1)} />
            </div>

            {/* Days */}
            <div className="flex items-center gap-1 ml-3">
              <CountdownDigit value={formatNumber(timeLeft.days).charAt(0)} />
              <CountdownDigit value={formatNumber(timeLeft.days).charAt(1)} />
            </div>

            {/* Hours */}
            <div className="flex items-center gap-1 ml-3">
              <CountdownDigit value={formatNumber(timeLeft.hours).charAt(0)} />
              <CountdownDigit value={formatNumber(timeLeft.hours).charAt(1)} />
            </div>
          </div>

          {/* CTA Button - Foreground */}
          <motion.button
            onClick={handleNavigateToCyberfest}
            className="flex items-center justify-center bg-red-600 text-white font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-colors relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Cek Kursi Yuk
          </motion.button>
        </div>
      </div>
    </div>
  )
}
