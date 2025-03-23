import type { Metadata, ResolvingMetadata } from 'next'
import type { WebPage, WithContext } from 'schema-dts'

import { flags } from '@simbashrd/env'
import { i18n } from '@simbashrd/i18n/config'
import { getTranslations, setRequestLocale } from '@simbashrd/i18n/server'

import PageTitle from '@/components/page-title'
import { getCurrentUser } from '@/lib/auth'
import { SITE_URL } from '@/lib/constants'
import { getLocalizedPath } from '@/utils/get-localized-path'

import MessageBox from './message-box'
import Messages from './messages'
import Pinned from './pinned'
import SignIn from './sign-in'

type PageProps = {
  params: Promise<{
    locale: string
  }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export const generateStaticParams = (): Array<{ locale: string }> => {
  return i18n.locales.map((locale) => ({ locale }))
}

export const generateMetadata = async (
  props: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { locale } = await props.params
  const previousOpenGraph = (await parent).openGraph ?? {}
  const previousTwitter = (await parent).twitter ?? {}
  const t = await getTranslations({ locale, namespace: 'guestbook' })
  const title = t('title')
  const description = t('description')
  const url = getLocalizedPath({ slug: '/guestbook', locale })

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      ...previousOpenGraph,
      url,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

const Page = async (props: PageProps) => {
  if (!flags.auth) return null

  const { locale } = await props.params
  setRequestLocale(locale)
  const user = await getCurrentUser()
  const t = await getTranslations()
  const title = t('guestbook.title')
  const description = t('guestbook.description')
  const url = `${SITE_URL}${getLocalizedPath({ slug: '/guestbook', locale })}`

  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: t('metadata.site-title'),
      url: SITE_URL
    }
  }
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageTitle title={title} description={description} />
      <div className='mx-auto max-w-xl space-y-10'>
        <Pinned />
        {user ? <MessageBox user={user} /> : <SignIn />}
        <Messages />
      </div>
    </>
  )
}

export default Page
