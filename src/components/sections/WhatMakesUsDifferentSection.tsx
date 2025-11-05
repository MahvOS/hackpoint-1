'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FeatureCard from '@/components/shared/FeatureCard'
import DecorativeArrows from '@/components/shared/DecorativeArrows'

const features = [
  {
    title: 'Pembelajaran Interaktif',
    description: 'Semua materi difokuskan pada praktik nyata, bukan sekadar teori.',
    backgroundImage: '/assets/hackpoint/about_page_pembelajaran_interaktif.png',
    logoImage: '/assets/hackpoint/about_page_cardlogo.png',
  },
  {
    title: 'Mentorship dari Praktisi',
    description: 'Dibimbing oleh orang-orang yang memang bekerja di bidang cybersecurity.',
    backgroundImage: '/assets/hackpoint/about_page_mentorship.png',
    logoImage: '/assets/hackpoint/about_page_cardlogo.png',
  },
  {
    title: 'Community-Driven',
    description:
      'HackPoint bukan sekadar lembaga training, tapi komunitas aktif yang tumbuh bersama.',
    backgroundImage: '/assets/hackpoint/about_page_community.png',
    logoImage: '/assets/hackpoint/about_page_cardlogo.png',
  },
  {
    title: 'Event & Networking',
    description:
      'Kesempatan untuk bertemu dengan perusahaan, mentor, dan sesama peserta dari berbagai kampus dan industri.',
    backgroundImage: '/assets/hackpoint/about_page_event_networking.png',
    logoImage: '/assets/hackpoint/about_page_cardlogo.png',
  },
]

export default function WhatMakesUsDifferentSection() {
  return (
    <section className="relative pt-5 pb-25 px-4 md:px-[70px] bg-[#1A1A1A] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-[85px]"
        >
          {/* Mini Icon and Text - MOBILE ONLY */}
          <div className="flex items-center gap-2 mb-4 md:hidden">
            <Image
              src="/assets/hackpoint/mobile_icon_mini.png"
              alt="Mini icon"
              width={6}
              height={6}
              className="w-6 h-6"
            />
            <span
              className="text-white font-semibold uppercase tracking-wider text-xs"
              style={{
                fontFamily: 'SF Pro, sans-serif',
                fontVariationSettings: '"wdth" 100',
                fontWeight: '600',
              }}
            >
              Why Hackpoint Is Different
            </span>
          </div>

          <h2
            className="font-bold leading-none text-white mb-0 text-4xl md:text-[56px]"
            style={{
              fontFamily: 'SF Pro, sans-serif',
              fontVariationSettings: '"wdth" 100',
              fontWeight: 'bold',
            }}
          >
            Apa yang Membuat <br /> HackPoint Berbeda?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[37px] max-w-[900px] md:max-w-[1300px] mx-auto md:ml-0 relative"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              backgroundImage={feature.backgroundImage}
              logoImage={feature.logoImage}
              index={index}
            />
          ))}

          {/* Decorative Arrow for the 4th card */}
          <div className="absolute bottom-24 right-16 z-30 rotate-220">
            <DecorativeArrows showLeft={false} showRight={true} position="bottom" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
