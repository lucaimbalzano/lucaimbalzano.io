'use client'

import { BlurImage, Dialog, DialogContent, DialogDescription, DialogTitle } from '@simbashrd/ui'
import { cn } from '@simbashrd/utils'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

type CarouselImage = {
  src: string
  alt: string
  width: number
  height: number
}

type ImageCarouselProps = {
  images: CarouselImage[]
  /** Auto-advance interval in ms. 0 disables. */
  interval?: number
}

const ROTATION = 42
const DEPTH = 180
const SPREAD = 52
const SCROLL_STEP = 140

const ImageCarousel = (props: ImageCarouselProps) => {
  const { images, interval = 4200 } = props
  const count = images.length
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const rootRef = useRef<HTMLElement>(null)
  const inViewRef = useRef(false)
  const scrollAccRef = useRef(0)
  const lastScrollYRef = useRef(0)
  const scrollPauseUntilRef = useRef(0)
  const activeRef = useRef(0)
  const dragX = useMotionValue(0)
  const springX = useSpring(dragX, { stiffness: 320, damping: 36 })

  const go = useCallback(
    (next: number) => {
      if (count === 0) return
      const index = ((next % count) + count) % count
      activeRef.current = index
      setActive(index)
      dragX.set(0)
    },
    [count, dragX]
  )

  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    const el = rootRef.current
    if (!el || count < 2) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = Boolean(entry?.isIntersecting)
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
    }
  }, [count])

  useEffect(() => {
    if (count < 2 || lightboxOpen) return

    lastScrollYRef.current = window.scrollY

    const onScroll = () => {
      if (!inViewRef.current) {
        lastScrollYRef.current = window.scrollY
        scrollAccRef.current = 0
        return
      }

      const y = window.scrollY
      const delta = y - lastScrollYRef.current
      lastScrollYRef.current = y
      scrollAccRef.current += delta

      while (scrollAccRef.current >= SCROLL_STEP) {
        scrollAccRef.current -= SCROLL_STEP
        scrollPauseUntilRef.current = performance.now() + 1800
        go(activeRef.current + 1)
      }
      while (scrollAccRef.current <= -SCROLL_STEP) {
        scrollAccRef.current += SCROLL_STEP
        scrollPauseUntilRef.current = performance.now() + 1800
        go(activeRef.current - 1)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [count, go, lightboxOpen])

  useEffect(() => {
    if (paused || lightboxOpen || interval <= 0 || count < 2) return

    const id = globalThis.setInterval(() => {
      if (!inViewRef.current) return
      if (performance.now() < scrollPauseUntilRef.current) return
      go(activeRef.current + 1)
    }, interval)

    return () => {
      globalThis.clearInterval(id)
    }
  }, [count, go, interval, lightboxOpen, paused])

  if (count === 0) return null

  const current = images[active]!

  return (
    <>
      <figure ref={rootRef} className='not-prose my-8'>
        <div
          className='relative mx-auto h-[240px] w-full touch-pan-y sm:h-[300px] md:h-[340px]'
          style={{ perspective: 1100 }}
        >
          <motion.div
            className='absolute inset-0'
            style={{ x: springX, transformStyle: 'preserve-3d' }}
            drag={lightboxOpen ? false : 'x'}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onHoverStart={() => {
              setPaused(true)
            }}
            onHoverEnd={() => {
              setPaused(false)
            }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -56 || info.velocity.x < -320) go(activeRef.current + 1)
              else if (info.offset.x > 56 || info.velocity.x > 320) go(activeRef.current - 1)
              else dragX.set(0)
            }}
          >
            {images.map((image, index) => {
              const rawOffset = index - active
              let offset = rawOffset
              if (offset > count / 2) offset -= count
              if (offset < -count / 2) offset += count

              const abs = Math.abs(offset)
              const isActive = offset === 0

              return (
                <motion.button
                  key={image.src}
                  type='button'
                  aria-label={isActive ? `Expand ${image.alt}` : image.alt}
                  aria-current={isActive ? true : undefined}
                  className={cn(
                    'absolute left-1/2 top-1/2 w-[78%] max-w-[560px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border bg-zinc-950 shadow-2xl outline-none',
                    'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2',
                    isActive ? 'cursor-zoom-in' : 'cursor-pointer'
                  )}
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={false}
                  animate={{
                    x: `${offset * SPREAD}%`,
                    z: -abs * DEPTH,
                    rotateY: offset * -ROTATION,
                    scale: isActive ? 1 : 0.86 - abs * 0.04,
                    opacity: abs > 2 ? 0 : 1 - abs * 0.22,
                    filter: isActive ? 'brightness(1)' : 'brightness(0.72)',
                    zIndex: 20 - abs
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                  onClick={() => {
                    if (!isActive) {
                      go(index)
                      return
                    }
                    setLightboxOpen(true)
                  }}
                  tabIndex={isActive ? 0 : -1}
                >
                  <BlurImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className='pointer-events-none aspect-video w-full object-cover'
                    imageClassName='m-0 size-full object-cover'
                    lazy={index !== 0}
                  />
                  <div
                    aria-hidden
                    className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10'
                  />
                </motion.button>
              )
            })}
          </motion.div>
        </div>

        <div className='mt-5 flex flex-col items-center gap-3'>
          <AnimatePresence mode='wait'>
            <motion.figcaption
              key={current.alt}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className='text-muted-foreground max-w-xl text-center text-sm'
            >
              {current.alt}
            </motion.figcaption>
          </AnimatePresence>

          {count > 1 ? (
            <div className='flex items-center gap-2'>
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type='button'
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={index === active ? true : undefined}
                  onClick={() => {
                    go(index)
                  }}
                  className={cn(
                    'h-1.5 rounded-full transition-all',
                    index === active
                      ? 'bg-foreground w-6'
                      : 'bg-muted-foreground/40 hover:bg-muted-foreground/70 w-1.5'
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>
      </figure>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className='border-border/60 bg-background/95 max-h-[96vh] w-[min(96vw,1400px)] max-w-none overflow-hidden p-2 sm:p-3'>
          <DialogTitle className='sr-only'>{current.alt}</DialogTitle>
          <DialogDescription className='sr-only'>Fullscreen product preview</DialogDescription>
          <div className='relative max-h-[90vh] overflow-auto'>
            <BlurImage
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className='w-full rounded-lg'
              imageClassName='m-0 h-auto w-full object-contain'
              lazy={false}
            />
          </div>
          <p className='text-muted-foreground mt-2 px-1 pb-1 text-center text-sm'>{current.alt}</p>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ImageCarousel
