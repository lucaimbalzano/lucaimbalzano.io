import simbashrd, { GLOB_E2E } from '@simbashrd/eslint-config'

export default simbashrd(
  {
    project: './tsconfig.json',
    tsconfigRootDir: import.meta.dirname,
    react: true,
    next: true,
    playwright: true,
    testingLibrary: true
  },
  {
    files: [GLOB_E2E],
    rules: {
      'playwright/expect-expect': [
        'error',
        {
          assertFunctionNames: ['checkStoredTheme', 'checkAppliedTheme', 'a11y']
        }
      ]
    }
  },
  {
    rules: {
      '@eslint-react/naming-convention/context-name': 'off',
      '@eslint-react/no-missing-context-display-name': 'off',
      '@eslint-react/web-api/no-leaked-timeout': 'off',
      '@eslint-react/naming-convention/use-state': 'off',
      'sonarjs/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
)
