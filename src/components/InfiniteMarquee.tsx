'use client'

import { motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface InfiniteMarqueeProps {
  children: ReactNode
  duration?: number
  className?: string
}

export default function InfiniteMarquee({
  children,
  duration = 40,
  className = '',
}: InfiniteMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ whiteSpace: 'nowrap' }}
    >
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: duration,
        }}
      >
        {/* First copy of the content */}
        <div className="flex">{children}</div>

        {/* Second copy of the content for seamless loop */}
        <div className="flex">{children}</div>
      </motion.div>
    </div>
  )
}
