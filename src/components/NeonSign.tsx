'use client'

import { motion } from 'framer-motion'

type NeonSignProps = {
  text: string
  className?: string
}

export default function NeonSign({ text, className = '' }: NeonSignProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0.3, 1, 0.6, 1],
      }}
      transition={{
        duration: 1.6,
        times: [0, 0.2, 0.35, 0.5, 0.7, 1],
        ease: 'easeOut',
      }}
      className={`pointer-events-none select-none ${className}`}
      style={{
        fontFamily: 'var(--font-bungee), sans-serif',
      }}
    >
      <motion.span
        animate={{
          textShadow: [
            '0 0 4px #fff, 0 0 8px #fff, 0 0 16px #ff1493, 0 0 32px #ff1493, 0 0 48px #ff1493, 0 0 64px #ff006e',
            '0 0 4px #fff, 0 0 10px #fff, 0 0 20px #ff1493, 0 0 40px #ff1493, 0 0 56px #ff1493, 0 0 72px #ff006e',
            '0 0 4px #fff, 0 0 8px #fff, 0 0 16px #ff1493, 0 0 32px #ff1493, 0 0 48px #ff1493, 0 0 64px #ff006e',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="text-white tracking-wider"
        style={{
          fontSize: 'clamp(1.6rem, 3.2vw, 3.2rem)',
          letterSpacing: '0.15em',
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  )
}