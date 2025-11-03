'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Feature {
  title: string
  description: string
}

const FEATURES: Feature[] = [
  {
    title: '100% Hands-On',
    description: 'Setiap materi langsung diterapkan di lab, bukan sekadar teori.',
  },
  {
    title: 'Mentor Profesional',
    description: 'Dibimbing Oleh Praktisi yang memang aktif di dunia cybersecurity',
  },
  {
    title: 'Path ke karier',
    description:
      'Materi dan event dirancang untuk membuka jalan Ke dunia kerja & sertifikasi internasional',
  },
]

const CheckIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const FeatureItem = ({ feature, index }: { feature: Feature; index: number }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-4 items-start"
  >
    <div className="flex-shrink-0 w-10 h-10">
      <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center">
        <CheckIcon />
      </div>
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] text-white mb-2 capitalize">
        {feature.title}
      </h3>
      <p className="text-[13px] md:text-[14px] lg:text-[15px] text-white/80 leading-relaxed">
        {feature.description}
      </p>
    </div>
  </motion.div>
)

export default function WhyHackPointSection() {
  return (
    <section
      id="why-hackpoint"
      className="relative py-20 px-4 md:px-[70px] pb-32 md:pb-20 overflow-hidden min-h-[700px] lg:min-h-[700px] w-full"
      aria-labelledby="why-hackpoint-title"
    >
      {/* Split Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mobile: Stacked Background */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hackpoint/whyhackpoint_section_background.png"
              alt=""
              fill
              className="object-cover"
              priority
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 w-full h-[25%]">
              <Image
                src="/assets/hackpoint/whyhackpoint_section_image.png"
                alt=""
                fill
                className="object-cover"
                priority
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Desktop: Side-by-side Background */}
        <div className="hidden md:flex absolute inset-0 w-full h-full">
          <div className="w-1/2 h-full relative">
            <Image
              src="/assets/hackpoint/whyhackpoint_section_background.png"
              alt=""
              fill
              className="object-cover"
              priority
              aria-hidden="true"
            />
          </div>
          <div className="w-1/2 h-full relative">
            <Image
              src="/assets/hackpoint/whyhackpoint_section_image.png"
              alt=""
              fill
              className="object-cover"
              priority
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full">
        {/* Mobile: Content on red background */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <div className="relative h-full w-full min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col justify-start px-4 pt-4 pb-2"
            >
              <motion.h2
                id="why-hackpoint-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-bold text-[48px] text-white mb-4 leading-[100%] capitalize"
                style={{
                  fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                }}
              >
                Why HackPoint?
              </motion.h2>

              <div className="space-y-3">
                {FEATURES.map((feature, index) => (
                  <FeatureItem key={index} feature={feature} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop: Original layout */}
        <div className="hidden md:flex flex-col lg:flex-row items-center h-full min-h-[500px] lg:min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full lg:pr-12"
          >
            <motion.h2
              id="why-hackpoint-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-[50px] md:text-[65px] lg:text-[75px] text-white mb-12 lg:mb-16 leading-[100%] capitalize"
              style={{
                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              Why HackPoint?
            </motion.h2>

            <div className="space-y-6">
              {FEATURES.map((feature, index) => (
                <FeatureItem key={index} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>

          <div className="lg:w-1/2 w-full" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
