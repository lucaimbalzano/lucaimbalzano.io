import { useMDXComponent } from '@content-collections/mdx/react'
import { BlurImage, CodeBlock, Kbd } from '@simbashrd/ui'

import ImageZoom from '../image-zoom'
import Link from '../link'

import FeatureGrid from './feature-grid'
import Heading from './heading'
import Icon from './icon'
import ImageCarousel from './image-carousel'
import ItemGrid from './item-grid'
import LinkCard from './link-card'
import Logo from './logo'
import ObsidianGraph from './obsidian-graph'
import Table from './table'
import TreeView from './tree-view'
import Video from './video'

type MdxProps = {
  code: string
}

const components = {
  h2: (props: React.ComponentProps<'h2'>) => <Heading as='h2' {...props} />,
  h3: (props: React.ComponentProps<'h3'>) => <Heading as='h3' {...props} />,
  h4: (props: React.ComponentProps<'h4'>) => <Heading as='h4' {...props} />,
  h5: (props: React.ComponentProps<'h5'>) => <Heading as='h5' {...props} />,
  h6: (props: React.ComponentProps<'h6'>) => <Heading as='h6' {...props} />,
  a: (props: React.ComponentProps<'a'>) => {
    const { children, ...rest } = props

    return (
      <Link
        className='hover:text-foreground text-cyan-600 no-underline transition-colors'
        {...rest}
      >
        {children}
      </Link>
    )
  },
  Image: (props: React.ComponentProps<typeof BlurImage>) => {
    const { alt, src, ...rest } = props
    const zoomSrc = typeof src === 'string' ? src : undefined

    return (
      <>
        <ImageZoom zoomImg={zoomSrc ? { src: zoomSrc, alt } : undefined}>
          <BlurImage className='rounded-lg border' alt={alt} src={src} {...rest} />
        </ImageZoom>
        <figcaption className='mt-4 text-center'>{alt}</figcaption>
      </>
    )
  },
  pre: CodeBlock,

  // Custom components
  Table,
  ItemGrid,
  FeatureGrid,
  Icon,
  ImageCarousel,
  ObsidianGraph,
  Video,
  LinkCard,
  Logo,
  TreeView,
  Kbd
}

const Mdx = (props: MdxProps) => {
  const { code } = props
  const MDXContent = useMDXComponent(code)

  return (
    <div className='prose w-full'>
      <MDXContent components={components} />
    </div>
  )
}

export default Mdx
