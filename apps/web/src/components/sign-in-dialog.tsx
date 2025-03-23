'use client'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { useTranslations } from '@simbashrd/i18n/client'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@simbashrd/ui'
import { Loader2Icon } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

import { useDialogsStore } from '@/store/dialogs'

const SignInDialog = () => {
  const { isSignInOpen, setIsSignInOpen } = useDialogsStore()
  const [isLoading, setIsLoading] = useState(false)
  const t = useTranslations()

  return (
    <Dialog
      open={isSignInOpen}
      onOpenChange={(v) => {
        setIsSignInOpen(v)
      }}
    >
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-left text-2xl'>{t('common.sign-in')}</DialogTitle>
          <DialogDescription className='text-left'>
            {t('dialog.sign-in.description')}
          </DialogDescription>
        </DialogHeader>
        <div className='my-6 flex flex-col gap-4'>
          {/* ------ GITHUB LOGIN BTN */}
          <Button
            className='h-10 rounded-xl font-semibold'
            onClick={() => {
              setIsLoading(true)
              void signIn('github')
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2Icon className='animate-spin' />
            ) : (
              <>
                <SiGithub className='mr-3' />
                {t('dialog.sign-in.continue-with', { provider: 'GitHub' })}
              </>
            )}
          </Button>
          {/* ------ GOOGLE LOGIN BTN */}
          {/* <Button
            className='h-10 rounded-xl border font-semibold'
            variant='ghost'
            onClick={() => {
              setIsLoading(true)
              void signIn('google')
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2Icon className='animate-spin' />
            ) : (
              <>
                <GoogleIcon />
                {t('dialog.sign-in.continue-with', { provider: 'Google' })}
              </>
            )}
          </Button> */}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SignInDialog
