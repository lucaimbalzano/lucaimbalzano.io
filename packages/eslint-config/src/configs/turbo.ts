import type { Linter } from 'eslint'

import { turboPlugin } from '@/plugins'

export const turbo: Linter.Config[] = [
  {
    name: 'simbashrd:turbo',
    plugins: {
      turbo: turboPlugin as unknown as Record<string, unknown>
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'error'
    }
  }
]
