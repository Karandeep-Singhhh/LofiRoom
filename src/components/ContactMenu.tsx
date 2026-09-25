'use client'

import { useState } from 'react'

export default function ContactMenu() {
  const [copied, setCopied] = useState(false)
  const email = 'EMAIL'
  const address = 'singh.karand@northeastern.edu'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const baseClass =
    'text-xs font-semibold tracking-wider text-white/80 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm px-4 py-2 rounded-sm transition-colors ' +
    // mobile: equal-width cells in a bottom bar
    'mobile:flex-1 mobile:h-12 mobile:p-0 mobile:leading-12 mobile:text-center mobile:bg-transparent mobile:backdrop-blur-none mobile:rounded-none mobile:border-l mobile:border-white/10 mobile:last:border-l-0'

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse gap-2 items-end mobile:left-0 mobile:right-0 mobile:bottom-0 mobile:flex-row-reverse mobile:items-stretch mobile:gap-0 mobile:bg-black/55 mobile:backdrop-blur-md mobile:border-t mobile:border-white/10 mobile:pb-[env(safe-area-inset-bottom)]">
      <a
        href="/KarandeepSingh_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        RESUME
      </a>
      <a
        href="https://github.com/Karandeep-Singhhh"
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        GITHUB
      </a>
      <a
        href="https://www.linkedin.com/in/karandeep-singh-51031a307/"
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        LINKEDIN
      </a>
      <button onClick={handleCopyEmail} className={`${baseClass} mobile:hidden`}>
        {copied ? 'COPIED!' : email.toUpperCase()}
      </button>
      {/* Phones open the mail app instead of copying */}
      <a href={`mailto:${address}`} className={`${baseClass} hidden mobile:block`}>
        {email.toUpperCase()}
      </a>
    </div>
  )
}
