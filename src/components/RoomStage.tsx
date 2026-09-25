'use client'

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

// Where the mobile view opens, as a fraction of the room's width: the poster wall.
const MOBILE_START_X = 0.76

type RoomStageProps = {
  children: ReactNode
}

// Desktop: a plain full-screen layer, so the room renders exactly as before.
// Mobile: the room is full height and wider than the screen, so it scrolls
// sideways, opening centered on the poster wall.
export default function RoomStage({ children }: RoomStageProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const startScrollLeft = useRef(0)
  const [hasPanned, setHasPanned] = useState(false)

  useLayoutEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    if (scroller.scrollWidth > scroller.clientWidth) {
      scroller.scrollLeft = scroller.scrollWidth * MOBILE_START_X - scroller.clientWidth / 2
      startScrollLeft.current = scroller.scrollLeft
    }
    // Mobile keeps the room hidden until it's scrolled into place (see the stage's classes)
    scroller.dataset.ready = 'true'
  }, [])

  return (
    <>
      {/* layoutScroll lets the poster -> modal animation account for the scroll offset */}
      <motion.div
        ref={scrollerRef}
        layoutScroll
        data-room-scroller
        onScroll={(e) => {
          if (Math.abs(e.currentTarget.scrollLeft - startScrollLeft.current) > 8) setHasPanned(true)
        }}
        className="group absolute inset-0 mobile:overflow-x-auto mobile:overflow-y-hidden mobile:overscroll-x-contain mobile:no-scrollbar"
      >
        <div className="absolute inset-0 mobile:relative mobile:h-full mobile:w-[calc(100dvh*2752/1536)] mobile:opacity-0 mobile:transition-opacity mobile:duration-500 mobile:group-data-ready:opacity-100">
          {children}
        </div>
      </motion.div>

      <div
        className={`hidden mobile:block absolute left-1/2 -translate-x-1/2 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 pointer-events-none transition-opacity duration-500 ${
          hasPanned ? 'opacity-0' : ''
        }`}
      >
        <div className="animate-nudge whitespace-nowrap text-[11px] font-semibold tracking-widest text-white/85 bg-black/45 backdrop-blur-sm px-3.5 py-2 rounded-full">
          ‹ SWIPE TO LOOK AROUND
        </div>
      </div>
    </>
  )
}
