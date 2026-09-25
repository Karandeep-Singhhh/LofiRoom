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

          {/* Mobile: the fixed 2:3 card can't fit the tracklist, so it becomes a scrolling column */}
          <motion.div
            layoutId={`poster-${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#e8e8e8] rounded-sm overflow-hidden shadow-2xl w-[min(530px,90vw)] aspect-2/3 max-h-[92dvh] mobile:w-[min(530px,calc(100vw-28px))] mobile:aspect-auto mobile:max-h-none"
          >
            {/* Album poster layout (scrolls only if the screen is too short for everything) */}
            <div className="absolute inset-0 flex flex-col p-6 text-black overflow-y-auto mobile:relative mobile:max-h-[calc(100dvh-5rem)] mobile:overscroll-contain mobile:pb-0">
              {/* Title */}
              <h2 className="text-center text-2xl font-bold tracking-tight mb-3 mobile:px-8">
                {project.title}
              </h2>

              {/* Cover art — takes whatever height the tracklist leaves (up to 3/4 width),
                  so every track stays visible and the card fits short laptop screens */}
              <div className="flex-1 min-h-30 mb-4 @container-[size] mobile:flex-none mobile:@container-normal">
                <div className="relative mx-auto aspect-square w-[min(100cqh,75cqw)] border border-black/20 mobile:w-2/3">
                  <Image
                    src={project.posterImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="420px"
                  />
                </div>
              </div>

              {/* Tracklist + palette/artist row */}
              {/* (mobile: artist row stacks above a full-width tracklist) */}
              <div className="flex gap-4 mb-4 shrink-0 mobile:flex-col-reverse mobile:gap-3">
                {/* Tracklist on left */}
                <div className="flex-1 text-[13px] leading-snug font-medium space-y-0.5 mobile:space-y-1.5">
                  {project.tracklist.map((track, i) => (
                    <div key={i}>{track}</div>
                  ))}
                </div>

                {/* Right column: palette + artist (narrow, so long titles wrap instead of squeezing the tracklist) */}
                <div className="flex flex-col items-end gap-2 shrink-0 max-w-36 mobile:max-w-none mobile:flex-row-reverse mobile:justify-between mobile:pb-3 mobile:border-b mobile:border-black/20">
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
                  <div className="text-right mobile:text-left">
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

              {/* Action buttons - GitHub, Demo (mobile: pinned to the bottom while the card scrolls) */}
              <div className="flex gap-2 mt-3 mobile:sticky mobile:bottom-0 mobile:-mx-6 mobile:px-6 mobile:pt-3 mobile:pb-4 mobile:mt-4 mobile:bg-[#e8e8e8] mobile:border-t mobile:border-black/15">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-center text-xs font-semibold tracking-wider py-2 border border-black/40 hover:bg-black hover:text-[#f5f0e8] transition-colors mobile:py-3.5"
                >
                  VIEW ON GITHUB
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 text-center text-xs font-semibold tracking-wider py-2 border border-black/40 hover:bg-black hover:text-[#f5f0e8] transition-colors mobile:py-3.5"
                  >
                    VIEW DEMO
                  </a>
                )}
              </div>
            </div>

            {/* Phones have no Esc key and little backdrop to tap, so give them a close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="hidden mobile:flex absolute top-2 right-2 z-10 w-9 h-9 items-center justify-center rounded-full bg-black/10 text-black text-xl leading-none"
            >
              ×
            </button>
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
