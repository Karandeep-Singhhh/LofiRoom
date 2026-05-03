'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import type { Project } from '@/data/projects'
import Image from 'next/image'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Darkened backdrop with blur */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          <motion.div
            layoutId={`poster-${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#e8e8e8] rounded-sm overflow-hidden shadow-2xl"
            style={{
              width: 'min(530px, 90vw)',
              aspectRatio: '2 / 3',
            }}
          >
            {/* Album poster layout */}
            <div className="absolute inset-0 flex flex-col p-6 text-black overflow-hidden">
              {/* Title */}
              <h2 className="text-center text-2xl font-bold tracking-tight mb-3">
                {project.title}
              </h2>

              {/* Cover art */}
              <div className="relative w-3/4 mx-auto aspect-square mb-4 border border-black/20 shrink-0">
                <Image
                  src={project.posterImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="420px"
                />
              </div>

              {/* Tracklist + palette/artist row */}
              <div className="flex gap-4 mb-4 flex-1 min-h-0">
                {/* Tracklist on left */}
                <div className="flex-1 text-[13px] leading-snug font-medium space-y-0.5 overflow-hidden">
                  {project.tracklist.map((track, i) => (
                    <div key={i}>{track}</div>
                  ))}
                </div>

                {/* Right column: palette + artist */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  {/* Tech stack as color swatches */}
                  <div className="flex gap-1">
                    {project.techStack.map((tech) => (
                      <div
                        key={tech}
                        className="w-4 h-4 border border-black/20"
                        style={{ backgroundColor: getTechColor(tech) }}
                        title={tech}
                      />
                    ))}
                  </div>

                  {/* Artist name */}
                  <div className="text-right">
                    <div className="text-xs font-semibold tracking-wider">
                      KARANDEEP SINGH
                    </div>
                    <div className="text-lg font-bold tracking-tight uppercase leading-tight">
                      {project.title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom metadata */}
              <div className="flex justify-between items-end text-[11px] tracking-wider pt-2 border-t border-black/20">
                <div>
                  <div className="font-semibold">TECH STACK:</div>
                  <div className="opacity-80">
                    {project.techStack.map((tech, i) => (
                      <span key={tech}>
                        <span style={{ color: getTechColor(tech) }}>{tech}</span>
                        {i < project.techStack.length - 1 && <span className="text-black"> · </span>}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <div className="font-semibold">RELEASED</div>
                  <div className="opacity-80">{project.releaseDate}</div>
                </div>
              </div>

              {/* Action buttons - GitHub, Demo */}
              <div className="flex gap-2 mt-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center text-xs font-semibold tracking-wider py-2 border border-black/40 hover:bg-black hover:text-[#f5f0e8] transition-colors"
                >
                  VIEW ON GITHUB
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 text-center text-xs font-semibold tracking-wider py-2 border border-black/40 hover:bg-black hover:text-[#f5f0e8] transition-colors"
                  >
                    VIEW DEMO
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function getTechColor(tech: string): string {
  const colors: Record<string, string> = {
    Python: '#3776ab',
    PyTorch: '#ee4c2c',
    MediaPipe: '#00897b',
    OpenCV: '#5c3ee8',
    'scikit-learn': '#f7931e',
    pandas: '#150458',
    NumPy: '#013243',
    XGBoost: '#0099cc',
    yfinance: '#7e1717',
    FastAPI: '#009688',
    'Anthropic API': '#d97757',
    Docker: '#2496ed',
    pytest: '#0a9edc',
    'Next.js': '#000000',
    TypeScript: '#3178c6',
    Tailwind: '#06b6d4',
    'Framer Motion': '#bb4b96',
    Vercel: '#000000',
  }
  return colors[tech] || '#888888'
}
