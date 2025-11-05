'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function SpeakersSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  const speakers = [
    {
      id: 1,
      title: 'Nokia Networker',
      name: 'Foryanto Jaya Wiguna',
      speakerImage: '/assets/hackpoint/speaker-foryanto-jaya.png',
      decorativeElement: '/assets/hackpoint/red_shape_speakers.png',
      decorativeElement2: '/assets/hackpoint/red_shape_speakers.png',
    },
    {
      id: 2,
      title: 'Founder of Ethical Hacker Indonesia',
      name: 'Teguh Aprianto',
      speakerImage: '/assets/hackpoint/speaker-teguh-aprianto.png',
      decorativeElement: '/assets/hackpoint/red_shape_speakers.png',
      decorativeElement2: '/assets/hackpoint/red_shape_speakers.png',
    },
    {
      id: 3,
      title: 'Nokia Networker',
      name: 'YoKo kho',
      speakerImage: '/assets/hackpoint/speaker-foryanto-jaya.png',
      decorativeElement: '/assets/hackpoint/red_shape_speakers.png',
      decorativeElement2: '/assets/hackpoint/red_shape_speakers.png',
    },
    {
      id: 4,
      title: 'Nokia Networker',
      name: 'Foryanto Jaya Wiguna',
      speakerImage: '/assets/hackpoint/speaker-teguh-aprianto.png',
      decorativeElement: '/assets/hackpoint/red_shape_speakers.png',
      decorativeElement2: '/assets/hackpoint/red_shape_speakers.png',
    },
    {
      id: 5,
      title: 'Nokia Networker',
      name: 'Foryanto Jaya Wiguna',
      speakerImage: '/assets/hackpoint/speaker-foryanto-jaya.png',
      decorativeElement: '/assets/hackpoint/red_shape_speakers.png',
      decorativeElement2: '/assets/hackpoint/red_shape_speakers.png',
    },
  ]

  // Duplicate speakers array for continuous scrolling
  const duplicatedSpeakers = [...speakers, ...speakers]

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer || isPaused) return

    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed

        // Reset to start when reaching the end of original speakers
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }

        scrollContainer.scrollLeft = scrollPosition
      }
    }

    const animationFrame = requestAnimationFrame(function animate() {
      scroll()
      requestAnimationFrame(animate)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused, duplicatedSpeakers.length])

  const SpeakerCard = ({ speaker }: { speaker: (typeof speakers)[0] }) => {
    const maskStyle = {
      maskImage: 'url(/assets/hackpoint/speaker-mask.png)',
      maskPosition: '-16px 0',
      maskRepeat: 'no-repeat' as const,
      maskSize: '342px 369px',
      WebkitMaskImage: 'url(/assets/hackpoint/speaker-mask.png)',
      WebkitMaskPosition: '-16px 0',
      WebkitMaskRepeat: 'no-repeat' as const,
      WebkitMaskSize: '342px 369px',
    }

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative bg-black h-[300px] sm:h-[350px] md:h-[391px] overflow-hidden rounded-[12px] sm:rounded-[16px] md:rounded-[20px] w-[280px] sm:w-[300px] md:w-[325px] flex-shrink-0 cursor-pointer"
      >
        {/* Background Image */}
        <img
          src="/assets/hackpoint/speaker-card-background.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {/* Decorative Elements */}
        <div className="absolute left-[-64px] sm:left-[-96px] md:left-[-128px] top-[-64px] sm:top-[-96px] md:top-[-128px] w-[200px] sm:w-[300px] md:w-[394px] h-[170px] sm:h-[250px] md:h-[334px] flex items-center justify-center rotate-[350deg]">
          <img src={speaker.decorativeElement} alt="" className="w-full h-full object-contain" />
        </div>

        {speaker.speakerImage && (
          <div className="absolute left-[16px] sm:left-[20px] md:left-[24px] top-[30px] sm:top-[42px] md:top-[54px] w-[240px] sm:w-[290px] md:w-[342px] h-[260px] sm:h-[315px] md:h-[369px]">
            <img
              src={speaker.speakerImage}
              alt=""
              className="w-full h-full object-cover"
              style={maskStyle}
            />
          </div>
        )}

        <div className="absolute left-[50px] sm:left-[75px] md:left-[100px] top-[85px] sm:left-[130px] md:top-[170px] w-[200px] sm:w-[300px] md:w-[394px] h-[170px] sm:h-[250px] md:h-[334px] flex items-center justify-center rotate-[350deg]">
          <img src={speaker.decorativeElement2} alt="" className="w-full h-full object-contain" />
        </div>

        {/* Text Content */}
        <div className="absolute left-[16px] sm:left-[20px] md:left-[24px] bottom-[16px] sm:bottom-[18px] md:bottom-[20px] w-[140px] sm:w-[160px] md:w-[186px] flex flex-col gap-[6px] sm:gap-[8px] capitalize">
          <p
            className="text-[12px] sm:text-[14px] md:text-[18px] font-medium text-white/80 leading-tight"
            style={{ fontWeight: 510 }}
          >
            {speaker.title}
          </p>
          <h3 className="text-[16px] sm:text-[20px] md:text-[29px] font-bold text-white leading-tight">
            {speaker.name}
          </h3>
        </div>
      </motion.div>
    )
  }

  return (
    <section
      className="relative px-4 sm:px-6 md:px-[70px] overflow-hidden min-h-screen py-8 sm:py-12 md:py-16"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      {/* Background decoration - hidden on mobile */}
      <div className="absolute top-8 right-[1410px] z-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 18.051 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center bg-red-600 p-8 rounded-full"
        >
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative w-16 h-16"
          >
            <Image
              src="/assets/hackpoint/arrow-up-icon.svg"
              alt="Arrow up"
              fill
              className="object-contain text-white"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left mb-8 sm:mb-12 md:mb-16"
      >
        <h2
          className="font-medium not-italic capitalize"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontVariationSettings: '"opsz" 14',
            fontWeight: 500,
            lineHeight: 0.8,
            background:
              'linear-gradient(91deg, rgba(255, 255, 255, 0.00) -68.13%, #FFF 15.66%, rgba(255, 255, 255, 0.00) 99.45%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <span style={{ WebkitTextFillColor: 'transparent', fontVariationSettings: '"opsz" 14' }}>
            Speaker & <br />
          </span>
          <span style={{ WebkitTextFillColor: 'transparent', fontVariationSettings: '"opsz" 14' }}>
            Partners
          </span>
        </h2>
      </motion.div>

      {/* Horizontal Scrolling Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-[20px] sm:gap-[30px] md:gap-[40px] overflow-x-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedSpeakers.map((speaker, index) => (
          <motion.div
            key={`${speaker.id}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SpeakerCard speaker={speaker} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
