'use client'

import { motion } from 'framer-motion'
import DecorativeArrows from '@/components/shared/DecorativeArrows'

export default function VisionMissionSection() {
  return (
    <section className="relative py-54 px-4 md:px-[70px] bg-[#1A1A1A] overflow-hidden">
      {/* Left Radial Gradient Circle */}
      <div
        className="absolute top-1/2 -translate-x-1/2 transform -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 z-0"
        style={{
          background: 'radial-gradient(circle, #D33533 0%, transparent 70%)'
        }}
      ></div>

      {/* Right Red Element */}
      <img
        src="/assets/hackpoint/red_element.png"
        alt="Red decorative element"
        className="absolute top-8/10 -translate-y-1/2 translate-x-1/3 w-auto h-[1000px] opacity-70 z-0 rotate-10"
      />

      {/* Decorative Arrows */}
      <div className="absolute top-18 right-12">
        <DecorativeArrows showLeft={false} showRight={true} position="top" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-0"
        >
          <div className="flex flex-col gap-[60px] md:gap-[60px] items-center md:items-start">
            {/* Visi Section */}
            <div className="flex flex-col gap-[25px] md:gap-[25px] items-center md:items-start w-full text-center md:text-left">
              <div className="bg-white flex gap-[5px] items-center justify-center px-[25px] md:px-[30px] py-[4px] md:py-[5px] rounded-bl-[12px] md:rounded-bl-[15px] rounded-tr-[12px] md:rounded-tr-[15px]">
                <h2 className="font-bold text-[22px] md:text-[28px] text-[#D33533] whitespace-nowrap">
                  Visi Kami
                </h2>
              </div>
              <p className="font-medium leading-[normal] text-[16px] md:text-[21px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100", fontWeight: 510 }}>
                Menjadi jembatan bagi generasi muda untuk menguasai keterampilan cybersecurity, membangun karier global, dan berkontribusi pada ekosistem keamanan digital Indonesia maupun internasional.
              </p>
            </div>

            {/* Misi Section */}
            <div className="flex flex-col gap-[25px] md:gap-[25px] items-center md:items-start w-full text-center md:text-left">
              <div className="bg-white flex gap-[5px] items-center justify-center px-[25px] md:px-[30px] py-[4px] md:py-[5px] rounded-bl-[12px] md:rounded-bl-[15px] rounded-tr-[12px] md:rounded-tr-[15px] w-[180px] md:w-[200px]">
                <h2 className="font-bold text-[22px] md:text-[28px] text-[#D33533] whitespace-nowrap">
                  Misi Kami
                </h2>
              </div>
              <div className="font-medium leading-[normal] text-[16px] md:text-[21px] text-white w-full" style={{ fontVariationSettings: "'wdth' 100", fontWeight: 510 }}>
                <p className="mb-3">
                  Menyediakan Akses Pembelajaran Melalui bootcamp, course, dan webinar yang dirancang dari fundamental sampai level advance. Membangun Ekosistem Komunitas Menghubungkan mahasiswa, Profesional, dan perusahaan agar saling bertukar ilmu dan peluang.
                </p>
                <p className="font-semibold" style={{ fontWeight: 590 }}>
                  Mendorong Kompetisi & Event<br/>
                  Seperti Cyber Fest 2025,
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}