'use client'

import { useState } from 'react'

export default function ContactMenu() {
  const [copied, setCopied] = useState(false)
  const email = 'EMAIL'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('singh.karand@northeastern.edu')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const baseClass =
    'text-xs font-semibold tracking-wider text-white/80 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm px-4 py-2 rounded-sm transition-colors'

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse gap-2 items-end">
      <a
        href="/karandeep-resume.pdf"
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
      <button onClick={handleCopyEmail} className={baseClass}>
        {copied ? 'COPIED!' : email.toUpperCase()}
      </button>
    </div>
  )
}