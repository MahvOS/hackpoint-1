import AnnouncementBanner from '@/components/AnnouncementBanner'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import RatingSection from '@/components/sections/RatingSection'
import WhatWeDoSection from '@/components/sections/WhatWeDoSection'
import WhyHackPointSection from '@/components/sections/WhyHackPointSection'
import UpcomingEventSection from '@/components/sections/UpcomingEventSection'
import ProgramsEventSection from '@/components/sections/ProgramsEventSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import SponsorshipSection from '@/components/sections/SponsorshipSection'
import FooterSection from '@/components/sections/FooterSection'
import CookieConsent from '@/components/CookieConsent'

export default function Page() {
  return (
    <>
      <AnnouncementBanner />
      <div className="relative">
        <Navbar />
        <main>
          <HeroSection />

          {/* Mobile: Show Sponsorship and Rating after Hero */}
          <div className="block md:hidden">
            <SponsorshipSection />
            <RatingSection />
          </div>

          <WhatWeDoSection />
          <WhyHackPointSection />
          <UpcomingEventSection />
          <ProgramsEventSection />
          <TestimonialSection />

          {/* Desktop: Show Sponsorship after Testimonial */}
          <div className="hidden md:block">
            <SponsorshipSection />
          </div>

          <FooterSection />
        </main>
      </div>
      <CookieConsent />
    </>
  )
}
