import { useTranslations } from '@simbashrd/i18n/client'
import { i18n, supportedLanguages } from '@simbashrd/i18n/config'
import { usePathname, useRouter } from '@simbashrd/i18n/routing'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@simbashrd/ui'
import { LanguagesIcon } from 'lucide-react'
import { useTransition } from 'react'

const LocaleSwitcher = () => {
  const t = useTranslations()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='size-9 p-0' aria-label={t('layout.change-language')}>
          <LanguagesIcon className='size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {i18n.locales.map((locale) => (
          <Item key={locale} locale={locale} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type ItemProps = {
  locale: string
}

const Item = (props: ItemProps) => {
  const { locale } = props
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = () => {
    startTransition(() => {
      router.replace(pathname, { locale })
    })
  }

  return (
    <DropdownMenuItem key={locale} disabled={isPending} onClick={switchLanguage}>
      {supportedLanguages.find((l) => l.code === locale)?.label}
    </DropdownMenuItem>
  )
}

export default LocaleSwitcher
