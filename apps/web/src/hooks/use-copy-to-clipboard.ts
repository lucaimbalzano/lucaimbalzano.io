import { useTranslations } from '@simbashrd/i18n/client'
import { toast } from '@simbashrd/ui'
import { useState } from 'react'

type CopyOptions = {
  text: string
  timeout?: number
  successMessage?: React.ReactNode
  errorMessage?: React.ReactNode
}

export const useCopyToClipboard = (): [(options: CopyOptions) => Promise<void>, boolean] => {
  const [isCopied, setIsCopied] = useState(false)
  const t = useTranslations()

  const copy = async ({ text, timeout, successMessage, errorMessage }: CopyOptions) => {
    if (isCopied) return

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      toast.success(successMessage ?? t('hook.copy-to-clipboard.copied'))
      // console.log(successMessage ?? t('hook.copy-to-clipboard.copied'))

      setTimeout(() => {
        setIsCopied(false)
      }, timeout ?? 2000)
    } catch {
      // console.log(errorMessage ?? t('hook.copy-to-clipboard.error'))
      toast.error(errorMessage ?? t('hook.copy-to-clipboard.error'))
    }
  }

  return [copy, isCopied]
}
