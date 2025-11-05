'use client'

import { motion } from 'framer-motion'

export default function RatingSection() {
  return (
    <section className="block md:hidden relative py-12 px-4" style={{ backgroundColor: '#1A1A1A' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(star => (
              <div key={star} className="relative w-8 h-8">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-red-500"
                >
                  <path
                    d="M16 2.66667L20.1333 11.4667L29.3333 12.8L22.6667 19.2L24.2667 28.3333L16 23.8667L7.73333 28.3333L9.33333 19.2L2.66667 12.8L11.8667 11.4667L16 2.66667Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>

          <div className="flex items-baseline">
            <span
              className="font-semibold text-white text-[16px]"
              style={{
                fontFamily: 'SF Pro, sans-serif',
                fontVariationSettings: "'wdth' 100",
                fontWeight: 590,
              }}
            >
              4.9
            </span>
            <span
              className="text-[rgba(255,255,255,0.7)] text-[11px] ml-1"
              style={{
                fontFamily: 'SF Pro, sans-serif',
                fontVariationSettings: "'wdth' 100",
                fontWeight: 510,
              }}
            >
              /5.0
            </span>
          </div>
        </div>

        <p
          className="text-[rgba(255,255,255,0.8)] text-center text-[12px] capitalize"
          style={{
            fontFamily: 'SF Pro, sans-serif',
            fontVariationSettings: "'wdth' 100",
            fontWeight: 400,
          }}
        >
          From Our Client And Company
        </p>
      </motion.div>
    </section>
  )
}
