'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Variant, Transition } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  initial?: Variant
  animate?: Variant
  whileInView?: Variant
  transition?: Transition
  viewport?: any
  animationType?: 'default' | 'slideInLeft' | 'slideInRight' | 'fadeIn'
}

const defaultAnimation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export default function AnimatedSection({
  children,
  className = '',
  animationType = 'default',
  ...customProps
}: AnimatedSectionProps) {
  const animation = {
    default: defaultAnimation,
    slideInLeft,
    slideInRight,
    fadeIn,
  }[animationType]

  const finalProps = { ...animation, ...customProps }

  return (
    <motion.div
      className={className}
      initial={finalProps.initial}
      whileInView={finalProps.whileInView}
      transition={finalProps.transition}
      viewport={finalProps.viewport}
    >
      {children}
    </motion.div>
  )
}

// Export animation presets for direct use
export { defaultAnimation, slideInLeft, slideInRight, fadeIn }
