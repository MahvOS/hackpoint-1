'use client'

import { motion } from 'framer-motion'
import DecorativeArrows from '@/components/shared/DecorativeArrows'

const targetAudiences = [
  {
    description: "Fresh graduate yang ingin membangun portofolio dan skill baru.",
    boldText: "Fresh graduate"
  },
  {
    description: "Professional yang ingin memperdalam kemampuan atau pivot ke dunia cybersecurity.",
    boldText: "Professional"
  },
  {
    description: "Mahasiswa IT maupun non-IT yang ingin mulai belajar.",
    boldText: "Mahasiswa"
  },
  {
    description: "Komunitas, organisasi, atau perusahaan yang ingin berkolaborasi di bidang keamanan digital.",
    boldText: "Komunitas, organisasi, atau perusahaan"
  }
]

export default function WhoCanJoinSection() {
  return (
    <section className="relative bg-[#1A1A1A] py-16 md:py-32 px-4 md:px-[70px] overflow-hidden min-h-[100vh] md:min-h-[150vh] w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto mb-8 md:mb-12"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-center text-center md:text-left">
          <h2
            className="capitalize font-bold leading-[0.91] text-white text-4xl md:text-[60.885px]"
            style={{
              fontFamily: 'SF Pro, sans-serif',
              fontVariationSettings: '"wdth" 100',
              fontWeight: 'bold'
            }}
          >
            Siapa yang Bisa Bergabung?
          </h2>

          {/* Decorative Arrow - Desktop Only */}
          <div className="-translate-y-8 mt-4 md:mt-0 hidden md:block">
            <DecorativeArrows showLeft={false} showRight={true} position="top" />
          </div>
        </div>
      </motion.div>

      {/* Red Gradient Background - Bottom to Top - Desktop Only */}
      <div
        className="absolute inset-0 pointer-events-none z-5 hidden md:block"
        style={{
          background: 'linear-gradient(to top, rgba(211, 53, 51, 0.8) 0%, rgba(211, 53, 51, 0.5) 25%, rgba(211, 53, 51, 0.2) 35%, transparent 50%)'
        }}
      />

      {/* Mobile Vertical Cards List */}
      <div className="block md:hidden relative z-40 max-w-[337px] mx-auto space-y-4 mb-8">
        {targetAudiences.map((audience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative flex items-center gap-[7.925px]"
            style={{
              display: 'flex',
              width: '337px',
              padding: '34.08px 15.851px 34.08px 26px',
              borderRadius: '18.542px',
              border: '0.742px solid #FFF',
              background: 'linear-gradient(116deg, rgba(211, 53, 51, 0.30) -9.36%, rgba(255, 255, 255, 0.30) 66.44%)',
              boxShadow: '0 0 87.661px 0 rgba(0, 0, 0, 0.15)',
              backdropFilter: 'blur(21.915346145629883px)'
            }}
          >
            <p className="text-white text-lg font-normal leading-tight relative z-10">
              <span className="font-semibold text-xl">{audience.boldText}</span>
              {audience.description.substring(audience.boldText.length)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Description Text Below Cards */}
      <div className="block md:hidden relative z-40 max-w-[337px] mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '125%', /* 25px */
              textTransform: 'capitalize',
              background: 'linear-gradient(179deg, #FFF 0.89%, rgba(255, 255, 255, 0.00) 153.13%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            HackPoint terbuka untuk siapa saja yang punya ketertarikan di dunia teknologi dan keamanan siber.
          </p>
        </motion.div>
      </div>

      {/* Desktop Scattered Cards */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        {/* Card 1 - Mahasiswa (Top of all circles) */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
            y: 500,
            rotate: 0
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y:110,
            rotate: -5
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 12
          }}
          className="absolute left-[20%] -translate-x-1/2 top-[30%] z-50"
        >
          <div className="relative backdrop-blur-[25px] bg-white/10 border border-white rounded-[21px] px-[17px] py-[36px] w-[300px] shadow-xl">
            {/* Noise Texture Overlay */}
            <div
              className="absolute inset-0 rounded-[21px] pointer-events-none"
              style={{
                backgroundImage: `
                url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-card1'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' seed='5' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise-card1)' opacity='0.15'/%3E%3C/svg%3E")
              `,
                backgroundSize: '100px 100px',
                mixBlendMode: 'overlay'
              }}
            />
            <p className="text-white text-[22px] font-normal leading-tight relative z-10">
              <span className="font-medium">Mahasiswa</span>
              <br />
              IT maupun non-IT yang ingin mulai belajar.
            </p>
          </div>
        </motion.div>

        {/* Card 2 - Fresh Graduate (In front of Circle 2 - Middle) */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
            y: 450,
            rotate: 0
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 90,
            rotate: -3
          }}
          transition={{
            duration: 1,
            delay: 0.8,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          className="absolute left-[50%] -translate-x-1/2 top-[40%] z-18"
        >
          <div className="relative backdrop-blur-[25px] bg-white/10 border border-white rounded-[21px] px-[17px] py-[36px] w-[300px] shadow-xl">
            {/* Noise Texture Overlay */}
            <div
              className="absolute inset-0 rounded-[21px] pointer-events-none"
              style={{
                backgroundImage: `
                url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-card2'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' seed='6' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise-card2)' opacity='0.15'/%3E%3C/svg%3E")
              `,
                backgroundSize: '100px 100px',
                mixBlendMode: 'overlay'
              }}
            />
            <p className="text-white text-[22px] font-normal leading-tight relative z-10">
              <span className="font-medium">Fresh graduate</span>
              <br />
              yang ingin membangun portofolio dan skill baru.
            </p>
          </div>
        </motion.div>

        {/* Card 3 - Career Changers (In front of Circle 3 - Front) */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
            y: 400,
            rotate: 0
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 140,
            rotate: 20
          }}
          transition={{
            duration: 0.9,
            delay: 1.1,
            type: "spring",
            stiffness: 90,
            damping: 13
          }}
          className="absolute left-[75%] -translate-x-1/2 top-[35%] z-8"
        >
          <div className="relative backdrop-blur-[25px] bg-white/10 border border-white rounded-[21px] px-[17px] py-[36px] w-[300px] shadow-xl">
            {/* Noise Texture Overlay */}
            <div
              className="absolute inset-0 rounded-[21px] pointer-events-none"
              style={{
                backgroundImage: `
                url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-card3'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' seed='7' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3Cfilter%3E%3Crect width='100' height='100' filter='url(%23noise-card3)' opacity='0.15'/%3E%3C/svg%3E")
              `,
                backgroundSize: '100px 100px',
                mixBlendMode: 'overlay'
              }}
            />
            <p className="text-white text-[22px] font-normal leading-tight relative z-10">
              <span className="font-medium">Career Changers</span>
              <br />
              yang ingin beralih ke industri cybersecurity.
            </p>
          </div>
        </motion.div>

        {/* Card 4 - IT Professionals (Slightly offset and in front) */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
            y: 380,
            rotate: 0
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 120,
            x: -50,
            rotate: -20
          }}
          transition={{
            duration: 0.85,
            delay: 1.4,
            type: "spring",
            stiffness: 95,
            damping: 11
          }}
          className="absolute left-[30%] -translate-x-1/2 top-[50%] z-25"
        >
          <div className="relative backdrop-blur-[25px] bg-white/10 border border-white rounded-[21px] px-[17px] py-[36px] w-[300px] shadow-xl">
            {/* Noise Texture Overlay */}
            <div
              className="absolute inset-0 rounded-[21px] pointer-events-none"
              style={{
                backgroundImage: `
                url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-card4'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' seed='8' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise-card4)' opacity='0.15'/%3E%3C/svg%3E")
              `,
                backgroundSize: '100px 100px',
                mixBlendMode: 'overlay'
              }}
            />
            <p className="text-white text-[22px] font-normal leading-tight relative z-10">
              <span className="font-medium">IT Professionals</span>
              <br />
              Yang ingin upgrade skill ke area cybersecurity.
            </p>
          </div>
        </motion.div>
      </div>

    
      {/* Red Circles - Pure Red, Centered, Bottom Half Coverage - Desktop Only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {/* Circle 1 - Back Layer (Largest) */}
        <div className="absolute bottom-0 left-1/2 w-[1500px] h-[750px] transform -translate-x-1/2 translate-y-1/2 -translate-y-[250px] z-10">
          <div
            className="w-full h-full rounded-t-full relative overflow-hidden"
            style={{
              backgroundColor: '#d33533',
              boxShadow: '0 60px 120px -30px rgba(0, 0, 0, 0.9), 0 0 150px rgba(211, 53, 51, 0.4), 0 0 200px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Noise Texture Layer */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise1'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4' seed='1' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise1)' opacity='0.3'/%3E%3C/svg%3E")
              `,
              backgroundSize: '200px 200px',
              mixBlendMode: 'multiply'
            }}
            />
          </div>
        </div>

        {/* Circle 2 - Middle Layer (Medium) */}
        <div className="absolute bottom-0 left-1/2 w-[1250px] h-[625px] transform -translate-x-1/2 translate-y-1/2 -translate-y-[150px] z-20">
          <div
            className="w-full h-full rounded-t-full relative overflow-hidden"
            style={{
              backgroundColor: '#d33533',
              boxShadow: '0 50px 100px -25px rgba(0, 0, 0, 0.85), 0 0 120px rgba(211, 53, 51, 0.35), 0 0 160px rgba(0, 0, 0, 0.4)'
            }}
          >
            {/* Noise Texture Layer */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence baseFrequency='1.2' numOctaves='3' seed='2' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='150' height='150' filter='url(%23noise2)' opacity='0.4'/%3E%3C/svg%3E")
              `,
              backgroundSize: '150px 150px',
              mixBlendMode: 'multiply'
            }}
            />
          </div>
        </div>

        {/* Circle 3 - Front Layer (Smallest) */}
        <div className="absolute bottom-0 left-1/2 w-[1100px] h-[550px] transform -translate-x-1/2 translate-y-1/2 -translate-y-[50px] z-30">
          <div
            className="w-full h-full rounded-t-full relative overflow-hidden"
            style={{
              backgroundColor: '#d33533',
              boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.8), 0 0 100px rgba(211, 53, 51, 0.3), 0 0 120px rgba(0, 0, 0, 0.35)'
            }}
          >
            {/* Noise Texture Layer */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise3'%3E%3CfeTurbulence baseFrequency='1.5' numOctaves='3' seed='3' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise3)' opacity='0.5'/%3E%3C/svg%3E")
              `,
              backgroundSize: '100px 100px',
              mixBlendMode: 'multiply'
            }}
            />
          </div>
        </div>
      </div>

          </section>
  )
}