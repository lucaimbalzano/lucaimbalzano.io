import { Avatar, AvatarFallback, AvatarImage } from '@simbashrd/ui'

const AvatarDemo = () => {
  return (
    <Avatar>
      <AvatarImage src='https://github.com/simbashrd.png' alt='@simbashrd' />
      <AvatarFallback>TH</AvatarFallback>
    </Avatar>
  )
}

export default AvatarDemo
