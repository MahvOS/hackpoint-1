'use client'

import { motion } from 'framer-motion'
import { DESIGN_TOKENS } from '@/constants/design'

interface DecorativeArrowsProps {
  showLeft?: boolean
  showRight?: boolean
  position?: 'top' | 'bottom'
}

export default function DecorativeArrows({
  showLeft = true,
  showRight = true,
  position = 'top',
}: DecorativeArrowsProps) {
  const positionClass = position === 'top' ? 'top-0' : 'bottom-0'
  const leftRotation = position === 'top' ? 'rotate-[170deg]' : 'rotate-[18deg]'
  const rightRotation =
    position === 'top' ? 'rotate-[198deg] scale-y-[-1]' : 'rotate-[162deg] scale-y-[-1]'
  const animationDelay = position === 'top' ? 0.3 : 0.7

  return (
    <>
      {/* Left Arrow */}
      {showLeft && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`absolute ${positionClass} left-0 z-10 hidden md:block`}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className={`relative ${leftRotation} transform`}
          >
            <div className="relative">
              {/* Rotating Text Circle */}
              <div className="absolute inset-0 w-full h-full">
                <svg
                  className={`${DESIGN_TOKENS.layout.arrowContainer} animate-spin w-[100px] h-[100px] md:w-full md:h-full`}
                  viewBox="0 0 140 140"
                  style={{ animationDuration: `${DESIGN_TOKENS.animation.interval.rotation}ms` }}
                >
                  <defs>
                    <path
                      id={`${position}-left-circle-text`}
                      d="M 70, 70 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                    />
                  </defs>
                  <text className="text-[8px] md:text-[16px] fill-white font-semibold capitalize tracking-wider">
                    <textPath href={`#${position}-left-circle-text`} startOffset="0%">
                      ScrollDownScrollDownScrollDownScrollDownScrollDownScrollDownScrollDown
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Arrow Container */}
              <div
                className={`${DESIGN_TOKENS.layout.borderRadius.button} p-[20px] md:p-[30px] flex items-center justify-center shadow-lg`}
                style={{ backgroundColor: DESIGN_TOKENS.colors.primary }}
              >
                <div className={position === 'bottom' ? 'rotate-180 rotate-12' : 'rotate-0'}>
                  <svg
                    className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Right Arrow */}
      {showRight && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: animationDelay }}
          className={`absolute ${positionClass} right-0 z-10 hidden md:block`}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className={`relative ${rightRotation} transform`}
          >
            <div className="relative">
              {/* Rotating Text Circle */}
              <div className="absolute inset-0 w-full h-full">
                <svg
                  className={`${DESIGN_TOKENS.layout.arrowContainer} animate-spin w-[100px] h-[100px] md:w-full md:h-full`}
                  viewBox="0 0 140 140"
                  style={{ animationDuration: `${DESIGN_TOKENS.animation.interval.rotation}ms` }}
                >
                  <defs>
                    <path
                      id={`${position}-right-circle-text`}
                      d="M 70, 70 m -55, 0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                    />
                  </defs>
                  <text className="text-[8px] md:text-[16px] fill-white font-semibold capitalize tracking-wider">
                    <textPath href={`#${position}-right-circle-text`} startOffset="0%">
                      ScrollDownScrollDownScrollDownScrollDownScrollDownScrollDownScrollDown
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Arrow Container */}
              <div
                className={`${DESIGN_TOKENS.layout.borderRadius.button} p-[20px] md:p-[30px] flex items-center justify-center shadow-lg`}
                style={{ backgroundColor: DESIGN_TOKENS.colors.primary }}
              >
                <div className={position === 'bottom' ? 'rotate-0' : 'rotate-180'}>
                  <svg
                    className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
