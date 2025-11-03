'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionWrapper from '@/components/shared/SectionWrapper'
import { SPONSORS, type Sponsor } from '@/data/sponsors'

const SponsorLogo = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="relative flex items-center justify-center">
    <div
      className="relative opacity-60"
      style={{ width: `${sponsor.width}px`, height: `${sponsor.height}px` }}
    >
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        fill
        className="object-contain"
      />
    </div>
  </div>
)

export default function CyberFestSponsorshipSection() {
  return (
    <SectionWrapper id="cyberfest-sponsorship" bgColor="#1A1A1A" py="py-5">
      {/* Sponsors List Only */}
      <div className="relative w-full overflow-hidden py-8">
        <motion.div
          className="flex gap-16 md:gap-24 lg:gap-32 items-center"
          animate={{
            x: [0, "-50%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate sponsors for seamless loop */}
          {[...SPONSORS, ...SPONSORS].map((sponsor, index) => (
            <SponsorLogo key={`${sponsor.id}-${index}`} sponsor={sponsor} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}