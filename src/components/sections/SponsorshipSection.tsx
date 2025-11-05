'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { SPONSORS, type Sponsor } from '@/data/sponsors'

const SponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="relative flex items-center justify-center">
    <div
      // Use transform scaling on mobile so we can keep explicit width/height
      // (needed for next/image fill) while visually reducing size on small screens.
      className="relative opacity-60 transform scale-75 md:scale-100"
      style={{ width: `${sponsor.width}px`, height: `${sponsor.height}px` }}
    >
      <Image src={sponsor.logo} alt={sponsor.name} fill className="object-contain" />
    </div>
  </div>
)

export default function SponsorshipSection() {
  return (
    <SectionWrapper id="sponsorship" bgColor="#1A1A1A" py="py-20">
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Mobile: Only show sponsors */}
        <div className="block md:hidden w-full">
          <div className="relative w-full overflow-hidden py-6 md:py-8">
            <motion.div
              className="flex gap-8 md:gap-16 items-center"
              animate={{
                x: [0, '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 12,
                  ease: 'linear',
                },
              }}
            >
              {/* Duplicate sponsors for seamless loop */}
              {[...SPONSORS, ...SPONSORS].map((sponsor, index) => (
                <SponsorLogo key={`${sponsor.id}-${index}`} sponsor={sponsor} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop: Show full section */}
        <div className="hidden md:flex flex-col items-center gap-6 text-center max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[100%]"
            style={{
              fontFamily: 'SF Pro, sans-serif',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            Our Sponsorship <span className="text-white/30">&</span> Media Partner
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-white/30 leading-relaxed max-w-3xl"
            style={{
              fontFamily: 'SF Pro, sans-serif',
              fontVariationSettings: "'wdth' 100",
            }}
          >
            HackPoint didukung oleh berbagai partner dari institusi pendidikan, komunitas, dan
            perusahaan teknologi. Bersama, kita membangun ekosistem cybersecurity yang lebih kuat.
          </motion.p>
        </div>

        {/* Desktop: Sponsors List */}
        <div className="hidden md:block relative w-full overflow-hidden py-8">
          <motion.div
            className="flex gap-16 md:gap-24 lg:gap-32 items-center"
            animate={{
              x: [0, '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 100,
                ease: 'linear',
              },
            }}
          >
            {/* Duplicate sponsors for seamless loop */}
            {[...SPONSORS, ...SPONSORS].map((sponsor, index) => (
              <SponsorLogo key={`${sponsor.id}-${index}`} sponsor={sponsor} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
