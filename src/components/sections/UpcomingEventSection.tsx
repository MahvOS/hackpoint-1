'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function UpcomingEventSection() {
  return (
    <section
      id="upcoming-event"
      className="relative py-20 pt-32 px-4 md:px-[70px] md:pt-24 overflow-hidden min-h-[800px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/hackpoint/upcomingevent_section_background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Mobile: Simple Design Element */}
        <div className="block md:hidden mb-8">
          <div className="relative w-[200px] h-[60px] mx-auto flex items-center justify-center space-x-3">
            {/* Icon */}
            <img
              src="/assets/hackpoint/mobile_icon_mini.png"
              alt="Our Program"
              className="w-[35px] h-[35px] object-contain"
            />
            {/* Text */}
            <h3 className="text-white font-bold text-[16px] uppercase tracking-wider">
              Our Program
            </h3>
          </div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Mobile: New headline text */}
          <h2 className="block md:hidden text-4xl font-bold text-white mb-6 leading-[100%] capitalize">
            Upcoming Event
          </h2>

          {/* Desktop: Original headline text */}
          <h2 className="hidden md:block text-4xl md:text-5xl lg:text-[75px] font-bold text-white mb-6 leading-[100%] capitalize">
            Upcoming Event
          </h2>
        </motion.div>

        {/* Event Cards */}
        <div className="flex flex-col gap-[49px]">
          {/* Main Event Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full backdrop-blur-[42.25px] border border-white/20 rounded-[25px] px-[30px] py-[25px] text-center hover:border-white/60 hover:backdrop-blur-[60px] transition-all duration-300 cursor-pointer group"
          >
            <div className="max-w-[850px] pt-[15px] mx-auto">
              {/* Event Title */}
              <h3
                className="font-semibold text-[20px] text-white leading-normal mx-1 mb-4"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  textShadow: 'rgba(0,0,0,0.25) 0px 4px 7.1px',
                }}
              >
                <span>Cyber Fest 2025 </span>
                <span className="font-normal">(Mini Teaser)</span>
                <br />
              </h3>

              <p
                className="text-[16px] text-white/90 leading-normal w-full"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <span className="font-bold">Cyber Fest 2025</span> akan hadir untuk jadi{' '}
                <span className="font-bold">
                  salah satu ajang terbesar di Indonesia dalam bidang Cybersecurity.
                </span>
              </p>

              {/* CTA Button */}
              <div className="flex justify-center pt-[26px] pb-[15px]">
                <button className="bg-gradient-to-r from-[#D33533] to-[#6D1B1A] text-white font-bold text-[14px] px-[25px] py-[12px] rounded-[60px] w-[180px] hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </motion.div>

          {/* Event Details - Two Cards */}
          <div className="flex flex-col md:flex-row gap-[49px] w-full">
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="backdrop-blur-[42.25px] border border-white/20 rounded-[25px] px-[30px] py-[20px] flex-1 hover:border-white/60 hover:backdrop-blur-[60px] transition-all duration-300 cursor-pointer group text-center"
            >
              <div className="space-y-[20px]">
                <div className="text-center">
                  <h4 className="font-bold text-[18px] mb-3 bg-clip-text text-white">
                    Lokasi Acara
                  </h4>
                  <div className="w-full h-0.5 bg-white/20 mb-3" />
                </div>

                <div className="flex items-center justify-center gap-[1px]">
                  <div className="w-[30px] h-[30px] flex items-center justify-center">
                    <img
                      src="/assets/hackpoint/upcomingevent_section_location.png"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[16px] text-white font-medium">
                    | Jakarta, Universitas Indonesia
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Date Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="backdrop-blur-[42.25px] border border-white/20 rounded-[25px] px-[30px] py-[20px] flex-1 hover:border-white/60 hover:backdrop-blur-[60px] transition-all duration-300 cursor-pointer group text-center"
            >
              <div className="space-y-[20px]">
                <div className="text-center">
                  <h4 className="font-bold text-[18px] mb-3 bg-clip-text text-white">
                    Tanggal Acara
                  </h4>
                  <div className="w-full h-0.5 bg-white/20 mb-3" />
                </div>

                <div className="flex items-center justify-center gap-[1px]">
                  <div className="w-[30px] h-[30px] flex items-center justify-center">
                    <img
                      src="/assets/hackpoint/upcomingevent_section_date.png"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-[16px] text-white font-medium">| Minggu, 21 Desember 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile: Important Note - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="block md:hidden text-left mt-8"
        >
          <div className="space-y-[23px]">
            <p
              className="font-bold text-[15px] text-white mb-0 whitespace-pre-wrap"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              *Catatan Penting!{' '}
            </p>
            <p
              className="text-[13px] text-white/80 leading-normal"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Waktu & lokasi belum fix, jadi tunggu pengumumannya dan{' '}
              <span className="font-bold text-white">catat tanggal mainnya!</span>
            </p>
          </div>
        </motion.div>

        {/* Desktop: Important Note - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:block text-left mt-8"
        >
          <div className="space-y-[23px]">
            <p
              className="font-bold text-[25px] text-white mb-0 whitespace-pre-wrap"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              *Catatan Penting!{' '}
            </p>
            <p
              className="text-[23px] text-white/80 leading-normal"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Waktu & lokasi belum fix, jadi tunggu pengumumannya dan{' '}
              <span className="font-bold text-white">catat tanggal mainnya!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
