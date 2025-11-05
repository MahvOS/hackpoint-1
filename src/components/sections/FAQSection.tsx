'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface FAQItem {
  id: number
  question: string
  answer?: string
  isOpen: boolean
}

export default function FAQSection() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: 1,
      question: 'Siapa yang bisa ikut?',
      answer:
        'Acara ini terbuka untuk siapa saja yang tertarik dengan keamanan siber, dari pemula hingga ahli.',
      isOpen: false,
    },
    {
      id: 2,
      question: 'Apakah berbayar?',
      answer:
        'Ada beberapa pilihan tiket mulai dari gratis hingga VIP, sesuai dengan kebutuhan dan budget Anda.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Apakah peserta mendapat sertifikat?',
      answer:
        'Hanya peserta yang membeli paket basic pass dan VIP yang mendapatkan sertifikat keikutsertaan.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'Apakah harus punya skill advance untuk ikut CTF?',
      answer:
        'Tidak, acara ini dirancang untuk semua level. Ada kategori pemula yang cocok untuk belajar dasar-dasar CTF.',
      isOpen: false,
    },
  ])

  const toggleFAQ = (id: number) => {
    setFaqs(prev => prev.map(faq => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq)))
  }

  return (
    <section
      className="relative px-4 sm:px-6 md:px-[70px] py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:gap-16 items-center justify-center">
        {/* Left Side - Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 items-start lg:items-start text-white lg:w-1/3 w-full"
        >
          {/* Mobile Header - Centered with new layout */}
          <div className="flex flex-col items-center gap-2 text-center block md:hidden">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <Image
                  src="/assets/hackpoint/mobile_icon_mini.png"
                  alt="FAQ Icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h2 className="font-bold leading-none text-[16px] capitalize">F.A.Q Mini</h2>
            </div>
            <p className="leading-tight text-[28px] font-semibold">Frequently Asked Questions</p>
          </div>

          {/* Desktop Header - Original Layout */}
          <div className="hidden md:block">
            <h2 className="font-bold leading-none text-[48px] lg:text-[80px] capitalize">
              F.A.Q Mini
            </h2>
            <p className="font-normal leading-tight text-[18px] lg:text-[24px]">
              /Frequently Asked Questions
            </p>
          </div>
        </motion.div>

        {/* Right Side - FAQ Items */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full lg:w-2/3 max-w-3xl"
        >
          {faqs.map(faq => (
            <motion.div key={faq.id} layout className="w-full overflow-hidden">
              {/* Mobile - Card Design */}
              <div
                className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-white/20 block md:hidden"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-semibold leading-none text-[14px] text-white capitalize flex-1 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: faq.isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center cursor-pointer flex-shrink-0 w-8 h-8 bg-white/20 rounded-full"
                    onClick={e => {
                      e.stopPropagation()
                      toggleFAQ(faq.id)
                    }}
                  >
                    <div className="scale-y-[-1]">
                      <img
                        src={
                          faq.isOpen
                            ? '/assets/hackpoint/faq-arrow-up.svg'
                            : '/assets/hackpoint/faq-arrow-down.svg'
                        }
                        alt="Toggle"
                        className="w-3 h-2"
                      />
                    </div>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {faq.isOpen && faq.answer && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-medium italic leading-[1.3] text-[12px] text-white/80 w-full"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop - Original Line Design */}
              <div className="hidden md:block border-b border-white w-full overflow-hidden min-h-[57px]">
                <div className="flex items-start justify-between w-full">
                  <div className="flex-1 pr-8 cursor-pointer" onClick={() => toggleFAQ(faq.id)}>
                    <div className="flex flex-col gap-[17px] items-start justify-center">
                      <div className="flex items-center justify-between w-full">
                        <h3 className="font-semibold leading-none text-[20px] lg:text-[25px] text-white capitalize">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: faq.isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-center cursor-pointer flex-shrink-0 min-w-[44px] min-h-[44px] p-2"
                          onClick={e => {
                            e.stopPropagation()
                            toggleFAQ(faq.id)
                          }}
                        >
                          <div className="scale-y-[-1]">
                            <img
                              src={
                                faq.isOpen
                                  ? '/assets/hackpoint/faq-arrow-up.svg'
                                  : '/assets/hackpoint/faq-arrow-down.svg'
                              }
                              alt="Toggle"
                              className="w-[15px] h-[8px]"
                            />
                          </div>
                        </motion.div>
                      </div>
                      <AnimatePresence>
                        {faq.isOpen && faq.answer && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="font-medium mb-5 italic leading-[1.11] text-[18px] lg:text-[22px] text-white/80 w-full md:w-[600px]"
                          >
                            {faq.answer}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
