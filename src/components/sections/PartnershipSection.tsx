'use client'

import { motion } from 'framer-motion'
import DecorativeArrows from '@/components/shared/DecorativeArrows'

const runningTextStyles = {
  fontFamily: 'Space Grotesk, sans-serif',
  fontWeight: 500,
  letterSpacing: '-3.98px',
  background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const RunningHeaderText = () => {
  const runningText = 'Kenapa Harus HackPoint?'
  const repeatCount = 4

  return (
    <div className="overflow-hidden relative w-full h-[80px] md:h-[130px]">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: [0, -1924] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          },
        }}
      >
        {Array.from({ length: repeatCount }).map((_, index) => (
          <div key={index} className="flex items-center">
            <span
              className="text-[60px] md:text-[100px] font-medium whitespace-nowrap"
              style={runningTextStyles}
            >
              {runningText}
            </span>
            <div
              className="w-[25px] h-[25px] md:w-[41px] md:h-[41px] rounded-full mx-[60px] md:mx-[100px] bg-white shadow-lg"
              style={{ boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)' }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const paragraphStyles = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 510,
  fontSize: 27,
  letterSpacing: '-1px',
}

const paragraphStylesDesktop = {
  fontFamily: 'SF Pro, sans-serif',
  fontVariationSettings: '"wdth" 100',
  fontWeight: 510,
  fontSize: 43,
  letterSpacing: '-1.91px',
}

const backgroundGradient = {
  background:
    'linear-gradient(to bottom, rgba(211, 53, 51, 0.05) 0%, rgba(211, 53, 51, 0.1) 30%, rgba(211, 53, 51, 0.15) 60%, rgba(211, 53, 51, 0.2) 100%)',
}

const bottomGradient = {
  background: 'linear-gradient(to top, rgba(26, 26, 26, 1) 0%, transparent 100%)',
}

const contentText = [
  {
    text: 'Karena kami bukan sekadar penyedia training, tapi partner belajar jangka panjang.',
    opacity: 0.3,
  },
  { text: 'HackPoint tumbuh bareng komunitasnya.', opacity: 1 },
  { text: 'Dari belajar bareng, mengadakan CTF kecil, hingga membangun', opacity: 0.3 },
  { text: 'event berskala nasional,', opacity: 1 },
  { text: 'semuanya lahir dari', opacity: 0.3 },
  { text: 'semangat kolaborasi.', opacity: 1 },
]

export default function PartnershipSection() {
  return (
    <section className="relative bg-[#1A1A1A] py-16 md:py-32 px-2 md:px-[5px] overflow-hidden min-h-[60vh] md:min-h-screen w-full">
      {/* Running header text at top */}
      <div className="relative z-10">
        <RunningHeaderText />
        <div className="absolute top-[90px] md:top-[140px] right-[30px] md:right-[50px] hidden md:block">
          <DecorativeArrows showLeft={false} showRight={true} position="top" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-left"
        >
          <div className="max-w-[900px] md:max-w-[1200px] mx-auto">
            <p
              className="text-[18px] md:text-[28px] leading-tight font-medium mb-6 md:mb-8"
              style={paragraphStyles}
            >
              {contentText.map((segment, index) => (
                <span
                  key={index}
                  style={{ opacity: segment.opacity, color: 'rgba(255, 255, 255, 0.8)' }}
                >
                  {segment.text}
                  {index < contentText.length - 1 ? ' ' : ''}
                </span>
              ))}
            </p>
          </div>
        </motion.div>

        {/* Animated dots decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="flex justify-center mt-12 md:mt-20"
        >
          <div className="flex space-x-6 md:space-x-8">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#d33533] rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={bottomGradient}
      />
    </section>
  )
}
