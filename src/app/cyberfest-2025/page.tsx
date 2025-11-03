import AnnouncementBanner from '@/components/AnnouncementBanner'
import Navbar from '@/components/Navbar'
import CyberFestHeroSection from '@/components/sections/CyberFestHeroSection'
import CyberFestSponsorshipSection from '@/components/sections/CyberFestSponsorshipSection'
import CyberFestAboutSection from '@/components/sections/CyberFestAboutSection'
import ProgramsEventSection from '@/components/sections/ProgramsEventSection'
import CyberFestRegistrationSection from '@/components/sections/CyberFestRegistrationSection'
import SpeakersSection from '@/components/sections/SpeakersSection'
import FAQSection from '@/components/sections/FAQSection'
import FooterSection from '@/components/sections/FooterSection'
import CookieConsent from '@/components/CookieConsent'

export default function CyberFest2025Page() {
  return (
    <>
      <AnnouncementBanner />
      <div className="relative">
        <Navbar />
        <main>
          <CyberFestHeroSection />
          <CyberFestSponsorshipSection />
          <CyberFestAboutSection />
          <ProgramsEventSection />
          <CyberFestRegistrationSection />
          <div className="hidden md:block">
            <SpeakersSection />
          </div>
          <FAQSection />
          <FooterSection />
        </main>
      </div>
      <CookieConsent />
    </>
  )
}
