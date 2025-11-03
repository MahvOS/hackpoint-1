'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Slide {
  id: string
  content: React.ReactNode
}

interface AutoSliderWithPaginationProps {
  slides: Slide[]
  autoSlideInterval?: number
  className?: string
}

export default function AutoSliderWithPagination({
  slides,
  autoSlideInterval = 4000,
  className = '',
}: AutoSliderWithPaginationProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-slide functionality
  useEffect(() => {
    if (isHovered || slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
    }, autoSlideInterval)

    return () => clearInterval(interval)
  }, [isHovered, slides.length, autoSlideInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  const [direction, setDirection] = useState(0)

  const handleSlideChange = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    goToSlide(index)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Slider Container */}
      <div
        className="relative overflow-hidden rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              {slides[currentIndex].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {slides.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-blue-600'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
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
