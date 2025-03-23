'use client'

import {
  SiAmazonapigateway,
  SiAmazoncloudwatch,
  SiAmazonec2,
  SiAmazonwebservices,
  SiAwslambda,
  SiCplusplus,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiMiro,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpenapiinitiative,
  SiOpenstreetmap,
  SiOracle,
  SiPostgresql,
  SiPuppeteer,
  SiPython,
  SiReact,
  SiRedis,
  SiSelenium,
  SiServerless,
  SiSketchup,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiUnrealengine,
  SiVite
} from '@icons-pack/react-simple-icons'
import { useTranslations } from '@simbashrd/i18n/client'
import { Marquee } from '@simbashrd/ui'
import { ZapIcon } from 'lucide-react'

const StacksCard = () => {
  const t = useTranslations()

  return (
    <div className='shadow-feature-card h-70 flex flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm'>{t('homepage.about-me.stacks')}</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiHtml5 className='size-10' />
        <SiCss3 className='size-10' />
        <SiJavascript className='size-10' />
        <SiTypescript className='size-10' />
        <SiFigma className='size-10' />
        <SiTailwindcss className='size-10' />
        <SiNextdotjs className='size-10' />
        <SiReact className='size-10' />
        <SiPython className='size-10' />
        <SiPostgresql className='size-10' />
        <SiMongodb className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiFirebase className='size-10' />
        <SiVite className='size-10' />
        <SiAwslambda className='size-10' />
        <SiNodedotjs className='size-10' />
        <SiSpringboot className='size-10' />
        <SiMiro className='size-10' />
        <SiAmazoncloudwatch className='size-10' />
        <SiSelenium className='size-10' />
        <SiOpenai className='size-10' />
        <SiOpenapiinitiative className='size-10' />
        <SiAmazonapigateway className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiCplusplus className='size-10' />
        <SiUnrealengine className='size-10' />
        <SiSketchup className='size-10' />
        <SiAmazonec2 className='size-10' />
        <SiGooglecloud className='size-10' />
        <SiAmazonwebservices className='size-10' />
        <SiPuppeteer className='size-10' />
        <SiServerless className='size-10' />
        <SiOpenstreetmap className='size-10' />
        <SiRedis className='size-10' />
        <SiOracle className='size-10' />
        <SiMysql className='size-10' />
      </Marquee>
    </div>
  )
}

export default StacksCard
