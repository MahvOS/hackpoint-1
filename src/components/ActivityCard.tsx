'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Activity {
  icon: string
  title: string
  description: string
}

interface ActivityCardProps {
  activity: Activity
  isActive?: boolean
  onClick?: () => void
}

export default function ActivityCard({ activity, isActive = false, onClick }: ActivityCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="relative w-full h-full flex flex-col items-center justify-center p-[24.8px] hover:bg-black/90 transition-all duration-300 cursor-pointer"
    >
      {/* Icon Container */}
      <div className="w-[94.6px] h-[94.6px] mb-[27.6px] flex items-center justify-center overflow-hidden">
        <img src={activity.icon} alt={activity.title} className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="space-y-[20px] text-center">
        <h3 className="text-[31.6px] font-bold font-dm text-white leading-[0.47] capitalize">
          {activity.title}
        </h3>
        <p className="text-[14.7px] font-semibold font-dm text-white/50 leading-none">
          {activity.description}
        </p>
      </div>
    </motion.div>
  )
}
