'use client'

import { useState } from 'react'
import Image from 'next/image'
import NeonSign from '@/components/NeonSign'
import ProjectPoster from '@/components/ProjectPoster'
import ProjectModal from '@/components/ProjectModal'
import { projects, type Project } from '@/data/projects'
import ContactMenu from '@/components/ContactMenu'
import RoomStage from '@/components/RoomStage'
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main className="relative w-screen h-screen mobile:h-dvh overflow-hidden bg-black">
      <Analytics />
      <RoomStage>
        <Image
          src="/images/room.jpg"
          alt="Lofi room workspace"
          fill
          priority
          className="object-cover"
          // on mobile the room is ~1.8x the screen height wide (see RoomStage)
          sizes="(orientation: portrait) and (max-width: 1024px) 180vh, 100vw"
        />

        {/* Neon PROJECTS sign */}
        <div
          className="absolute"
          style={{
            left: '78%',
            top: 'var(--sign-top, 14%)',
            transform: 'translate(-50%, -50%) skewX(17deg) rotate(17deg)',
          }}
        >
          <NeonSign text="PROJECTS" />
        </div>

        {/* Project poster wall — 2x2 flex rows */}
        <div
          className="absolute flex flex-col"
          style={{
            left: '76%',
            top: '35%',
            transform: 'translate(-50%, -50%) skewX(17deg) skewY(0deg) rotate(17deg)',
            gap: 'var(--wall-row-gap, 15px)',
          }}
        >
          <div className="flex flex-row" style={{ gap: 'var(--wall-col-gap, 50px)' }}>
            {projects.slice(0, 2).map((project) => (
              <ProjectPoster
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
          <div className="flex flex-row" style={{ gap: 'var(--wall-col-gap, 50px)' }}>
            {projects.slice(2, 4).map((project) => (
              <ProjectPoster
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </RoomStage>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ContactMenu />
    </main>
  )
}