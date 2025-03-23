import type { GetInfiniteCommentsInput } from '@/trpc/routers/comments'

import { createContext, use } from 'react'

type CommentsContext = {
  slug: string
  sort: GetInfiniteCommentsInput['sort']
  setSort: (sort: GetInfiniteCommentsInput['sort']) => void
}

const Context = createContext<CommentsContext | undefined>(undefined)

export const useCommentsContext = () => {
  const context = use(Context)

  if (!context) {
    throw new Error('useCommentsContext must be used within a CommentsProvider')
  }

  return context
}

export const CommentsProvider = Context.Provider
