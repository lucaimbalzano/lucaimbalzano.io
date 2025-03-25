'use client'

import { useTranslations } from '@simbashrd/i18n/client'
import Spline from '@splinetool/react-spline'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const TEXTS = [
  {
    key: 'amazing',
    className:
      'bg-clip-text text-center text-transparent bg-linear-to-r from-[#ff1835] to-[#ffc900]'
  },
  {
    key: 'stunning',
    className:
      'bg-clip-text text-center text-transparent bg-linear-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    key: 'fantastic',
    className:
      'bg-clip-text text-center text-transparent bg-linear-to-r from-[#7f00de] to-[#ff007f]'
  },
  {
    key: 'attractive',
    className:
      'bg-clip-text text-center text-transparent bg-linear-to-r from-[#2ecc70] to-[#1ca085]'
  }
] as const

const SPEED = 2

const variants = {
  enter: {
    y: 100,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -100,
    opacity: 0
  }
}

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const t = useTranslations()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TEXTS.length)
    }, SPEED * 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const textItem = TEXTS[currentIndex]
  if (!textItem) return null

  return (
    <div className='my-16 space-y-6'>
      <div className='flex flex-col justify-between gap-8 md:flex-row md:items-center'>
        <div className='flex flex-col gap-4 text-2xl font-bold sm:text-3xl'>
          <h1 className='flex flex-col flex-wrap gap-2 text-2xl font-bold sm:text-3xl'>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeOut' }}
            >
              {t('homepage.hero.title-top')}
            </motion.div>
            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <motion.h1
                style={{
                  background: 'linear-gradient(90deg, rgb(129 167 195), #FFFFFF, #FFFFFF)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text', // Make the background clip to the text
                  color: 'transparent' // Text is transparent, the gradient fills it
                }}
                animate={{
                  backgroundPosition: ['200% 0', '0% 0', '200% 0'] // Animate the gradient's position
                }}
              >
                {t('homepage.hero.title-top-second')}
              </motion.h1>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeOut' }}
              className='flex gap-2'
            >
              <motion.div
                layout
                key='title-middle-left'
                className='leading-[30px] sm:leading-[45px]'
              >
                {t('homepage.hero.title-middle-left')}
              </motion.div>
              <div className='relative overflow-hidden'>
                <AnimatePresence mode='popLayout'>
                  <motion.div
                    key={currentIndex}
                    variants={variants}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    layout
                    transition={{
                      type: 'tween',
                      duration: 0.3
                    }}
                    className='inline-flex items-center justify-center leading-[30px] sm:leading-[45px]'
                  >
                    <span className={textItem.className}>{t(`homepage.hero.${textItem.key}`)}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
              <motion.div
                layout
                key='title-middle-right'
                className='leading-[30px] sm:leading-[45px]'
              >
                {t('homepage.hero.title-middle-right')}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeOut' }}
            >
              {t('homepage.hero.title-bottom')}
            </motion.div>
          </h1>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeOut' }}
            className='text-muted-foreground text-sm'
          >
            {t('homepage.hero.location-timezone')}
          </motion.div>
        </div>
        <div className='relative h-96 w-96'>
          <Spline
            scene='https://prod.spline.design/eK88pRzI7VUHDuIt/scene.splinecode'
            className={`h-full w-full scale-150`}
            style={{ maxWidth: '80%', maxHeight: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
