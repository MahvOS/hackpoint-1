'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CyberFestRegistrationSection() {
  return (
    <section
      className="relative py-6 md:py-20 px-2 sm:px-4 md:px-[70px] overflow-hidden min-h-[700px] md:min-h-[500px]"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      {/* Background with gradient and rounded corners */}
      <div className="relative max-w-7xl mx-auto">
        {/* Main background container */}
  <div className="relative h-[520px] sm:h-[550px] md:h-[700px] lg:h-[893px] rounded-[12px] sm:rounded-[25px] md:rounded-[30px] overflow-hidden">
          {/* Red background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-800 via-red-900 to-transparent rounded-[12px] sm:rounded-[25px] md:rounded-[30px]" />

          {/* Content overlay */}
          <div className="relative z-10 flex flex-col h-full p-2 sm:p-4 md:p-8 lg:p-12">
            {/* Top section with heading and details side by side */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start ">
              {/* Left side - Heading and description */}
              <div className="flex-1 space-y-2 md:space-y-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-white"
                >
                  <div className="flex flex-col mt-1 md:mt-4">
                    <span
                      className="font-bold leading-none text-[28px] sm:text-[36px] md:text-[65px]"
                      style={{
                        fontFamily: 'SF Pro, sans-serif',
                        fontVariationSettings: '"wdth" 100',
                      }}
                    >
                      Siap Jadi Bagian dari Cyber Fest 2025?
                    </span>
                    {/* <span
                      className="font-bold italic leading-none mt-1 md:mt-2 text-[40px] md:text-[90px]"
                      style={{
                        fontFamily: 'SF Pro, sans-serif',
                        fontVariationSettings: '"YAXS" 430',
                        letterSpacing: '-0.05em'
                      }}
                    >
                      Cyber Fest 2025?
                    </span> */}
                  </div>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white/80 max-w-xs sm:max-w-lg md:max-w-2xl text-xs sm:text-sm md:text-base"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontVariationSettings: '"opsz" 14',
                    fontWeight: 500,
                  }}
                >
                  Slot peserta terbatas! Jangan lewatkan kesempatan untuk ikut serta dalam event
                  cybersecurity terbesar tahun ini. Daftarkan diri sekarang dan pastikan tempatmu
                  aman.
                </motion.p>
              </div>

              {/* Right side - Event details */}
              <div className="flex flex-col items-start mt-3 gap-2 md:gap-6 lg:gap-4 lg:ml-8 lg:self-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4"
                >
                  <div className="relative w-6 h-6 md:w-8 md:h-8">
                    <Image
                      src="/assets/hackpoint/cyberfest_page_location_mobile.png"
                      alt="Location"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p
                    className="text-white font-bold text-sm md:text-base"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontVariationSettings: '"opsz" 14',
                      fontWeight: 700,
                    }}
                  >
                    Universitas Indonesia, Depok
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-2 sm:gap-3 md:gap-4"
                >
                  <div className="relative w-6 h-6 md:w-8 md:h-8">
                    <Image
                      src="/assets/hackpoint/cyberfest_page_date_mobile.png"
                      alt="Calendar"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p
                    className="text-white font-bold text-sm md:text-base"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontVariationSettings: '"opsz" 14',
                      fontWeight: 700,
                    }}
                  >
                    21 Desember 2025
                  </p>
                </motion.div>
              </div>
            </div>

            {/* CTA Button with participant info */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-3 md:gap-0 mt-4 md:mt-8">
              {/* Left side - Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="self-stretch md:self-auto w-full md:w-auto"
              >
                <button
                  className="bg-white text-red-600 px-4 py-2 sm:px-6 md:px-8 md:py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200 shadow-lg text-xs sm:text-sm md:text-base w-full md:w-auto"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontVariationSettings: '"opsz" 14',
                    fontWeight: 700,
                  }}
                >
                  Daftar Sekarang
                </button>
              </motion.div>

              {/* Right side - Participant info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-1 sm:gap-2 md:gap-3 text-white font-bold text-left"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)',
                  fontVariationSettings: '"opsz" 14',
                  fontWeight: 700,
                }}
              >
                <div className="relative w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                  <Image
                    src="/assets/hackpoint/cyberfest_page_mini_icon.png"
                    alt="Participants"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base">
                  3000+ peserta dari kampus, komunitas, dan industri teknologi
                </span>
              </motion.div>
            </div>

            {/* Card with image positioned at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-8 md:left-8 md:right-8 h-28 sm:h-40 md:h-72 lg:h-100 rounded-lg sm:rounded-xl overflow-hidden shadow-2xl"
              style={{
                transform: 'rotateX(15deg) rotateY(-20deg) rotateZ(5deg) skewY(-8deg)',
                transformOrigin: 'center center',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/assets/hackpoint/card_background_3.png"
                  alt="Background card"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: 'center 60%',
                  }}
                />
                {/* Black gradient overlay from bottom to top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
