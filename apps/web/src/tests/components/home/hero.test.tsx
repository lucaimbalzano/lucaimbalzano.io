import { NextIntlClientProvider } from '@simbashrd/i18n/client'
import messages from '@simbashrd/i18n/messages/en.json'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Hero from '@/components/home/hero'

describe('<Hero />', () => {
  it('should have a hero image', () => {
    render(
      <NextIntlClientProvider locale='en' messages={messages}>
        <Hero />
      </NextIntlClientProvider>
    )

    expect(screen.getByAltText('Lucas Imba')).toBeInTheDocument()
  })
})
