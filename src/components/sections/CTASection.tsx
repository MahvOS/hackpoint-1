'use client'

import { motion } from 'framer-motion'
import { DESIGN_TOKENS } from '@/constants/design'

const stats = [
  {
    number: '500+',
    label: 'Peserta Terdaftar',
    description: 'Dari berbagai universitas dan perusahaan',
  },
  {
    number: '50+',
    label: 'Expert Mentor',
    description: 'Profesional dari industri cybersecurity',
  },
  {
    number: '95%',
    label: 'Tingkat Kepuasan',
    description: 'Peserta merasa puas dengan program',
  },
  {
    number: '80%',
    label: 'Karir Berhasil',
    description: 'Alumni mendapat pekerjaan di bidang cybersecurity',
  },
]

export default function CTASection() {
  return (
    <section className="relative py-20 px-4 md:px-[70px] bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/assets/hackpoint/grid-pattern.png')] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="font-bold text-white mb-2"
                style={{
                  fontSize: '48px',
                  fontFamily: 'SF Pro, sans-serif',
                  fontVariationSettings: '"wdth" 100',
                  fontWeight: 'bold',
                  textShadow: '0 0 30px rgba(255,255,255,0.3)',
                }}
              >
                {stat.number}
              </div>
              <h3
                className="font-semibold text-white mb-2"
                style={{
                  fontSize: '18px',
                  fontFamily: 'SF Pro, sans-serif',
                  fontWeight: 'semibold',
                }}
              >
                {stat.label}
              </h3>
              <p
                className="text-white/60 text-sm"
                style={{
                  fontFamily: 'SF Pro, sans-serif',
                  fontWeight: 'medium',
                }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 backdrop-blur-xl rounded-[40px] p-16 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[40px]"></div>

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-bold text-white mb-6"
                style={{
                  fontSize: '56px',
                  fontFamily: 'SF Pro, sans-serif',
                  fontVariationSettings: '"wdth" 100',
                  fontWeight: 'bold',
                  textShadow: '0 0 50px rgba(255,255,255,0.5)',
                }}
              >
                Siap Memulai Karir
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Cybersecurity Anda?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white/80 text-xl mb-12 max-w-3xl mx-auto"
                style={{
                  fontFamily: 'SF Pro, sans-serif',
                  fontVariationSettings: '"wdth" 100',
                  fontWeight: 'medium',
                  lineHeight: '1.6',
                }}
              >
                Bergabunglah dengan ratusan peserta lainnya dan dapatkan akses ke materi
                pembelajaran terbaik, mentorship dari para ahli, dan komunitas cybersecurity yang
                supportif.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl text-lg"
                  style={{
                    fontFamily: 'SF Pro, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  Daftar Sekarang
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg"
                  style={{
                    fontFamily: 'SF Pro, sans-serif',
                    fontWeight: 'bold',
                  }}
                >
                  Download Kurikulum
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-white/60 mt-8"
                style={{
                  fontFamily: 'SF Pro, sans-serif',
                  fontSize: '14px',
                  fontWeight: 'medium',
                }}
              >
                No credit card required • Free consultation available
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-white font-medium">info@hackpoint.id</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="text-white font-medium">+62 812-3456-7890</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
