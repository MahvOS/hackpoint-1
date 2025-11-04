'use client'

import { useEffect } from 'react'

interface BodyWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function BodyWrapper({ children, className }: BodyWrapperProps) {
  useEffect(() => {
    // Remove any attributes added by browser extensions that cause hydration issues
    const body = document.body
    if (body.hasAttribute('cz-shortcut-listen')) {
      body.removeAttribute('cz-shortcut-listen')
    }
  }, [])

  return <div className={className}>{children}</div>
}
