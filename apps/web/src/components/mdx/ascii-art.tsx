'use client'

import { Ascii } from 'ascii.rest/react'

type AsciiArtProps = {
  /** Piece name from ascii.rest (https://ascii.rest), loaded on demand. */
  piece: 'lantern-lake' | 'kyoto-dusk'
  caption?: string
}

const AsciiArt = (props: AsciiArtProps) => {
  const { piece, caption } = props

  return (
    <figure className='not-prose my-8'>
      <Ascii piece={piece} label={caption} className='block w-full overflow-hidden rounded-xl' />
      {caption ? (
        <figcaption className='text-muted-foreground mt-4 text-center text-sm'>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default AsciiArt
