'use client'

import { motion } from 'framer-motion'

interface FeatureCardProps {
  title: string
  description: string
  backgroundImage: string
  logoImage: string
  index: number
}

export default function FeatureCard({
  title,
  description,
  backgroundImage,
  logoImage,
  index
}: FeatureCardProps) {
  const isEven = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index > 1 ? 0.1 : 0 }}
      className="bg-white rounded-[23px] overflow-hidden relative h-[220px] md:h-[283px] w-full shadow-[0_0_50px_rgba(255,255,255,0.05)]"
    >
      <div className="absolute h-[459px] left-[-28px] top-[-88px] w-[688px]">
        <img
          src={backgroundImage}
          alt={`${title} background`}
          className="absolute max-w-none object-center object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </div>

      <h3
        className="absolute font-bold leading-none text-white left-[20px] md:left-[31px] top-[35px] md:top-[52px] w-[200px] md:w-[243px] text-2xl md:text-[43px]"
        style={{
          fontFamily: 'SF Pro, sans-serif',
          fontVariationSettings: '"wdth" 100',
          fontWeight: 'bold'
        }}
      >
        {title}
      </h3>

      <p
        className="absolute left-[20px] md:left-[31px] top-[160px] md:top-[213px] w-[280px] md:w-[465px] text-white/80 text-xs md:text-base"
        style={{
          fontFamily: 'SF Pro, sans-serif',
          fontVariationSettings: '"wdth" 100',
          fontWeight: 'medium'
        }}
      >
        {description}
      </p>

      <div className="absolute right-[20px] md:right-[25px] top-[25px] md:top-[35px]">
        <div className="h-[60px] w-[65px] md:h-[80px] md:w-[85px]">
          <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
        </div>
      </div>
    </motion.div>
  )
}