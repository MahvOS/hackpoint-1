'use client'

import Navbar from '@/components/Navbar'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import AboutHeroSection from '@/components/sections/AboutHeroSection'
import VisionMissionSection from '@/components/sections/VisionMissionSection'
import WhatMakesUsDifferentSection from '@/components/sections/WhatMakesUsDifferentSection'
import ProgramsSection from '@/components/sections/ProgramsSection'
import WhoCanJoinSection from '@/components/sections/WhoCanJoinSection'
import PartnershipSection from '@/components/sections/PartnershipSection'
import AchievementSection from '@/components/sections/AchievementSection'
import FooterSection from '@/components/sections/FooterSection'

export default function AboutPage() {
  return (
    <>
      <AnnouncementBanner />
      <div className="relative">
        <Navbar />
        <main>
          <AboutHeroSection />
          <VisionMissionSection />
          <WhatMakesUsDifferentSection />
          <ProgramsSection />
          <WhoCanJoinSection />
          <PartnershipSection />
          <AchievementSection />
          <FooterSection />
        </main>
      </div>
    </>
  )
}
