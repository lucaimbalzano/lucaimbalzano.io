'use client'

import {
  ChurchIcon,
  HomeIcon,
  LanguagesIcon,
  type LucideIcon,
  MapPinnedIcon,
  ShieldCheckIcon,
  UsersIcon
} from 'lucide-react'

const iconMap = {
  Church: ChurchIcon,
  Home: HomeIcon,
  Languages: LanguagesIcon,
  MapPinned: MapPinnedIcon,
  ShieldCheck: ShieldCheckIcon,
  Users: UsersIcon
} as const satisfies Record<string, LucideIcon>

type IconName = keyof typeof iconMap

type Feature = {
  icon: IconName
  title: string
  description: string
}

type FeatureGridProps = {
  items: Feature[]
}

const FeatureGrid = (props: FeatureGridProps) => {
  const { items } = props

  return (
    <div className='not-prose my-8 grid gap-4 sm:grid-cols-2'>
      {items.map((feature) => {
        const Icon = iconMap[feature.icon]

        return (
          <div
            key={feature.title}
            className='shadow-xs flex gap-4 rounded-lg border p-4 dark:bg-zinc-900'
          >
            <div className='bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg'>
              <Icon className='text-foreground size-5' aria-hidden />
            </div>
            <div className='space-y-1'>
              <div className='font-semibold'>{feature.title}</div>
              <p className='text-muted-foreground text-sm'>{feature.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureGrid
