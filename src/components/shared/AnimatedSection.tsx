'use client'

import { motion, Variant, Transition } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  initial?: Variant
  animate?: Variant
  whileInView?: Variant
  transition?: Transition
  viewport?: {
    once?: boolean
    amount?: number | 'some' | 'all'
  }
  animationType?: 'default' | 'slideInLeft' | 'slideInRight' | 'fadeIn'
}

const defaultAnimation: {
  initial: Variant
  whileInView: Variant
  transition: Transition
  viewport: AnimatedSectionProps['viewport']
} = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

const slideInLeft: {
  initial: Variant
  whileInView: Variant
  transition: Transition
  viewport: AnimatedSectionProps['viewport']
} = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}

const slideInRight: {
  initial: Variant
  whileInView: Variant
  transition: Transition
  viewport: AnimatedSectionProps['viewport']
} = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
}

const fadeIn: {
  initial: Variant
  whileInView: Variant
  transition: Transition
  viewport: AnimatedSectionProps['viewport']
} = {
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
      initial={finalProps.initial as any}
      animate={finalProps.animate as any}
      whileInView={finalProps.whileInView as any}
      transition={finalProps.transition}
      viewport={finalProps.viewport}
    >
      {children}
    </motion.div>
  )
}

// Export animation presets for direct use
export { defaultAnimation, slideInLeft, slideInRight, fadeIn }
