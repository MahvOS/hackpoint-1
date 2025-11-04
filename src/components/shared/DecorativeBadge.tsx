'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface DecorativeBadgeProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animate?: boolean
}

export default function DecorativeBadge({
  size = 'md',
  className = '',
  animate = true,
}: DecorativeBadgeProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-64 h-20',
  }

  return (
    <motion.div
      className={`
        relative ${sizeClasses[size]} ${className}
        ${animate ? 'animate-float' : ''}
      `}
      initial={animate ? { opacity: 0, scale: 0 } : {}}
      animate={
        animate
          ? {
              opacity: 1,
              scale: 1,
              rotate: [0, 5, -5, 0],
            }
          : {}
      }
      transition={
        animate
          ? {
              duration: 0.8,
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }
          : {}
      }
    >
      <div className="relative w-50 h-18">
        {/* Main badge image */}
        <Image
          src="/assets/hackpoint/decorative-badge.svg"
          alt="Decorative badge"
          fill
          className="object-contain"
        />

        {/* Optional glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/20 to-transparent blur-xl" />
      </div>
    </motion.div>
  )
}
