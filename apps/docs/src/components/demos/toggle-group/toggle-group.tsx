import { ToggleGroup, ToggleGroupItem } from '@simbashrd/ui'
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react'

const ToggleGroupDemo = () => {
  return (
    <ToggleGroup type='multiple'>
      <ToggleGroupItem value='bold' aria-label='Toggle bold'>
        <BoldIcon className='size-4' />
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Toggle italic'>
        <ItalicIcon className='size-4' />
      </ToggleGroupItem>
      <ToggleGroupItem value='underline' aria-label='Toggle underline'>
        <UnderlineIcon className='size-4' />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ToggleGroupDemo
