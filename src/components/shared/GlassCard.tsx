'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { DESIGN_TOKENS } from '@/constants/design'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  blur?: 'light' | 'medium' | 'heavy'
  hover?: boolean
  onClick?: () => void
  onMouseMove?: (e: React.MouseEvent<any>) => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  style?: React.CSSProperties
  as?: React.ElementType
}

export default function GlassCard({
  children,
  className,
  blur = 'medium',
  hover = true,
  onClick,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  style,
  as: Component = 'div',
}: GlassCardProps) {
  const MotionComponent = motion[Component as keyof typeof motion] as any

  return (
    <MotionComponent
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        DESIGN_TOKENS.layout.borderRadius.card,
        DESIGN_TOKENS.glass.blur[blur],
        hover && DESIGN_TOKENS.glass.hover,
        className
      )}
      style={{
        backgroundColor: DESIGN_TOKENS.glass.background,
        border: `1px solid ${DESIGN_TOKENS.colors.border.light}`,
        ...style,
      }}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: DESIGN_TOKENS.animation.duration.normal }}
    >
      {children}
    </MotionComponent>
  )
}