'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef, useMemo } from 'react'
import GlassCard from '@/components/shared/GlassCard'

interface SliderItem {
  id: string
  content: React.ReactNode
}

interface InfiniteHorizontalSliderProps {
  items: SliderItem[]
  autoSlideInterval?: number
  className?: string
  showDots?: boolean
  onItemClick?: (index: number) => void
  // Dynamic sizing props
  itemWidth?: number
  itemHeight?: number
  gap?: number
  // Dynamic styling props
  borderRadius?: string
  backdropBlur?: string
  border?: string
  // Dynamic container props
  containerHeight?: string
}

export default function InfiniteHorizontalSlider({
  items,
  autoSlideInterval = 4000,
  className = '',
  showDots = true,
  onItemClick,
  itemWidth = 518,
  itemHeight = 366,
  gap = 30,
  borderRadius = '50px',
  containerHeight = '400px',
}: InfiniteHorizontalSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [autoSlideInterval, items.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    if (onItemClick) {
      onItemClick(index)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
    if (hoveredCard !== cardId) {
      setHoveredCard(cardId)
    }
  }

  const handleMouseEnter = (cardId: string) => {
    setHoveredCard(cardId)
  }

  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    // Add a small delay before clearing hover state
    timeoutRef.current = setTimeout(() => {
      setHoveredCard(null)
    }, 150)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Create infinite items array for seamless loop
  // Memoize the infinite items array - expensive calculation
  const infiniteItems = useMemo(() => {
    // Return items repeated 6 times for smooth infinite effect
    return [...items, ...items, ...items, ...items, ...items, ...items]
  }, [items])
  const centerIndex = items.length * 2 + currentIndex // Center position in the infinite array
  const totalItemWidth = itemWidth + gap // Calculate total width including gap

  return (
    <div className={`relative ${className}`}>
      {/* Slider Viewport */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: containerHeight }}
      >
        {/* Infinite flowing items */}
        <motion.div
          className="flex"
          style={{ gap: `${gap}px` }}
          animate={{
            x: `${-centerIndex * totalItemWidth + totalItemWidth / 2}px`,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.8,
          }}
        >
          {infiniteItems.map((item, index) => {
            const isActive = index === centerIndex
            const cardId = `${item.id}-${index}`
            const isHovered = hoveredCard === cardId

            return (
              <motion.div
                key={cardId}
                className="relative"
                onClick={() => goToSlide(index % items.length)}
              >
                <GlassCard
                  className={`w-full flex-shrink-0 cursor-pointer overflow-hidden ${
                    isActive ? 'ring-2 ring-blue-500/50' : ''
                  }`}
                  blur="medium"
                  hover={false}
                  as="div"
                  onMouseMove={e => handleMouseMove(e, cardId)}
                  onMouseEnter={() => handleMouseEnter(cardId)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    width: `${itemWidth}px`,
                    height: `${itemHeight}px`,
                    borderRadius: borderRadius,
                  }}
                >
                  {/* Noise texture overlay */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                      backgroundSize: '200px 200px',
                      mixBlendMode: 'overlay',
                      borderRadius: borderRadius,
                    }}
                  />

                  {/* Pointer-following glossy effect */}
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      width: '900px',
                      height: '900px',
                      borderRadius: '50%',
                      background:
                        'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 70%)',
                      left: mousePosition.x - 450,
                      top: mousePosition.y - 450,
                      display: isHovered ? 'block' : 'none',
                    }}
                    animate={{
                      opacity: isHovered ? [0, 1] : [1, 0],
                      scale: isHovered ? [0.8, 1] : [1, 0.8],
                    }}
                    transition={{
                      duration: isHovered ? 0.2 : 0.3,
                      ease: 'easeOut',
                    }}
                  />

                  {/* Subtle overall glow on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
                      borderRadius: borderRadius,
                    }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card content */}
                  <div className="relative z-10 h-full">{item.content}</div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Pagination Dots */}
      {showDots && items.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-blue-500'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  )
}
