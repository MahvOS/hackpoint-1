'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import { DESIGN_TOKENS } from '@/constants/design'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  bgColor?: string
  py?: string
  px?: string
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  bgColor = 'transparent',
  py = DESIGN_TOKENS.sectionPadding.py,
  px = DESIGN_TOKENS.sectionPadding.px,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative ${py} ${px} ${className} overflow-hidden`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  titleColor?: string
  subtitleColor?: string
  mb?: string
  textAlign?: 'center' | 'left' | 'right'
  titleSize?: string
  subtitleSize?: string
}

export function SectionHeader({
  title,
  subtitle,
  titleColor = 'text-white',
  subtitleColor = 'text-gray-300',
  mb = DESIGN_TOKENS.headerMargin.default,
  textAlign = 'center',
  titleSize = DESIGN_TOKENS.typography.heading.h2,
  subtitleSize = DESIGN_TOKENS.typography.body.large,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-center ${mb} ${textAlign}`}
    >
      <h2 className={`${titleSize} font-bold ${titleColor} mb-4 md:mb-6 leading-[100%]`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${subtitleSize} ${subtitleColor} max-w-3xl mx-auto leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
