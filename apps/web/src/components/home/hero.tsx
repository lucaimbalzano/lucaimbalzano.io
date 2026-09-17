'use client'

import { useTranslations } from '@simbashrd/i18n/client'
import Spline from '@splinetool/react-spline'
import { motion } from 'motion/react'
import { useState } from 'react'

const gradientStyle = {
  background: 'linear-gradient(90deg, rgb(129 167 195), #FFFFFF 45%, #FFFFFF)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text' as const,
  color: 'transparent'
}

const GradientAccent = (props: { children: React.ReactNode }) => {
  const { children } = props
  const [forward, setForward] = useState(() => Math.random() > 0.5)

  return (
    <motion.span
      style={gradientStyle}
      animate={{
        backgroundPosition: forward ? ['0% 0', '200% 0'] : ['200% 0', '0% 0']
      }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        setForward(Math.random() > 0.45)
      }}
    >
      {children}
    </motion.span>
  )
}

const Hero = () => {
  const t = useTranslations()

  return (
    <div className='my-16 space-y-6'>
      <div className='flex flex-col justify-between gap-8 md:flex-row md:items-center'>
        <div className='flex flex-col gap-4 text-2xl font-bold sm:text-3xl'>
          <h1 className='flex flex-col flex-wrap gap-2 text-2xl font-bold text-black sm:text-3xl dark:text-white'>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeOut' }}
              className='flex flex-wrap gap-x-2'
            >
              <span>{t('homepage.hero.line-one-prefix')}</span>
              <GradientAccent>{t('homepage.hero.line-one-accent')}</GradientAccent>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: 'easeOut' }}
              className='flex flex-wrap gap-x-2'
            >
              <span>{t('homepage.hero.line-two-prefix')}</span>
              <GradientAccent>{t('homepage.hero.line-two-accent')}</GradientAccent>
            </motion.div>
          </h1>
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
