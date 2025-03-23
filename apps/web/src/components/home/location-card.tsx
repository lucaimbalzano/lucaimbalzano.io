'use client'

import { useTranslations } from '@simbashrd/i18n/client'
import createGlobe from 'cobe'
import { MapPinIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'

const LocationCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const fadeMask = 'radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)'
  const t = useTranslations()

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001
    }
  }))

  useEffect(() => {
    let width = 0

    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener('resize', onResize)
      }
    }
    onResize()

    if (!canvasRef.current) return

    let phi = 0
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16_000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [1, 1, 1],
      glowColor: [1.2, 1.2, 1.2],
      markers: [{ location: [42.5193, 12.5094], size: 0.1 }],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi -= 0.006
        state.width = width * 2
        state.height = width * 2
      }
    })
    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1'
      }
    })

    return () => {
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [r])

  return (
    <div className='shadow-feature-card relative flex h-60 flex-col gap-6 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <MapPinIcon className='size-[18px]' />
        <h2 className='text-sm'>{t('homepage.about-me.location')}</h2>
      </div>
      <div className='absolute inset-x-0 bottom-[-190px] mx-auto aspect-square h-[388px] [@media(max-width:420px)]:bottom-[-140px] [@media(max-width:420px)]:h-[320px] [@media(min-width:768px)_and_(max-width:858px)]:h-[350px]'>
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            placeItems: 'center',
            placeContent: 'center',
            overflow: 'visible'
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '1/1',
              maxWidth: 800,
              WebkitMaskImage: fadeMask,
              maskImage: fadeMask
            }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={(e) => {
                pointerInteracting.current = e.clientX - pointerInteractionMovement.current
                if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
              }}
              onPointerUp={() => {
                pointerInteracting.current = null
                if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
              }}
              onPointerOut={() => {
                pointerInteracting.current = null
                if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
              }}
              onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                  const delta = e.clientX - pointerInteracting.current
                  pointerInteractionMovement.current = delta
                  api.start({
                    r: delta / 200
                  })
                }
              }}
              onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                  const delta = e.touches[0].clientX - pointerInteracting.current
                  pointerInteractionMovement.current = delta
                  api.start({
                    r: delta / 100
                  })
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                contain: 'layout paint size',
                cursor: 'auto',
                userSelect: 'none'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationCard
