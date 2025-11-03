'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

interface DraggableCardProps {
  children: React.ReactNode
  className?: string
  onDragEnd?: (event: any, info: any) => void
}

export default function DraggableCard({ children, className = '', onDragEnd }: DraggableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDragEnd = (event: any, info: any) => {
    // Handle drag gesture with offset and velocity for swipe gestures
    const { offset, velocity } = info

    // Call custom onDragEnd if provided
    if (onDragEnd) {
      onDragEnd(event, info)
    }

    // Always reset position to avoid layout conflicts
  }

  return (
    <motion.div
      ref={cardRef}
      drag="x"
      dragConstraints={{ left: -200, right: 200 }}
      dragElastic={0.2}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 20,
        timeConstant: 200,
        power: 0.3,
        modifyTarget: target => Math.round(target),
      }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`cursor-grab active:cursor-grabbing ${className}`}
      style={{ touchAction: 'none' }}
    >
      {children}
    </motion.div>
  )
}
