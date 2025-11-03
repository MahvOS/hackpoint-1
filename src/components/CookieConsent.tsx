'use client'

import { useState } from 'react'
import { Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 md:bottom-28 left-4 right-4 md:left-1/2 z-50 flex w-auto md:w-full md:max-w-[538px] md:-translate-x-1/2 transform flex-col items-center justify-center gap-3 rounded-[17px] border border-white/15 bg-white/10 p-4 md:p-5 shadow-[0_4px_25.7px_rgba(0,0,0,0.25)] backdrop-blur-[12px]">
      <div className="flex w-full flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        <div className="flex items-start md:items-center gap-3 md:gap-4 flex-1">
          <div className="flex items-center justify-center rounded-full bg-white/10 p-2 flex-shrink-0">
            <Cookie className="h-4 w-4 text-white/75" />
          </div>
          <p className="flex-1 font-poppins text-[10px] leading-[105%] tracking-tight text-white/75">
            We use cookies to improve your experience. By using our site, you agree to our cookie
            policy. Learn more in our [Privacy Policy].
          </p>
        </div>

        <div className="flex items-center gap-1.5 w-full md:w-auto justify-end">
          <button
            onClick={() => setIsVisible(false)}
            className="flex-1 md:flex-none rounded-full border border-white/75 px-3 py-2 font-poppins text-[10px] leading-[95%] tracking-tight text-white/75 hover:bg-white/10 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-1 md:flex-none rounded-full bg-gradient-to-r from-[#D33533]/60 to-[#AC0200]/60 px-3 py-2 font-poppins text-[10px] font-medium leading-[95%] tracking-tight text-white hover:from-[#D33533] hover:to-[#AC0200] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
