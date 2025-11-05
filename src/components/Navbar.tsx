'use client'

import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { DESIGN_TOKENS } from '@/constants/design'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if announcement banner is fully hidden (assuming ~60px height)
      const announcementHeight = 60
      setScrolled(window.scrollY > announcementHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${scrolled ? 'fixed top-0 left-0 right-0' : 'absolute top-0 left-0 right-0'} z-50 flex h-auto md:h-[80px] items-center justify-between px-4 md:px-[70px] py-4 md:py-0 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)]'
          : 'bg-white/5 backdrop-blur-2xl border-b border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.1)]'
      }`}
    >
      <div className="flex items-center gap-4 md:gap-8">
        <Link href="/" className="flex items-center mr-16 group">
          <div className="p-2 rounded-lg transition-all duration-300 group-hover:bg-transparent group-hover:backdrop-blur-none group-hover:shadow-none">
            <Image
              src={DESIGN_TOKENS.assets.hackpoint.logo}
              alt="HackPoint Logo"
              className="h-10 w-32 md:w-auto transition-transform duration-300 group-hover:scale-105"
              width={128} // Specify appropriate width
              height={40} // Specify appropriate height
            />
          </div>
        </Link>

        {/* Desktop menu - always visible */}
        <div className="hidden md:flex md:flex-row md:items-center md:gap-6">
          <Link
            href="/"
            className="font-sf text-[17px] font-medium text-white capitalize hover:text-white/80 transition-colors no-underline"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-sf text-[17px] font-medium text-white capitalize hover:text-white/80 transition-colors no-underline"
          >
            About
          </Link>

          <Link
            href="#ctf"
            className="font-sf text-[17px] text-white capitalize hover:text-white/80 transition-colors"
          >
            CTF
          </Link>

          <Link
            href="#course"
            className="font-sf text-[17px] text-white capitalize hover:text-white/80 transition-colors"
          >
            Course
          </Link>

          <Link
            href="/cyberfest-2025"
            className="flex items-center gap-1.5 font-sf text-base text-white capitalize hover:text-white/80 transition-colors"
          >
            CyberFest 2025
            <Image
              src={DESIGN_TOKENS.assets.hackpoint.cyberfestLogo}
              alt="navbar_cyberfest"
              className="w-[14px] h-[15px]"
              width={14} // Specify appropriate width
              height={15} // Specify appropriate height
            />
          </Link>
        </div>

        {/* Mobile menu - animated */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              // Make mobile menu an absolute overlay under the nav so it doesn't push
              // or rearrange page content (prevents messy layout on small screens).
              className="md:hidden absolute top-full left-0 right-0 z-40 flex flex-col items-center gap-4 overflow-hidden bg-black/80 backdrop-blur-md py-4"
            >
              <motion.a
                href="/"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="font-sf text-[17px] font-medium text-white capitalize hover:text-white/80 transition-colors no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </motion.a>

              <motion.a
                href="/about"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="font-sf text-[17px] font-medium text-white capitalize hover:text-white/80 transition-colors no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </motion.a>

              <motion.a
                href="#ctf"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="font-sf text-[17px] text-white capitalize hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CTF
              </motion.a>

              <motion.a
                href="#course"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="font-sf text-[17px] text-white capitalize hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Course
              </motion.a>

              <motion.a
                href="/cyberfest-2025"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-center gap-1.5 font-sf text-base text-white capitalize hover:text-white/80 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CyberFest 2025
                <Image
                  src={DESIGN_TOKENS.assets.hackpoint.cyberfestLogo}
                  alt="navbar_cyberfest"
                  className="w-[14px] h-[15px]"
                  width={14} // Specify appropriate width
                  height={15} // Specify appropriate height
                />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className="h-6 w-6" />
      </button>

      <div className="hidden md:flex items-center">
        {/* Placeholder for future right side content */}
      </div>
    </nav>
  )
}
