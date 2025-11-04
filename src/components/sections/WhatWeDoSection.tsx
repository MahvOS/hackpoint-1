'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'
import InfiniteHorizontalSlider from '@/components/InfiniteHorizontalSlider'
import DecorativeArrows from '@/components/shared/DecorativeArrows'

interface Activity {
  icon: string
  title: string
  description: string
}

const ACTIVITIES: Activity[] = [
  {
    icon: '/assets/hackpoint/landingpage_icon_bootcamp.png',
    title: 'Bootcamp Intensif',
    description: 'Belajar lewat praktik nyata dengan lab, simulasi, dan CTF.',
  },
  {
    icon: '/assets/hackpoint/landingpage_icon_event.png',
    title: 'Cyber Fest & Event',
    description:
      'Konferensi, workshop, dan kompetisi yang mempertemukan pelajar, profesional, dan industri.',
  },
  {
    icon: '/assets/hackpoint/landingpage_icon_komunitas.png',
    title: 'Komunitas & Networking',
    description:
      'Ruang belajar bareng, sharing, dan kolaborasi dengan sesama pecinta cybersecurity.',
  },
  {
    icon: '/assets/hackpoint/landingpage_icon_training.png',
    title: 'Training & Course',
    description: 'Materi lengkap dari fundamental sampai advance, dibimbing mentor berpengalaman.',
  },
]

// ActivityCard component for the infinite slider
const ActivityCard = ({ activity }: { activity: Activity }) => (
  <div className="relative w-full h-full flex flex-col items-start justify-start p-[24.8px] py-[35.8px]">
    {/* Icon Container */}
    <div className="w-[94.6px] h-[94.6px] mb-[27.6px] flex items-center justify-center overflow-hidden">
      <img src={activity.icon} alt={activity.title} className="w-full h-full object-contain" />
    </div>

    {/* Content */}
    <div className="space-y-[20px]">
      <h3 className="text-[31.6px] font-bold font-dm text-white leading-[0.47] capitalize">
        {activity.title}
      </h3>
      <p className="text-[14.7px] font-semibold font-dm text-white/50 leading-none">
        {activity.description}
      </p>
    </div>
  </div>
)

export default function WhatWeDoSection() {
  // Convert activities to slider items for infinite slider - memoized for performance
  const sliderItems = useMemo(
    () =>
      ACTIVITIES.map(activity => ({
        id: activity.title.toLowerCase().replace(/\s+/g, '-'),
        content: <ActivityCard activity={activity} />,
      })),
    []
  )

  const handleItemClick = () => {
    // Handle activity click - could open modal, navigate, etc.
  }

  return (
    <section id="ctf" className="relative py-20 px-4 md:px-[70px] bg-[#1A1A1A] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Mobile: Simple Design Element */}
        <div className="block md:hidden mb-8">
          <div className="relative w-[200px] h-[60px] mx-auto flex items-center justify-center space-x-3">
            {/* Icon */}
            <img
              src="/assets/hackpoint/mobile_icon_mini.png"
              alt="What we do"
              className="w-[35px] h-[35px] object-contain"
            />
            {/* Text */}
            <h3 className="text-white font-bold text-[16px] uppercase tracking-wider">
              What we do
            </h3>
          </div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Mobile: New headline text */}
          <h2 className="block md:hidden text-4xl font-bold text-white mb-4 leading-[100%]">
            Activities that we usually do.
          </h2>

          {/* Desktop: Original headline text */}
          <h2 className="hidden md:block text-4xl md:text-5xl lg:text-[65px] font-bold text-white mb-4 leading-[100%]">
            <span className="text-white/50">What We</span> Do?
          </h2>
        </motion.div>

        {/* Mobile: Vertical Cards */}
        <div className="block md:hidden mb-8">
          <div className="space-y-4">
            {ACTIVITIES.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={handleItemClick}
                className="w-full h-auto bg-white/10 backdrop-blur-[49.5px] border-2 border-white/30 rounded-[28.5px] p-6 cursor-pointer hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  {/* Icon Container */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={activity.icon}
                      alt={activity.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-dm text-white leading-[1.2] capitalize whitespace-nowrap">
                      {activity.title}
                    </h3>
                    <p className="text-sm font-medium font-dm text-white/50 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Infinite Horizontal Slider */}
        <div className="hidden md:block mb-8">
          <InfiniteHorizontalSlider
            items={sliderItems}
            autoSlideInterval={4000}
            showDots={true}
            onItemClick={handleItemClick}
            className="mb-8"
            itemWidth={610}
            itemHeight={250}
            gap={17}
            borderRadius="28.5px"
            backdropBlur="49.5px"
            border="2px solid rgba(255,255,255,0.3)"
            containerHeight="250px"
          />
        </div>

        <DecorativeArrows position="top" />
      </div>
    </section>
  )
}
