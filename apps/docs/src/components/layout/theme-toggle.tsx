'use client'

import { Button } from '@simbashrd/ui'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
      aria-label='Toggle theme'
    >
      <SunIcon className='size-5 dark:hidden' />
      <MoonIcon className='hidden size-5 dark:block' />
    </Button>
  )
}

export default ThemeToggle
