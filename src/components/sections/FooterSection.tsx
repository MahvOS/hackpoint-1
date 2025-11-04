'use client'


import Image from 'next/image'
import SectionWrapper from '@/components/shared/SectionWrapper'

const FooterSection = () => {
  return (
    <SectionWrapper id="footer" bgColor="#1A1A1A" py="py-0 pt-16 md:pt-8">
      <div className="border-t border-white/50">
        {/* Mobile Footer */}
        <div className="block md:hidden">
          <div className="w-full px-4 py-8" style={{ backgroundColor: '#D33533' }}>
            {/* Top Section - Logo and Description */}
            <div className="flex flex-col items-start mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src="/assets/hackpoint/mobile_icon_footer_mobile.png"
                    alt="HackPoint Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <div
                    className="font-bold text-[28px] text-white tracking-[2px] uppercase"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    HACK
                  </div>
                  <div
                    className="font-bold text-[28px] text-white tracking-[2px] uppercase"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    POINT
                  </div>
                </div>
              </div>

              <p
                className="text-left text-[14px] text-white max-w-xs"
                style={{
                  fontFamily: 'SF Pro, sans-serif',
                  fontWeight: 510,
                }}
              >
                Cybersecurity community & Training
              </p>
            </div>

            {/* Middle Section - Navigation Links */}
            <div className="flex justify-start mb-8">
              <div className="flex flex-wrap justify-start gap-4">
                {['Home', 'About', 'Contact', 'CTF', 'Course', 'Cyberfest 2025'].map(
                  (item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-[14px] text-white/80 capitalize hover:text-white transition-colors duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Bottom Section - Email and Social */}
            <div className="flex flex-col items-start gap-4">
              {/* Email */}
              <a
                href="mailto:teamspoint02@gmail.com"
                className="text-[14px] text-white/80 underline"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'underline',
                  textUnderlineOffset: 'auto',
                }}
              >
                teamspoint02@gmail.com
              </a>

              {/* Social Icons */}
              <div className="flex gap-4">
                <div className="relative w-[35px] h-[35px]">
                  <Image
                    src="/assets/hackpoint/footer_section_instagram.png"
                    alt="Instagram"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[35px] h-[35px]">
                  <Image
                    src="/assets/hackpoint/footer_section_linkedin.png"
                    alt="LinkedIn"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Copyright */}
              <p
                className="text-[12px] text-white/60 text-left"
                style={{
                  fontFamily: 'SF Pro, sans-serif',
                }}
              >
                ©2025 Hackpoint. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:block">
          <div className="relative w-full h-[453px] flex flex-col items-center">
            {/* Main Footer Content */}
            <div className="w-full max-w-7xl px-[67px] py-[98px] flex justify-between">
              {/* Left Section - Logo and Info */}
              <div className="flex flex-col gap-[20px] w-[389px]">
                {/* Logo Section */}
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[18.657px] w-[250px]">
                    <div className="relative w-[67.163px] h-[81.467px]">
                      <Image
                        src="/assets/hackpoint/footer_section_logo.png"
                        alt="HackPoint Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col leading-none">
                      <div
                        className="font-bold text-[42.91px] text-white tracking-[3.0037px] uppercase"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        HACK
                      </div>
                      <div
                        className="font-bold text-[42.91px] text-white tracking-[3.0037px] uppercase"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        POINT
                      </div>
                    </div>
                  </div>

                  <p
                    className="capitalize text-[24px] text-white w-full"
                    style={{
                      fontFamily: 'SF Pro, sans-serif',
                      fontWeight: 510,
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    Cybersecurity community & Traning
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-[11.994px] items-center">
                  <div className="relative w-[54.003px] h-[51.729px]">
                    <Image
                      src="/assets/hackpoint/footer_section_instagram.png"
                      alt="Social Icon 1"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-[54.003px] h-[51.729px]">
                    <Image
                      src="/assets/hackpoint/footer_section_linkedin.png"
                      alt="Social Icon 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right Section - Navigation Links */}
              <div className="flex gap-[54.587px] items-start">
                {/* Email Section */}
                <div className="flex flex-col gap-[21.407px]">
                  <h3
                    className="text-[14.985px] text-white font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Email
                  </h3>
                  <div className="flex flex-col gap-[6.422px]">
                    <a
                      href="mailto:teamspoint02@gmail.com"
                      className="text-[14.985px] text-white/60 underline"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        textDecoration: 'underline',
                        textUnderlineOffset: 'auto',
                      }}
                    >
                      teamspoint02@gmail.com
                    </a>
                  </div>
                </div>

                {/* Site Map Section */}
                <div className="flex flex-col gap-[21.407px]">
                  <h3
                    className="text-[14.985px] text-white font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Site Map
                  </h3>
                  <div className="flex flex-col gap-[6.422px]">
                    {['Home', 'About', 'Contact', 'CTF', 'Course', 'Cyberfest 2025'].map(
                      (item, index) => (
                        <a
                          key={index}
                          href={`#${item.toLowerCase().replace(' ', '-')}`}
                          className="text-[14.985px] text-white/60 capitalize hover:text-white transition-colors duration-200"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {item}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="absolute bottom-[26px] left-[67px]">
              <p
                className="text-[16px] text-white/80 italic"
                style={{
                  fontFamily: 'SF Pro, sans-serif',
                  fontStyle: 'italic',
                  fontVariationSettings: "'YAXS' 400",
                }}
              >
                ©2025 HackPoint. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default FooterSection
