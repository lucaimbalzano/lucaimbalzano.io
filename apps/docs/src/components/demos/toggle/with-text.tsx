import { Toggle } from '@simbashrd/ui'
import { ItalicIcon } from 'lucide-react'

const ToggleWithTextDemo = () => {
  return (
    <Toggle aria-label='Toggle italic'>
      <ItalicIcon className='size-4' />
      Italic
    </Toggle>
  )
}

export default ToggleWithTextDemo
