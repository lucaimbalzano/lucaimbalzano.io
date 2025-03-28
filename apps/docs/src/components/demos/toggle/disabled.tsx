import { Toggle } from '@simbashrd/ui'
import { UnderlineIcon } from 'lucide-react'

const ToggleDisabledDemo = () => {
  return (
    <Toggle aria-label='Toggle underline' disabled>
      <UnderlineIcon className='size-4' />
    </Toggle>
  )
}

export default ToggleDisabledDemo
