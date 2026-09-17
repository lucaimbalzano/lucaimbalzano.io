'use client'

import {
  ChurchIcon,
  HomeIcon,
  type LucideIcon,
  MapPinnedIcon,
  ShieldCheckIcon,
  UsersIcon
} from 'lucide-react'

const icons = {
  Church: ChurchIcon,
  Home: HomeIcon,
  MapPinned: MapPinnedIcon,
  ShieldCheck: ShieldCheckIcon,
  Users: UsersIcon
} as const satisfies Record<string, LucideIcon>

type IconName = keyof typeof icons

type IconProps = {
  name: IconName
  className?: string
}

const Icon = (props: IconProps) => {
  const { name, className = 'inline size-5 align-text-bottom' } = props
  const LucideIcon = icons[name]

  return <LucideIcon className={className} aria-hidden />
}

export default Icon
export type { IconName }
