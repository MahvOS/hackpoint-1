'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import InfiniteHorizontalSlider from '@/components/InfiniteHorizontalSlider'
import SectionWrapper, { SectionHeader } from '@/components/shared/SectionWrapper'
import { DESIGN_TOKENS } from '@/constants/design'

interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  avatar: string
  avatarSize?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'setianing',
    quote: '"Materinya dibawain dengan cara yang gampang dipahami. Cocok banget buat pemula."',
    name: 'Setianing Budi',
    role: 'Peserta Webinar',
    avatar: '/assets/hackpoint/testimonial_section_setianing.png',
  },
  {
    id: 'rizqi',
    quote:
      '"Bootcamp HackPoint bener-bener beda. Gak cuma teori, tapi langsung praktek sampai bisa ngerasain simulasi pentest beneran."',
    name: 'Rizqi Kurniawan',
    role: 'Mahasiswa IT',
    avatar: '/assets/hackpoint/testimonial_section_rizky.png',
  },
  {
    id: 'doni',
    quote:
      '"Dari HackPoint, gue dapat pengalaman plus jaringan. Sekarang malah dapat kesempatan magang di bidang cybersecurity."',
    name: 'Doni Azizi',
    role: 'Fresh Graduate',
    avatar: '/assets/hackpoint/testimonial_section_doni.png',
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <>
    {/* Glass Background */}
    <div
      className="absolute inset-0 rounded-[50px]"
      style={{
        backdropFilter: 'blur(42.118px)',
        backgroundColor: 'rgba(255,255,255,0.1)',
        border: '1.994px solid rgba(255,255,255,1)',
      }}
    />

    {/* Content Container */}
    <div
      className="absolute flex flex-col gap-[15.95px] items-start justify-center left-1/2 top-[158px] rounded-[30px] w-[423.676px]"
      style={{ transform: 'translateX(-50%)' }}
    >
      <div className="flex flex-col gap-[25px] items-start relative rounded-[29.907px] w-[423.676px]">
        {/* Quote */}
        <p
          className="text-white leading-normal min-w-full"
          style={{
            fontFamily: 'SF Pro, sans-serif',
            fontWeight: 590,
            fontVariationSettings: "'wdth' 100",
            fontSize: '18px',
            textShadow: 'rgba(0,0,0,0.25) 0px 4px 10px',
          }}
        >
          {testimonial.quote}
        </p>

        {/* Author Info */}
        <div
          className="flex flex-col items-start leading-normal opacity-80 text-white w-[182.43px]"
          style={{ color: 'white' }}
        >
          {testimonial.id === 'rizqi' ? (
            // Special handling for Rizqi's multi-line name
            <div
              className="font-bold h-[28px] w-[180px]"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontVariationSettings: "'opsz' 14",
                fontSize: '20px',
              }}
            >
              <p className="mb-0">{testimonial.name}</p>
              <p>&nbsp;</p>
            </div>
          ) : (
            <p
              className="font-bold h-[28px] leading-normal mb-0"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontVariationSettings: "'opsz' 14",
                fontSize: '20px',
              }}
            >
              {testimonial.name}
            </p>
          )}
          <p
            className="font-normal h-[24px] leading-normal mt-0"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontVariationSettings: "'opsz' 14",
              fontSize: '16px',
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>

    {/* Avatar */}
    <div className="absolute border border-solid border-white flex gap-[10px] items-center justify-center left-[52px] rounded-[30px] w-[100px] h-[100px] top-[35px]">
      <div className="relative rounded-[12.15px] w-[81px] h-[81px]">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none rounded-[12.15px]"
        />
      </div>
    </div>
  </>
)

export default function TestimonialSection() {
  // Convert testimonials to slider items - memoized for performance
  const sliderItems = useMemo(
    () =>
      TESTIMONIALS.map(testimonial => ({
        id: testimonial.id,
        content: <TestimonialCard testimonial={testimonial} />,
      })),
    []
  )

  const handleItemClick = () => {
    // Handle testimonial click - could expand, show more details, etc.
  }

  return (
    <SectionWrapper
      id="testimonial"
      bgColor="#1A1A1A"
      py="py-12 pt-32 sm:pt-24 sm:py-16 md:pt-24 md:py-20"
      px="px-4 sm:px-6 md:px-[70px]"
      className="overflow-hidden"
    >
      <div className="mb-12 sm:mb-16 md:mb-20">
        {/* Mobile: Simple Design Element */}
        <div className="block md:hidden mb-4">
          <div className="relative w-[200px] h-[60px] mx-auto flex items-center justify-center space-x-3">
            {/* Icon */}
            <img
              src="/assets/hackpoint/mobile_icon_mini.png"
              alt="Testimonial"
              className="w-[35px] h-[35px] object-contain"
            />
            {/* Text */}
            <h3 className="text-white font-bold text-[16px] uppercase tracking-wider">
              Testimonial
            </h3>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          {/* Mobile: New headline text */}
          <div className="block md:hidden text-center mb-4">
            <h2 className="text-[28px] font-bold text-white leading-[100%] mb-2">
              What Do They Say About Us?
            </h2>
          </div>

          {/* Desktop: Original SectionHeader */}
          <div className="hidden md:block">
            <SectionHeader
              title="Testimonial"
              subtitle="Apa kata mereka tentang kita?"
              titleColor="text-white"
              subtitleColor="text-white/80"
              titleSize="text-3xl sm:text-4xl md:text-5xl lg:text-[75px]"
              subtitleSize="text-lg sm:text-xl md:text-[20px]"
              mb="mb-4"
            />
          </div>
        </div>
      </div>

      {/* Mobile: Testimonial Cards */}
      <div className="block md:hidden mb-8">
        <div className="space-y-4">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={handleItemClick}
              className="w-full h-auto bg-white/10 backdrop-blur-[42.118px] border-2 border-white rounded-[25px] p-4 cursor-pointer hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-[60px] h-[60px] rounded-[15px] mb-4 overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Quote */}
                <p
                  className="text-white text-sm leading-relaxed mb-4"
                  style={{
                    fontFamily: 'SF Pro, sans-serif',
                    fontWeight: 590,
                    textShadow: 'rgba(0,0,0,0.25) 0px 2px 6px',
                  }}
                >
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="text-white">
                  <p
                    className="font-bold text-base mb-1"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-sm opacity-80"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: Infinite Horizontal Slider - Matching Figma Design */}
      <div className="hidden md:block mb-8 sm:mb-10 md:mb-12">
        <InfiniteHorizontalSlider
          items={sliderItems}
          autoSlideInterval={DESIGN_TOKENS.animation.interval.slider}
          showDots={true}
          onItemClick={handleItemClick}
          className="mb-8 sm:mb-10 md:mb-12"
          itemWidth={518} // Exact Figma width
          itemHeight={366} // Exact Figma height
          gap={24} // Gap between cards
          borderRadius="50px" // Exact Figma border radius
          backdropBlur="42.118px" // Exact Figma backdrop blur
          border="1.994px solid white" // Exact Figma border
          containerHeight="400px" // Container height with spacing
        />
      </div>

      {/* Decorative texture bridging to sponsorship section */}
      <div className="absolute right-0 top-1/2 -translate-y-1/5 translate-x-1/4 z-0 hidden lg:block">
        <motion.img
          src="/assets/hackpoint/red_element.png"
          alt="Decorative texture"
          className="w-auto h-[800px] object-contain opacity-60"
          initial={{ opacity: 0, x: 50, rotate: -15 }}
          whileInView={{ opacity: 0.6, x: 0, rotate: -15 }}
          transition={{
            duration: DESIGN_TOKENS.animation.duration.slow,
            delay: 0.3,
          }}
        />
      </div>
    </SectionWrapper>
  )
}
