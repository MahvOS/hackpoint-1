'use client'

import { motion } from 'framer-motion'

const programs = [
  {
    title: "Bootcamp - Intensif",
    description: "Belajar selama beberapa hari dengan materi padat, lab langsung, dan CTF."
  },
  {
    title: "Online - Course",
    description: "Materi fleksibel yang bisa diakses kapan saja, lengkap dengan latihan praktis."
  },
  {
    title: "Seminar & Webinar",
    description: "Sesi berbagi ilmu dari praktisi cybersecurity global dan lokal."
  },
  {
    title: "Cyber-Fest",
    description: "Event tahunan terbesar HackPoint yang menggabungkan kompetisi, talkshow, dan networking."
  }
]

export default function ProgramsSection() {
  return (
    <section className="relative bg-[#1A1A1A] py-12 px-4 md:px-[70px] overflow-hidden">
      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 items-center">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-white leading-none text-center md:text-left"
            style={{
              fontSize: '56px',
              fontFamily: 'SF Pro, sans-serif',
              fontVariationSettings: '"wdth" 100',
              fontWeight: 'bold'
            }}
          >
            Program Kami
          </motion.h2>

          {/* Decorative Line */}
          <div className="flex-1 ml-0 md:ml-12">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-red-500 to-red-500 md:block hidden"></div>
          </div>
        </div>

        {/* Programs List */}
        <div className="flex flex-col gap-8 items-center">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full relative"
            >
              {/* Gradient Red Line Separator */}
              {index > 0 && (
                <div className="absolute -top-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent shadow-lg shadow-red-500/20"></div>
              )}

              <div className="flex flex-col py-6 px-8 md:px-16 md:flex-row md:text-left text-left">
                {/* Arrow Icon and Program Title */}
                <div className="flex items-center gap-6 mb-6 md:mb-0 md:flex-1">
                  <div className="relative w-[60px] h-[60px] flex-shrink-0">
                    <img
                      src="/assets/hackpoint/arrow_card.svg"
                      alt={`${program.title} arrow`}
                      className="w-full h-full"
                    />
                  </div>
                  <h3
                    className="font-medium text-white text-left"
                    style={{
                      fontSize: '32px',
                      fontFamily: 'SF Pro, sans-serif',
                      fontVariationSettings: '"wdth" 100',
                      fontWeight: 510
                    }}
                  >
                    {program.title === "Bootcamp - Intensif" ? (
                      <>
                        Bootcamp -<br />Intensif
                      </>
                    ) : program.title === "Online - Course" ? (
                      <>
                        Online -<br />Course
                      </>
                    ) : program.title === "Seminar & Webinar" ? (
                      <>
                        Seminar &<br />Webinar
                      </>
                    ) : program.title === "Cyber-Fest" ? (
                      <>
                        Cyber -<br />Fest
                      </>
                    ) : (
                      program.title
                    )}
                  </h3>
                </div>

                {/* Program Description */}
                <div className="flex-1 text-left">
                  <p
                    className="text-white/80"
                    style={{
                      fontSize: '18px',
                      fontFamily: 'SF Pro, sans-serif',
                      fontVariationSettings: '"wdth" 100',
                      fontWeight: 'normal'
                    }}
                  >
                    {program.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}