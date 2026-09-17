'use client'

import '@/styles/image-zoom.css'
import 'react-medium-image-zoom/dist/styles.css'

import { Maximize2Icon, Minimize2Icon } from 'lucide-react'
import Zoom from 'react-medium-image-zoom'

type ImageZoomProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof Zoom>

const IconZoom = () => <Maximize2Icon className='size-4' aria-hidden />
const IconUnzoom = () => <Minimize2Icon className='size-4' aria-hidden />

const ImageZoom = (props: ImageZoomProps) => {
  const { children, ...rest } = props

  return (
    <Zoom
      zoomMargin={16}
      a11yNameButtonZoom='Expand image'
      a11yNameButtonUnzoom='Minimize image'
      IconZoom={IconZoom}
      IconUnzoom={IconUnzoom}
      {...rest}
    >
      {children}
    </Zoom>
  )
}

export default ImageZoom
