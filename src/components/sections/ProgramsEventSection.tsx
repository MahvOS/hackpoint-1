'use client'

import { motion } from 'framer-motion'
import DecorativeArrows from '@/components/shared/DecorativeArrows'
import { DESIGN_TOKENS } from '@/constants/design'

export default function ProgramsEventSection() {
  return (
    <section
      id="programs-event"
      className="relative py-20 pt-32 px-4 md:px-[70px] md:pt-24 overflow-hidden"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Mobile: Simple Design Element */}
        <div className="block md:hidden mb-2">
          <div className="relative w-[200px] h-[60px] mx-auto flex items-center justify-center space-x-3">
            {/* Icon */}
            <img
              src="/assets/hackpoint/mobile_icon_mini.png"
              alt="Our Program"
              className="w-[35px] h-[35px] object-contain"
            />
            {/* Text */}
            <h3 className="text-white font-bold text-[16px] uppercase tracking-wider">
              Our Program
            </h3>
          </div>
        </div>

        <motion.div className="text-center mb-8">
          {/* Mobile: New headline text */}
          <h2
            className="block md:hidden text-[28px] font-semiboldtext-4xl font-bold text-white mb-6 leading-[100%] capitalize"
            style={{
              fontFamily: 'SF Pro, sans-serif',
              fontWeight: 'bold',
              textShadow: 'rgba(0,0,0,0.25) 0px 4px 10px',
            }}
          >
            Programs Event
          </h2>

          {/* Desktop: Original headline text */}
          <h2
            className="hidden md:block text-4xl md:text-5xl lg:text-[75px] font-bold text-white mb-6 leading-[100%] capitalize"
            style={{
              fontFamily: 'SF Pro, sans-serif',
              fontWeight: 'bold',
              textShadow: 'rgba(0,0,0,0.25) 0px 4px 10px',
            }}
          >
            Programs Event
          </h2>
        </motion.div>

        {/* Mobile: Figma Design Layout */}
        <div className="block md:hidden max-w-7xl mx-auto w-full space-y-[18px] flex flex-col items-center">
          {/* National CFT Competition */}
          <motion.div
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-[346px] h-[217px] mx-auto group cursor-pointer"
          >
            {/* Glass Background */}
            <div
              className="absolute inset-0 rounded-[17px]"
              style={{
                backdropFilter: 'blur(24.405px)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1.155px solid rgba(255,255,255,1)',
              }}
            />

            {/* Image */}
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.nationalCTF}
              alt="National CTF Competition"
              className="absolute h-[197px] ml-[11px] mt-[10px] rounded-[17px] w-[325px] object-cover"
              style={{ objectPosition: 'left center' }}
            />

            {/* Text */}
            <p
              className="font-bold leading-normal"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'rgba(0,0,0,0.25) 0px 2px 8px',
                position: 'absolute',
                left: '27px',
                top: '128px',
                fontSize: '25px',
                width: '267px',
              }}
            >
              National CFT Competition
            </p>
          </motion.div>

          {/* Talkshow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-[346px] h-[217px] mx-auto group cursor-pointer"
          >
            {/* Glass Background */}
            <div
              className="absolute inset-0 rounded-[17px]"
              style={{
                backdropFilter: 'blur(24.405px)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1.155px solid rgba(255,255,255,1)',
              }}
            />

            {/* Image */}
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.talkshow}
              alt="Talkshow"
              className="absolute h-[197px] ml-[10px] mt-[10px] rounded-[17px] w-[325px] object-cover"
            />

            {/* Text */}
            <p
              className="font-bold leading-normal"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'absolute',
                left: '29px',
                top: '133px',
                fontSize: '22px',
                width: '289px',
              }}
            >
              Talkshow Bersama Praktisi & Perusahaan Global
            </p>
          </motion.div>

          {/* Networking & Career Fair */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-[346px] h-[217px] mx-auto group cursor-pointer"
          >
            {/* Glass Background */}
            <div
              className="absolute inset-0 rounded-[17px]"
              style={{
                backdropFilter: 'blur(24.405px)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1.155px solid rgba(255,255,255,1)',
              }}
            />

            {/* Image */}
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.networking}
              alt="Networking & Career Fair"
              className="absolute h-[197px] ml-[11px] mt-[10px] rounded-[17px] w-[325px] object-cover"
            />

            {/* Text */}
            <p
              className="font-bold leading-normal"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'rgba(0,0,0,0.25) 0px 2px 4px',
                position: 'absolute',
                left: '22px',
                top: '130px',
                fontSize: '24px',
                width: '181px',
              }}
            >
              Networking & Career Fair
            </p>
          </motion.div>

          {/* Booth Sponsor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-[346px] h-[217px] mx-auto group cursor-pointer"
          >
            {/* Glass Background */}
            <div
              className="absolute inset-0 rounded-[17px]"
              style={{
                backdropFilter: 'blur(24.405px)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1.155px solid rgba(255,255,255,1)',
              }}
            />

            {/* Image */}
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.bootSponsor}
              alt="Booth Sponsor"
              className="absolute h-[197px] ml-[10px] mt-[10px] rounded-[17px] w-[325px] object-cover"
            />

            {/* Text */}
            <div
              style={{
                position: 'absolute',
                left: '24px',
                top: '136px',
                width: '293px',
              }}
            >
              <div
                className="font-bold leading-normal"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: 'rgba(0,0,0,0.25) 0px 2px 9px',
                  fontSize: '22px',
                }}
              >
                <p style={{ marginBottom: 0 }}>Booth sponsor &</p>
                <p style={{ marginTop: 0 }}>Showcase Produk Terbaru</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop: Original Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-[20px] max-w-7xl mx-auto px-4 md:px-[20px]">
          {/* Row 1 */}
          {/* National CFT Competition */}
          <motion.div
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-[375px] group cursor-pointer"
          >
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.rectangle}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.nationalCTF}
              alt="National CFT Competition"
              className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-[12px] z-10"
            />
            <p
              className="font-bold text-[40px] leading-normal relative z-30"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'rgba(0,0,0,0.25) 0px 4px 13px',
                position: 'absolute',
                left: '40px',
                bottom: '40px',
                width: '80%',
              }}
            >
              National CFT Competition
            </p>
          </motion.div>

          {/* Talkshow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-[375px] group cursor-pointer"
          >
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.rectangle}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.talkshow}
              alt="Talkshow"
              className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-[12px]"
            />
            <p
              className="font-bold text-[35px] leading-normal relative z-30"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'rgba(0,0,0,0.25) 0px 4px 13px',
                position: 'absolute',
                left: '40px',
                bottom: '40px',
                width: '80%',
              }}
            >
              Talkshow Bersama Praktisi & Perusahaan Global
            </p>
          </motion.div>

          {/* Row 2 */}
          {/* Networking & Career Fair */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full h-[375px] group cursor-pointer"
          >
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.rectangle}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.networking}
              alt="Networking & Career Fair"
              className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-[12px]"
            />
            <p
              className="font-bold text-[40px] leading-normal relative z-30"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'rgba(0,0,0,0.25) 0px 4px 7.4px',
                position: 'absolute',
                left: '40px',
                bottom: '40px',
                width: '80%',
              }}
            >
              Networking & Career Fair
            </p>
          </motion.div>

          {/* Booth Sponsor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full h-[375px] group cursor-pointer"
          >
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.rectangle}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={DESIGN_TOKENS.assets.hackpoint.programEvents.bootSponsor}
              alt="Booth Sponsor"
              className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] object-cover rounded-[12px]"
            />
            <div
              className="relative z-30"
              style={{
                position: 'absolute',
                left: '40px',
                bottom: '40px',
                width: '80%',
              }}
            >
              <div
                className="font-bold text-[35px] leading-normal relative"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  textShadow: 'rgba(0,0,0,0.25) 0px 4px 14.8px',
                }}
              >
                <p
                  style={{
                    background: 'linear-gradient(to bottom, #ffffff, rgba(255,255,255,0.8))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: 0,
                  }}
                >
                  Booth sponsor & Showcase Produk Terbaru
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-16 left-16 z-10">
        <DecorativeArrows position="top" showRight={false} />
      </div>
    </section>
  )
}
