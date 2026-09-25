'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

type ProjectPosterProps = {
  project: Project
  onClick: () => void
}

export default function ProjectPoster({ project, onClick }: ProjectPosterProps) {
  return (
    <motion.button
      layoutId={`poster-${project.id}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="flex flex-col items-center cursor-pointer focus:outline-none"
      style={{ width: 'var(--poster-width, 80px)' }}
    >
      {/* Phones have no hover, so the posters pulse to show they're tappable */}
      <div
        className="relative rounded-sm overflow-hidden w-full mobile:animate-poster-glow"
        style={{ aspectRatio: '2 / 3' }}
      >
        <Image
          src={project.posterImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 30vw, 15vw"
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: '0 0 0 0 rgba(255, 105, 180, 0)' }}
          whileHover={{ boxShadow: '0 0 20px 4px rgba(255, 105, 180, 0.4)' }}
        />
      </div>
      <span
        className="text-white text-center leading-tight mt-1.5"
        style={{
          fontFamily: 'var(--font-bungee), sans-serif',
          fontSize: 'var(--poster-font-size, 12px)',
          letterSpacing: '0.06em',
          // Bungee's longest words (PREDICTOR, PORTFOLIO) run just past the poster width
          maxWidth: 'calc(var(--poster-width, 80px) + 10px)',
        }}
      >
        {project.title}
      </span>
    </motion.button>
  )
}
