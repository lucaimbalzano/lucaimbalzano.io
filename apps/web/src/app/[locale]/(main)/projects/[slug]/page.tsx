import type { Metadata, ResolvingMetadata } from 'next'
import type { SoftwareApplication, WithContext } from 'schema-dts'

// eslint-disable-next-line sonarjs/deprecation -- pending next-intl root-params migration
import { setRequestLocale } from '@simbashrd/i18n/server'
import { BlurImage } from '@simbashrd/ui'
import { allProjects } from 'content-collections'
import { notFound } from 'next/navigation'

import Mdx from '@/components/mdx'
import MobileTableOfContents from '@/components/mobile-table-of-contents'
import TableOfContents from '@/components/table-of-contents'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { getLocalizedPath } from '@/utils/get-localized-path'

import Header from './header'

type PageProps = {
  params: Promise<{
    slug: string
    locale: string
  }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export const generateStaticParams = (): Array<{ slug: string; locale: string }> => {
  return allProjects.map((project) => ({
    slug: project.slug,
    locale: project.locale
  }))
}

export const generateMetadata = async (
  props: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug, locale } = await props.params

  const project = allProjects.find((p) => p.slug === slug && p.locale === locale)

  if (!project) {
    return {}
  }

  const { name, description } = project
  const previousTwitter = (await parent).twitter ?? {}
  const previousOpenGraph = (await parent).openGraph ?? {}
  const url = getLocalizedPath({ slug: `/projects/${slug}`, locale })

  return {
    title: name,
    description: description,
    alternates: {
      canonical: url
    },
    openGraph: {
      ...previousOpenGraph,
      url,
      title: name,
      description: description,
      images: [
        {
          url: `/images/projects/${slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      ...previousTwitter,
      title: name,
      description: description,
      images: [
        {
          url: `/images/projects/${slug}/cover.png`,
          width: 1280,
          height: 832,
          alt: description
        }
      ]
    }
  }
}

const Page = async (props: PageProps) => {
  const { slug, locale } = await props.params
  // next-intl still requires this in App Router layouts/pages until root-params migration
  // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation -- pending next-intl root-params migration
  setRequestLocale(locale)

  const project = allProjects.find((p) => p.slug === slug && p.locale === locale)
  const localizedPath = getLocalizedPath({ slug: `/projects/${slug}`, locale })
  const url = `${SITE_URL}${localizedPath}`

  if (!project) {
    notFound()
  }

  const { name, code, description, github, toc } = project

  const jsonLd: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: 'WebApplication',
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL
    },
    sameAs: [github],
    screenshot: `${SITE_URL}/images/projects/${slug}/cover.png`
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header {...project} />
      <BlurImage
        src={`/images/projects/${slug}/cover.png`}
        width={1280}
        height={832}
        alt={name}
        className='my-12 rounded-lg'
        lazy={false}
      />
      <div className='mt-8 flex flex-col justify-between lg:flex-row'>
        <article className='w-full lg:w-[670px]'>
          <Mdx code={code} />
        </article>
        <aside className='lg:min-w-[270px] lg:max-w-[270px]'>
          <div className='sticky top-24'>
            {toc.length > 0 ? <TableOfContents toc={toc} /> : null}
          </div>
        </aside>
      </div>
      {toc.length > 0 ? <MobileTableOfContents toc={toc} /> : null}
    </>
  )
}

export default Page
