'use client'

import { useEffect, useRef, useState } from 'react'

// Same decode effect as https://ascii.rest/scramble/ (MIT, @bas3line):
// characters flicker through glyphs and settle left to right.
const GLYPHS = String.raw`!<>-_\/[]{}=+*^?#%&$@0123456789abcdefxyz`
const LEAD = 0.25 // seconds of pure noise before the first character settles
const IN = 0.035 // seconds between characters settling
const JITTER = 0.12
const TICK = 1 / 20 // glyph change rate, 20 fps

type ScrambleTextProps = {
  text: string
}

const ScrambleText = (props: ScrambleTextProps) => {
  const { text } = props
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(text)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let started = false
    const chars = Array.from(new Intl.Segmenter().segment(text), (s) => s.segment)
    const settle = chars.map((_, i) => LEAD + i * IN + Math.random() * JITTER)
    const end = Math.max(...settle)

    const run = () => {
      const start = performance.now()
      let lastTick = -1
      const frame = (now: number) => {
        const t = (now - start) / 1000
        const tick = Math.floor(t / TICK)
        if (tick !== lastTick) {
          lastTick = tick
          setDisplay(
            chars
              .map((c, i) =>
                c === ' ' || t >= settle[i]! ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              )
              .join('')
          )
        }
        if (t < end) raf = requestAnimationFrame(frame)
        else setDisplay(text)
      }
      raf = requestAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) return
        started = true
        observer.disconnect()
        run()
      },
      { threshold: 0.6 }
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [text])

  return (
    <>
      <span className='sr-only'>{text}</span>
      <span ref={ref} aria-hidden>
        {display}
      </span>
    </>
  )
}

export default ScrambleText
