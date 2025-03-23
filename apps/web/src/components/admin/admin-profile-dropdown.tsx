import { useTranslations } from '@simbashrd/i18n/client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Skeleton
} from '@simbashrd/ui'
import { useSession } from 'next-auth/react'

import { useDialogsStore } from '@/store/dialogs'
import { getAvatarAbbreviation } from '@/utils/get-avatar-abbreviation'
import { getDefaultUser } from '@/utils/get-default-user'

const AdminProfileDropdown = () => {
  const { data, status } = useSession()
  const t = useTranslations()
  const { setIsSignInOpen } = useDialogsStore()

  if (status === 'loading') {
    return <Skeleton className='size-9 rounded-full' />
  }

  if (!data) {
    return (
      <Button
        size='sm'
        onClick={() => {
          setIsSignInOpen(true)
        }}
      >
        {t('common.sign-in')}
      </Button>
    )
  }

  const { id, image, name, email } = data.user
  const { defaultImage, defaultName } = getDefaultUser(id)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='size-9 rounded-full' variant='ghost'>
          <Avatar className='size-9'>
            <AvatarImage className='size-9' src={image ?? defaultImage} />
            <AvatarFallback>{getAvatarAbbreviation(name ?? defaultName)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end'>
        <DropdownMenuLabel>
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>{name}</p>
            <p className='text-muted-foreground text-xs'>{email}</p>
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AdminProfileDropdown
