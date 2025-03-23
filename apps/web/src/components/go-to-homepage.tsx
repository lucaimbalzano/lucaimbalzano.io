'use client'

import { useTranslations } from '@simbashrd/i18n/client'
import { buttonVariants } from '@simbashrd/ui'

import Link from './link'

const GoToHomepage = () => {
  const t = useTranslations()

  return (
    <Link href='/' className={buttonVariants()}>
      {t('component.go-to-homepage')}
    </Link>
  )
}

export default GoToHomepage
