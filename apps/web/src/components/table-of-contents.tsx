'use client'

import type { TOC } from '@simbashrd/mdx-plugins'

import { useTranslations } from '@simbashrd/i18n/client'
import { SegmentGroup, SegmentGroupItem } from '@simbashrd/ui'
import { useRouter } from 'next/navigation'

import { DEFAULT_SECTION_ICON, SECTION_ICONS } from '@/components/toc-icons'
import { useScrollspy } from '@/hooks/use-scrollspy'

type TableOfContentsProps = {
  toc: TOC[]
}

const TableOfContents = (props: TableOfContentsProps) => {
  const { toc } = props
  const activeId = useScrollspy(
    toc.map((item) => item.url),
    { rootMargin: '0% 0% -80% 0%' }
  )
  const t = useTranslations()
  const router = useRouter()

  return (
    <div className='hidden pl-4 lg:block'>
      <div className='mb-4'>{t('blog.on-this-page')}</div>
      <SegmentGroup
        orientation='vertical'
        value={activeId}
        onValueChange={(details) => {
          router.push(`#${details.value}`)
        }}
        className='text-sm'
      >
        {toc.map((item) => {
          const isMainSection = item.depth === 2
          const Icon = isMainSection ? (SECTION_ICONS[item.url] ?? DEFAULT_SECTION_ICON) : null

          return (
            <SegmentGroupItem
              key={item.url}
              value={item.url}
              className={isMainSection ? 'flex items-center gap-2' : undefined}
              style={{
                paddingLeft: (item.depth - 1) * 12
              }}
            >
              {Icon ? <Icon className='size-3.5 shrink-0' aria-hidden /> : null}
              {item.title}
            </SegmentGroupItem>
          )
        })}
      </SegmentGroup>
    </div>
  )
}

export default TableOfContents
