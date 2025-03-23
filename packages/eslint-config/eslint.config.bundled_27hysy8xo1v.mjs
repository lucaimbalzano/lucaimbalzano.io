// dist/chunk-KLT7SCSF.js
var GLOB_SRC_EXT = '?([cm])[jt]s?(x)'
var GLOB_JS = '**/*.?([cm])js'
var GLOB_JSX = '**/*.?([cm])jsx'
var GLOB_TS = '**/*.?([cm])ts'
var GLOB_TSX = '**/*.?([cm])tsx'
var GLOB_E2E = `**/e2e/**/*.{test,spec}.${GLOB_SRC_EXT}`
var GLOB_TEST = `**/tests/**/*.{test,spec}.${GLOB_SRC_EXT}`
var GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.next',
  '**/.vercel',
  '**/.changeset',
  '**/.cache',
  '**/CHANGELOG*.md',
  '**/LICENSE*'
]

// dist/chunk-EVFEIXMB.js
import { default as default2 } from '@eslint/js'
import { default as default3 } from '@eslint-react/eslint-plugin'
import { default as default4 } from '@next/eslint-plugin-next'
import { default as default5 } from '@typescript-eslint/eslint-plugin'
import { default as default6 } from '@typescript-eslint/parser'
import { default as default7 } from 'eslint-config-prettier'
import { default as default8 } from 'eslint-plugin-eslint-comments'
import * as importPlugin from 'eslint-plugin-import'
import { default as default9 } from 'eslint-plugin-jsx-a11y'
import { default as default10 } from 'eslint-plugin-playwright'
import { default as default11 } from 'eslint-plugin-prettier'
import { default as default12 } from 'eslint-plugin-react-hooks'
import { default as default13 } from 'eslint-plugin-simple-import-sort'
import * as sonarjsPlugin from 'eslint-plugin-sonarjs'
import { default as default14 } from 'eslint-plugin-testing-library'
import * as turboPlugin from 'eslint-plugin-turbo'
import { default as default15 } from 'eslint-plugin-unicorn'
import { default as default16 } from 'eslint-plugin-unused-imports'

// dist/chunk-C2WUDQQ7.js
var typescript = (options) => [
  {
    name: 'simbashrd:typescript',
    plugins: {
      '@typescript-eslint': default5
    },
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      parser: default6,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: options?.project,
        tsconfigRootDir: options?.tsconfigRootDir,
        sourceType: 'module'
      }
    },
    rules: {
      ...default5.configs['recommended-type-checked'].rules,
      ...default5.configs['strict-type-checked'].rules,
      ...default5.configs['stylistic-type-checked'].rules,
      ...default5.configs['eslint-recommended'].overrides[0].rules,
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/no-invalid-this': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports'
        }
      ],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      // Turn off due to poor performance
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-floating-promises': 'off'
    }
  }
]

// dist/chunk-7SDCATUO.js
var unicorn = [
  {
    name: 'simbashrd:unicorn',
    plugins: {
      unicorn: default15
    },
    rules: {
      ...default15.configs.recommended.rules,
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-string-raw': 'off'
    }
  }
]

// dist/chunk-3MS64ZJH.js
var next = [
  {
    name: 'simbashrd:next',
    plugins: {
      '@next/next': default4
    },
    rules: {
      ...default4.configs.recommended.rules,
      ...default4.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'off'
    }
  }
]

// dist/chunk-6TYUC3E7.js
var playwright = [
  {
    name: 'simbashrd:playwright',
    ...default10.configs['flat/recommended'],
    files: [GLOB_E2E]
  }
]

// dist/chunk-DJX4274D.js
var prettier = [
  {
    name: 'simbashrd:prettier',
    plugins: {
      prettier: default11
    },
    rules: {
      // Avoid conflicts
      ...default7.rules,
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off'
    }
  }
]

// dist/chunk-QYICJKUS.js
var react = (options) => {
  const reactPluginAll = default3.configs.all
  return [
    {
      name: 'simbashrd:react',
      plugins: {
        ...reactPluginAll.plugins,
        'react-hooks': default12,
        'jsx-a11y': default9
      },
      files: [GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX],
      languageOptions: {
        parser: default6,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          project: options?.project,
          sourceType: 'module'
        }
      },
      rules: {
        ...reactPluginAll.rules,
        ...default12.configs.recommended.rules,
        ...default9.configs.strict.rules,
        // @eslint-react
        '@eslint-react/no-leaked-conditional-rendering': 'error',
        '@eslint-react/avoid-shorthand-boolean': 'off',
        '@eslint-react/avoid-shorthand-fragment': 'off',
        '@eslint-react/prefer-destructuring-assignment': 'off',
        '@eslint-react/no-array-index-key': 'off',
        '@eslint-react/no-complex-conditional-rendering': 'off',
        // @eslint-react/hooks-extra
        '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'off',
        // @eslint-react/dom
        '@eslint-react/dom/no-dangerously-set-innerhtml': 'off',
        // @eslint-react/naming-convention
        '@eslint-react/naming-convention/filename': [
          'error',
          {
            rule: 'kebab-case'
          }
        ],
        // jsx-a11y
        'jsx-a11y/alt-text': [
          'error',
          {
            elements: ['img'],
            img: ['Image']
          }
        ],
        'jsx-a11y/lang': 'error',
        'jsx-a11y/no-aria-hidden-on-focusable': 'error',
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
          'error',
          {
            ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
            li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
            table: ['grid'],
            td: ['gridcell']
          }
        ]
      },
      settings: {
        'jsx-a11y': {
          components: {
            Button: 'button',
            Image: 'img',
            Input: 'input',
            Textarea: 'textarea',
            Link: 'a'
          }
        },
        ...reactPluginAll.settings
      }
    }
  ]
}

// dist/chunk-KMYJ7O2J.js
var sonarjs = [
  {
    name: 'simbashrd:sonarjs',
    plugins: {
      sonarjs: sonarjsPlugin
    },
    rules: {
      ...sonarjsPlugin.configs.recommended.rules,
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/no-nested-functions': 'off',
      'sonarjs/pseudo-random': 'off'
    }
  }
]

// dist/chunk-SOPDY2KU.js
var testingLibrary = [
  {
    name: 'simbashrd:testing-library',
    plugins: {
      'testing-library': default14
    },
    rules: {
      ...default14.configs.react.rules
    },
    files: [GLOB_TEST]
  }
]

// dist/chunk-IDASO4DG.js
var turbo = [
  {
    name: 'simbashrd:turbo',
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      ...turboPlugin.configs.recommended.rules
    }
  }
]

// dist/chunk-PBBRDSBZ.js
var comments = [
  {
    name: 'simbashrd:comments',
    plugins: {
      'eslint-comments': default8
    },
    rules: {
      ...default8.configs.recommended.rules,
      'eslint-comments/require-description': 'error'
    }
  }
]

// dist/chunk-QOJ3KGUY.js
var ignores = [
  {
    ignores: GLOB_EXCLUDE
  }
]

// dist/chunk-GEBMW5GH.js
var importSort = [
  {
    name: 'simbashrd:import-sort',
    plugins: {
      'simple-import-sort': default13
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Type imports
            [
              '^.*\\u0000$',
              '^node:.*\\u0000$',
              '^@?\\w.*\\u0000$',
              '^\\.\\..*\\u0000$',
              '^\\..*\\u0000$'
            ],
            // Side effect imports (e.g., `import 'some-module'`)
            ['^\\u0000'],
            // Node.js builtins prefixed with `node:`
            ['^node:'],
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter
            ['^@?\\w'],
            // Absolute imports (e.g., `import something from 'src/utils'`)
            ['^[^.]'],
            // Parent directory relative imports (e.g., `import something from '../utils'`)
            ['^\\.\\.'],
            // Current directory relative imports (e.g., `import something from './utils'`)
            ['^\\.']
          ]
        }
      ],
      'simple-import-sort/exports': 'error'
    }
  }
]

// dist/chunk-KR7RMZ7V.js
var imports = [
  {
    name: 'simbashrd:imports',
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/no-amd': 'error',
      'import/no-commonjs': 'error',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/newline-after-import': ['error', { count: 1 }]
    }
  }
]

// dist/chunk-JD7QW7C6.js
import globals from 'globals'
var javascript = [
  {
    name: 'simbashrd:javascript',
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    plugins: {
      'unused-imports': default16
    },
    rules: {
      ...default2.configs.recommended.rules,
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ]
    }
  }
]

// dist/index.js
import { isPackageExists } from 'local-pkg'
var hasTypeScript = isPackageExists('typescript')
var hasTurbo = isPackageExists('turbo')
var simbashrd = async (options = {}, ...userConfigs) => {
  const {
    typescript: enableTypeScript = hasTypeScript,
    react: enableReact = false,
    turbo: enableTurbo = hasTurbo,
    next: enableNext = false,
    playwright: enablePlaywright = false,
    testingLibrary: enableTestingLibrary = false,
    gitignore: enableGitignore = true
  } = options
  const configs = []
  if (enableGitignore) {
    configs.push((await import('eslint-config-flat-gitignore')).default())
  }
  configs.push(
    ...ignores,
    ...javascript,
    ...unicorn,
    ...comments,
    ...importSort,
    ...sonarjs,
    ...imports,
    ...prettier
  )
  if (enableTypeScript) {
    configs.push(...typescript(options))
  }
  if (enableReact) {
    configs.push(...react(options))
  }
  if (enableTurbo) {
    configs.push(...turbo)
  }
  if (enableNext) {
    configs.push(...next)
  }
  if (enablePlaywright) {
    configs.push(...playwright)
  }
  if (enableTestingLibrary) {
    configs.push(...testingLibrary)
  }
  configs.push(...userConfigs)
  return configs
}
var src_default = simbashrd

// eslint.config.mjs
var eslint_config_default = src_default({
  project: './tsconfig.json',
  tsconfigRootDir: import.meta.dirname,
  react: true,
  next: true,
  playwright: true,
  testingLibrary: true,
  turbo: true,
  typescript: true
})
export { eslint_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9jaHVuay1LTFQ3U0NTRi5qcyIsICJkaXN0L2NodW5rLUVWRkVJWE1CLmpzIiwgImRpc3QvY2h1bmstQzJXVURRUTcuanMiLCAiZGlzdC9jaHVuay03U0RDQVRVTy5qcyIsICJkaXN0L2NodW5rLTNNUzY0WkpILmpzIiwgImRpc3QvY2h1bmstNlRZVUMzRTcuanMiLCAiZGlzdC9jaHVuay1ESlg0Mjc0RC5qcyIsICJkaXN0L2NodW5rLVFZSUNKS1VTLmpzIiwgImRpc3QvY2h1bmstS01ZSjdPMkouanMiLCAiZGlzdC9jaHVuay1TT1BEWTJLVS5qcyIsICJkaXN0L2NodW5rLUlEQVNPNERHLmpzIiwgImRpc3QvY2h1bmstUEJCUkRTQlouanMiLCAiZGlzdC9jaHVuay1RT0ozS0dVWS5qcyIsICJkaXN0L2NodW5rLUdFQk1XNUdILmpzIiwgImRpc3QvY2h1bmstS1I3Uk1aN1YuanMiLCAiZGlzdC9jaHVuay1KRDdRVzdDNi5qcyIsICJkaXN0L2luZGV4LmpzIiwgImVzbGludC5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvY2h1bmstS0xUN1NDU0YuanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLUtMVDdTQ1NGLmpzXCI7Ly8gc3JjL2dsb2JzLnRzXG52YXIgR0xPQl9TUkNfRVhUID0gXCI/KFtjbV0pW2p0XXM/KHgpXCI7XG52YXIgR0xPQl9KUyA9IFwiKiovKi4/KFtjbV0panNcIjtcbnZhciBHTE9CX0pTWCA9IFwiKiovKi4/KFtjbV0panN4XCI7XG52YXIgR0xPQl9UUyA9IFwiKiovKi4/KFtjbV0pdHNcIjtcbnZhciBHTE9CX1RTWCA9IFwiKiovKi4/KFtjbV0pdHN4XCI7XG52YXIgR0xPQl9FMkUgPSBgKiovZTJlLyoqLyoue3Rlc3Qsc3BlY30uJHtHTE9CX1NSQ19FWFR9YDtcbnZhciBHTE9CX1RFU1QgPSBgKiovdGVzdHMvKiovKi57dGVzdCxzcGVjfS4ke0dMT0JfU1JDX0VYVH1gO1xudmFyIEdMT0JfRVhDTFVERSA9IFtcbiAgXCIqKi9ub2RlX21vZHVsZXNcIixcbiAgXCIqKi9kaXN0XCIsXG4gIFwiKiovcGFja2FnZS1sb2NrLmpzb25cIixcbiAgXCIqKi95YXJuLmxvY2tcIixcbiAgXCIqKi9wbnBtLWxvY2sueWFtbFwiLFxuICBcIioqL2J1bi5sb2NrYlwiLFxuICBcIioqL291dHB1dFwiLFxuICBcIioqL2NvdmVyYWdlXCIsXG4gIFwiKiovdGVtcFwiLFxuICBcIioqLy50ZW1wXCIsXG4gIFwiKiovdG1wXCIsXG4gIFwiKiovLnRtcFwiLFxuICBcIioqLy5oaXN0b3J5XCIsXG4gIFwiKiovLm5leHRcIixcbiAgXCIqKi8udmVyY2VsXCIsXG4gIFwiKiovLmNoYW5nZXNldFwiLFxuICBcIioqLy5jYWNoZVwiLFxuICBcIioqL0NIQU5HRUxPRyoubWRcIixcbiAgXCIqKi9MSUNFTlNFKlwiXG5dO1xuXG5leHBvcnQge1xuICBHTE9CX0pTLFxuICBHTE9CX0pTWCxcbiAgR0xPQl9UUyxcbiAgR0xPQl9UU1gsXG4gIEdMT0JfRTJFLFxuICBHTE9CX1RFU1QsXG4gIEdMT0JfRVhDTFVERVxufTtcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvY2h1bmstRVZGRUlYTUIuanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLUVWRkVJWE1CLmpzXCI7Ly8gc3JjL3BsdWdpbnMudHNcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdDIgfSBmcm9tIFwiQGVzbGludC9qc1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0MyB9IGZyb20gXCJAZXNsaW50LXJlYWN0L2VzbGludC1wbHVnaW5cIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdDQgfSBmcm9tIFwiQG5leHQvZXNsaW50LXBsdWdpbi1uZXh0XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHQ1IH0gZnJvbSBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHQ2IH0gZnJvbSBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdDcgfSBmcm9tIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0OCB9IGZyb20gXCJlc2xpbnQtcGx1Z2luLWVzbGludC1jb21tZW50c1wiO1xuaW1wb3J0ICogYXMgaW1wb3J0UGx1Z2luIGZyb20gXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0OSB9IGZyb20gXCJlc2xpbnQtcGx1Z2luLWpzeC1hMTF5XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHQxMCB9IGZyb20gXCJlc2xpbnQtcGx1Z2luLXBsYXl3cmlnaHRcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdDExIH0gZnJvbSBcImVzbGludC1wbHVnaW4tcHJldHRpZXJcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdDEyIH0gZnJvbSBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdDEzIH0gZnJvbSBcImVzbGludC1wbHVnaW4tc2ltcGxlLWltcG9ydC1zb3J0XCI7XG5pbXBvcnQgKiBhcyBzb25hcmpzUGx1Z2luIGZyb20gXCJlc2xpbnQtcGx1Z2luLXNvbmFyanNcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdDE0IH0gZnJvbSBcImVzbGludC1wbHVnaW4tdGVzdGluZy1saWJyYXJ5XCI7XG5pbXBvcnQgKiBhcyB0dXJib1BsdWdpbiBmcm9tIFwiZXNsaW50LXBsdWdpbi10dXJib1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0MTUgfSBmcm9tIFwiZXNsaW50LXBsdWdpbi11bmljb3JuXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHQxNiB9IGZyb20gXCJlc2xpbnQtcGx1Z2luLXVudXNlZC1pbXBvcnRzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQyIGFzIGRlZmF1bHQsXG4gIGRlZmF1bHQzIGFzIGRlZmF1bHQyLFxuICBkZWZhdWx0NCBhcyBkZWZhdWx0MyxcbiAgZGVmYXVsdDUgYXMgZGVmYXVsdDQsXG4gIGRlZmF1bHQ2IGFzIGRlZmF1bHQ1LFxuICBkZWZhdWx0NyBhcyBkZWZhdWx0NixcbiAgZGVmYXVsdDggYXMgZGVmYXVsdDcsXG4gIGltcG9ydFBsdWdpbixcbiAgZGVmYXVsdDkgYXMgZGVmYXVsdDgsXG4gIGRlZmF1bHQxMCBhcyBkZWZhdWx0OSxcbiAgZGVmYXVsdDExIGFzIGRlZmF1bHQxMCxcbiAgZGVmYXVsdDEyIGFzIGRlZmF1bHQxMSxcbiAgZGVmYXVsdDEzIGFzIGRlZmF1bHQxMixcbiAgc29uYXJqc1BsdWdpbixcbiAgZGVmYXVsdDE0IGFzIGRlZmF1bHQxMyxcbiAgdHVyYm9QbHVnaW4sXG4gIGRlZmF1bHQxNSBhcyBkZWZhdWx0MTQsXG4gIGRlZmF1bHQxNiBhcyBkZWZhdWx0MTVcbn07XG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLUMyV1VEUVE3LmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3RcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9jaHVuay1DMldVRFFRNy5qc1wiO2ltcG9ydCB7XG4gIEdMT0JfVFMsXG4gIEdMT0JfVFNYXG59IGZyb20gXCIuL2NodW5rLUtMVDdTQ1NGLmpzXCI7XG5pbXBvcnQge1xuICBkZWZhdWx0NCBhcyBkZWZhdWx0MixcbiAgZGVmYXVsdDUgYXMgZGVmYXVsdDNcbn0gZnJvbSBcIi4vY2h1bmstRVZGRUlYTUIuanNcIjtcblxuLy8gc3JjL2NvbmZpZ3MvdHlwZXNjcmlwdC50c1xudmFyIHR5cGVzY3JpcHQgPSAob3B0aW9ucykgPT4gW1xuICB7XG4gICAgbmFtZTogXCJ0c3pob25nMDQxMTp0eXBlc2NyaXB0XCIsXG4gICAgcGx1Z2luczoge1xuICAgICAgXCJAdHlwZXNjcmlwdC1lc2xpbnRcIjogZGVmYXVsdDJcbiAgICB9LFxuICAgIGZpbGVzOiBbR0xPQl9UUywgR0xPQl9UU1hdLFxuICAgIGxhbmd1YWdlT3B0aW9uczoge1xuICAgICAgcGFyc2VyOiBkZWZhdWx0MyxcbiAgICAgIHBhcnNlck9wdGlvbnM6IHtcbiAgICAgICAgZWNtYUZlYXR1cmVzOiB7XG4gICAgICAgICAganN4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHByb2plY3Q6IG9wdGlvbnM/LnByb2plY3QsXG4gICAgICAgIHRzY29uZmlnUm9vdERpcjogb3B0aW9ucz8udHNjb25maWdSb290RGlyLFxuICAgICAgICBzb3VyY2VUeXBlOiBcIm1vZHVsZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBydWxlczoge1xuICAgICAgLi4uZGVmYXVsdDIuY29uZmlnc1tcInJlY29tbWVuZGVkLXR5cGUtY2hlY2tlZFwiXS5ydWxlcyxcbiAgICAgIC4uLmRlZmF1bHQyLmNvbmZpZ3NbXCJzdHJpY3QtdHlwZS1jaGVja2VkXCJdLnJ1bGVzLFxuICAgICAgLi4uZGVmYXVsdDIuY29uZmlnc1tcInN0eWxpc3RpYy10eXBlLWNoZWNrZWRcIl0ucnVsZXMsXG4gICAgICAuLi5kZWZhdWx0Mi5jb25maWdzW1wiZXNsaW50LXJlY29tbWVuZGVkXCJdLm92ZXJyaWRlc1swXS5ydWxlcyxcbiAgICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2FycmF5LXR5cGVcIjogW1wiZXJyb3JcIiwgeyBkZWZhdWx0OiBcImFycmF5LXNpbXBsZVwiIH1dLFxuICAgICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvbm8taW52YWxpZC10aGlzXCI6IFwiZXJyb3JcIixcbiAgICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvd1wiOiBcImVycm9yXCIsXG4gICAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9jb25zaXN0ZW50LXR5cGUtaW1wb3J0c1wiOiBbXG4gICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAge1xuICAgICAgICAgIHByZWZlcjogXCJ0eXBlLWltcG9ydHNcIixcbiAgICAgICAgICBmaXhTdHlsZTogXCJpbmxpbmUtdHlwZS1pbXBvcnRzXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3Jlc3RyaWN0LXRlbXBsYXRlLWV4cHJlc3Npb25zXCI6IFtcImVycm9yXCIsIHsgYWxsb3dOdW1iZXI6IHRydWUgfV0sXG4gICAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9uby1uYW1lc3BhY2VcIjogXCJvZmZcIixcbiAgICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXCI6IFwib2ZmXCIsXG4gICAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFwiOiBcIm9mZlwiLFxuICAgICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3NcIjogXCJvZmZcIixcbiAgICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2NvbnNpc3RlbnQtdHlwZS1kZWZpbml0aW9uc1wiOiBcIm9mZlwiLFxuICAgICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXCI6IFwib2ZmXCIsXG4gICAgICAvLyBUdXJuIG9mZiBkdWUgdG8gcG9vciBwZXJmb3JtYW5jZVxuICAgICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbWlzdXNlZC1wcm9taXNlc1wiOiBcIm9mZlwiLFxuICAgICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcIjogXCJvZmZcIlxuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IHtcbiAgdHlwZXNjcmlwdFxufTtcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvY2h1bmstN1NEQ0FUVU8uanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLTdTRENBVFVPLmpzXCI7aW1wb3J0IHtcbiAgZGVmYXVsdDE0IGFzIGRlZmF1bHQyXG59IGZyb20gXCIuL2NodW5rLUVWRkVJWE1CLmpzXCI7XG5cbi8vIHNyYy9jb25maWdzL3VuaWNvcm4udHNcbnZhciB1bmljb3JuID0gW1xuICB7XG4gICAgbmFtZTogXCJ0c3pob25nMDQxMTp1bmljb3JuXCIsXG4gICAgcGx1Z2luczoge1xuICAgICAgdW5pY29ybjogZGVmYXVsdDJcbiAgICB9LFxuICAgIHJ1bGVzOiB7XG4gICAgICAuLi5kZWZhdWx0Mi5jb25maWdzLnJlY29tbWVuZGVkLnJ1bGVzLFxuICAgICAgXCJ1bmljb3JuL25vLWF3YWl0LWV4cHJlc3Npb24tbWVtYmVyXCI6IFwib2ZmXCIsXG4gICAgICBcInVuaWNvcm4vbm8tbnVsbFwiOiBcIm9mZlwiLFxuICAgICAgXCJ1bmljb3JuL3ByZWZlci1leHBvcnQtZnJvbVwiOiBbXCJlcnJvclwiLCB7IGlnbm9yZVVzZWRWYXJpYWJsZXM6IHRydWUgfV0sXG4gICAgICBcInVuaWNvcm4vcHJldmVudC1hYmJyZXZpYXRpb25zXCI6IFwib2ZmXCIsXG4gICAgICBcInVuaWNvcm4vcHJlZmVyLXN0cmluZy1yYXdcIjogXCJvZmZcIlxuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IHtcbiAgdW5pY29yblxufTtcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvY2h1bmstM01TNjRaSkguanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLTNNUzY0WkpILmpzXCI7aW1wb3J0IHtcbiAgZGVmYXVsdDMgYXMgZGVmYXVsdDJcbn0gZnJvbSBcIi4vY2h1bmstRVZGRUlYTUIuanNcIjtcblxuLy8gc3JjL2NvbmZpZ3MvbmV4dC50c1xudmFyIG5leHQgPSBbXG4gIHtcbiAgICBuYW1lOiBcInRzemhvbmcwNDExOm5leHRcIixcbiAgICBwbHVnaW5zOiB7XG4gICAgICBcIkBuZXh0L25leHRcIjogZGVmYXVsdDJcbiAgICB9LFxuICAgIHJ1bGVzOiB7XG4gICAgICAuLi5kZWZhdWx0Mi5jb25maWdzLnJlY29tbWVuZGVkLnJ1bGVzLFxuICAgICAgLi4uZGVmYXVsdDIuY29uZmlnc1tcImNvcmUtd2ViLXZpdGFsc1wiXS5ydWxlcyxcbiAgICAgIFwiQG5leHQvbmV4dC9uby1odG1sLWxpbmstZm9yLXBhZ2VzXCI6IFwib2ZmXCJcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCB7XG4gIG5leHRcbn07XG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLTZUWVVDM0U3LmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3RcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9jaHVuay02VFlVQzNFNy5qc1wiO2ltcG9ydCB7XG4gIEdMT0JfRTJFXG59IGZyb20gXCIuL2NodW5rLUtMVDdTQ1NGLmpzXCI7XG5pbXBvcnQge1xuICBkZWZhdWx0OSBhcyBkZWZhdWx0MlxufSBmcm9tIFwiLi9jaHVuay1FVkZFSVhNQi5qc1wiO1xuXG4vLyBzcmMvY29uZmlncy9wbGF5d3JpZ2h0LnRzXG52YXIgcGxheXdyaWdodCA9IFtcbiAge1xuICAgIG5hbWU6IFwidHN6aG9uZzA0MTE6cGxheXdyaWdodFwiLFxuICAgIC4uLmRlZmF1bHQyLmNvbmZpZ3NbXCJmbGF0L3JlY29tbWVuZGVkXCJdLFxuICAgIGZpbGVzOiBbR0xPQl9FMkVdXG4gIH1cbl07XG5cbmV4cG9ydCB7XG4gIHBsYXl3cmlnaHRcbn07XG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLURKWDQyNzRELmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3RcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9jaHVuay1ESlg0Mjc0RC5qc1wiO2ltcG9ydCB7XG4gIGRlZmF1bHQxMCBhcyBkZWZhdWx0MyxcbiAgZGVmYXVsdDYgYXMgZGVmYXVsdDJcbn0gZnJvbSBcIi4vY2h1bmstRVZGRUlYTUIuanNcIjtcblxuLy8gc3JjL2NvbmZpZ3MvcHJldHRpZXIudHNcbnZhciBwcmV0dGllciA9IFtcbiAge1xuICAgIG5hbWU6IFwidHN6aG9uZzA0MTE6cHJldHRpZXJcIixcbiAgICBwbHVnaW5zOiB7XG4gICAgICBwcmV0dGllcjogZGVmYXVsdDNcbiAgICB9LFxuICAgIHJ1bGVzOiB7XG4gICAgICAvLyBBdm9pZCBjb25mbGljdHNcbiAgICAgIC4uLmRlZmF1bHQyLnJ1bGVzLFxuICAgICAgXCJwcmV0dGllci9wcmV0dGllclwiOiBbXCJlcnJvclwiLCB7IGVuZE9mTGluZTogXCJhdXRvXCIgfV0sXG4gICAgICBcImFycm93LWJvZHktc3R5bGVcIjogXCJvZmZcIixcbiAgICAgIFwicHJlZmVyLWFycm93LWNhbGxiYWNrXCI6IFwib2ZmXCJcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCB7XG4gIHByZXR0aWVyXG59O1xuIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9jaHVuay1RWUlDSktVUy5qc1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0XCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvY2h1bmstUVlJQ0pLVVMuanNcIjtpbXBvcnQge1xuICBHTE9CX0pTLFxuICBHTE9CX0pTWCxcbiAgR0xPQl9UUyxcbiAgR0xPQl9UU1hcbn0gZnJvbSBcIi4vY2h1bmstS0xUN1NDU0YuanNcIjtcbmltcG9ydCB7XG4gIGRlZmF1bHQxMSBhcyBkZWZhdWx0NSxcbiAgZGVmYXVsdDIsXG4gIGRlZmF1bHQ1IGFzIGRlZmF1bHQzLFxuICBkZWZhdWx0OCBhcyBkZWZhdWx0NFxufSBmcm9tIFwiLi9jaHVuay1FVkZFSVhNQi5qc1wiO1xuXG4vLyBzcmMvY29uZmlncy9yZWFjdC50c1xudmFyIHJlYWN0ID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3QgcmVhY3RQbHVnaW5BbGwgPSBkZWZhdWx0Mi5jb25maWdzLmFsbDtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBuYW1lOiBcInRzemhvbmcwNDExOnJlYWN0XCIsXG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIC4uLnJlYWN0UGx1Z2luQWxsLnBsdWdpbnMsXG4gICAgICAgIFwicmVhY3QtaG9va3NcIjogZGVmYXVsdDUsXG4gICAgICAgIFwianN4LWExMXlcIjogZGVmYXVsdDRcbiAgICAgIH0sXG4gICAgICBmaWxlczogW0dMT0JfSlMsIEdMT0JfSlNYLCBHTE9CX1RTLCBHTE9CX1RTWF0sXG4gICAgICBsYW5ndWFnZU9wdGlvbnM6IHtcbiAgICAgICAgcGFyc2VyOiBkZWZhdWx0MyxcbiAgICAgICAgcGFyc2VyT3B0aW9uczoge1xuICAgICAgICAgIGVjbWFGZWF0dXJlczoge1xuICAgICAgICAgICAganN4OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm9qZWN0OiBvcHRpb25zPy5wcm9qZWN0LFxuICAgICAgICAgIHNvdXJjZVR5cGU6IFwibW9kdWxlXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgIC4uLnJlYWN0UGx1Z2luQWxsLnJ1bGVzLFxuICAgICAgICAuLi5kZWZhdWx0NS5jb25maWdzLnJlY29tbWVuZGVkLnJ1bGVzLFxuICAgICAgICAuLi5kZWZhdWx0NC5jb25maWdzLnN0cmljdC5ydWxlcyxcbiAgICAgICAgLy8gQGVzbGludC1yZWFjdFxuICAgICAgICBcIkBlc2xpbnQtcmVhY3Qvbm8tbGVha2VkLWNvbmRpdGlvbmFsLXJlbmRlcmluZ1wiOiBcImVycm9yXCIsXG4gICAgICAgIFwiQGVzbGludC1yZWFjdC9hdm9pZC1zaG9ydGhhbmQtYm9vbGVhblwiOiBcIm9mZlwiLFxuICAgICAgICBcIkBlc2xpbnQtcmVhY3QvYXZvaWQtc2hvcnRoYW5kLWZyYWdtZW50XCI6IFwib2ZmXCIsXG4gICAgICAgIFwiQGVzbGludC1yZWFjdC9wcmVmZXItZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50XCI6IFwib2ZmXCIsXG4gICAgICAgIFwiQGVzbGludC1yZWFjdC9uby1hcnJheS1pbmRleC1rZXlcIjogXCJvZmZcIixcbiAgICAgICAgXCJAZXNsaW50LXJlYWN0L25vLWNvbXBsZXgtY29uZGl0aW9uYWwtcmVuZGVyaW5nXCI6IFwib2ZmXCIsXG4gICAgICAgIC8vIEBlc2xpbnQtcmVhY3QvaG9va3MtZXh0cmFcbiAgICAgICAgXCJAZXNsaW50LXJlYWN0L2hvb2tzLWV4dHJhL25vLWRpcmVjdC1zZXQtc3RhdGUtaW4tdXNlLWVmZmVjdFwiOiBcIm9mZlwiLFxuICAgICAgICAvLyBAZXNsaW50LXJlYWN0L2RvbVxuICAgICAgICBcIkBlc2xpbnQtcmVhY3QvZG9tL25vLWRhbmdlcm91c2x5LXNldC1pbm5lcmh0bWxcIjogXCJvZmZcIixcbiAgICAgICAgLy8gQGVzbGludC1yZWFjdC9uYW1pbmctY29udmVudGlvblxuICAgICAgICBcIkBlc2xpbnQtcmVhY3QvbmFtaW5nLWNvbnZlbnRpb24vZmlsZW5hbWVcIjogW1xuICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBydWxlOiBcImtlYmFiLWNhc2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgLy8ganN4LWExMXlcbiAgICAgICAgXCJqc3gtYTExeS9hbHQtdGV4dFwiOiBbXG4gICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnRzOiBbXCJpbWdcIl0sXG4gICAgICAgICAgICBpbWc6IFtcIkltYWdlXCJdXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImpzeC1hMTF5L2xhbmdcIjogXCJlcnJvclwiLFxuICAgICAgICBcImpzeC1hMTF5L25vLWFyaWEtaGlkZGVuLW9uLWZvY3VzYWJsZVwiOiBcImVycm9yXCIsXG4gICAgICAgIFwianN4LWExMXkvbm8tbm9uaW50ZXJhY3RpdmUtZWxlbWVudC10by1pbnRlcmFjdGl2ZS1yb2xlXCI6IFtcbiAgICAgICAgICBcImVycm9yXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdWw6IFtcImxpc3Rib3hcIiwgXCJtZW51XCIsIFwibWVudWJhclwiLCBcInJhZGlvZ3JvdXBcIiwgXCJ0YWJsaXN0XCIsIFwidHJlZVwiLCBcInRyZWVncmlkXCJdLFxuICAgICAgICAgICAgb2w6IFtcImxpc3Rib3hcIiwgXCJtZW51XCIsIFwibWVudWJhclwiLCBcInJhZGlvZ3JvdXBcIiwgXCJ0YWJsaXN0XCIsIFwidHJlZVwiLCBcInRyZWVncmlkXCJdLFxuICAgICAgICAgICAgbGk6IFtcIm1lbnVpdGVtXCIsIFwib3B0aW9uXCIsIFwicm93XCIsIFwidGFiXCIsIFwidHJlZWl0ZW1cIl0sXG4gICAgICAgICAgICB0YWJsZTogW1wiZ3JpZFwiXSxcbiAgICAgICAgICAgIHRkOiBbXCJncmlkY2VsbFwiXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIFwianN4LWExMXlcIjoge1xuICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEJ1dHRvbjogXCJidXR0b25cIixcbiAgICAgICAgICAgIEltYWdlOiBcImltZ1wiLFxuICAgICAgICAgICAgSW5wdXQ6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIFRleHRhcmVhOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICBMaW5rOiBcImFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLi4ucmVhY3RQbHVnaW5BbGwuc2V0dGluZ3NcbiAgICAgIH1cbiAgICB9XG4gIF07XG59O1xuXG5leHBvcnQge1xuICByZWFjdFxufTtcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvY2h1bmstS01ZSjdPMkouanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLUtNWUo3TzJKLmpzXCI7aW1wb3J0IHtcbiAgc29uYXJqc1BsdWdpblxufSBmcm9tIFwiLi9jaHVuay1FVkZFSVhNQi5qc1wiO1xuXG4vLyBzcmMvY29uZmlncy9zb25hcmpzLnRzXG52YXIgc29uYXJqcyA9IFtcbiAge1xuICAgIG5hbWU6IFwidHN6aG9uZzA0MTE6c29uYXJqc1wiLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIHNvbmFyanM6IHNvbmFyanNQbHVnaW5cbiAgICB9LFxuICAgIHJ1bGVzOiB7XG4gICAgICAuLi5zb25hcmpzUGx1Z2luLmNvbmZpZ3MucmVjb21tZW5kZWQucnVsZXMsXG4gICAgICBcInNvbmFyanMvbm8tZHVwbGljYXRlLXN0cmluZ1wiOiBcIm9mZlwiLFxuICAgICAgXCJzb25hcmpzL25vLW5lc3RlZC1mdW5jdGlvbnNcIjogXCJvZmZcIixcbiAgICAgIFwic29uYXJqcy9wc2V1ZG8tcmFuZG9tXCI6IFwib2ZmXCJcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCB7XG4gIHNvbmFyanNcbn07XG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLVNPUERZMktVLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3RcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9jaHVuay1TT1BEWTJLVS5qc1wiO2ltcG9ydCB7XG4gIEdMT0JfVEVTVFxufSBmcm9tIFwiLi9jaHVuay1LTFQ3U0NTRi5qc1wiO1xuaW1wb3J0IHtcbiAgZGVmYXVsdDEzIGFzIGRlZmF1bHQyXG59IGZyb20gXCIuL2NodW5rLUVWRkVJWE1CLmpzXCI7XG5cbi8vIHNyYy9jb25maWdzL3Rlc3RpbmctbGlicmFyeS50c1xudmFyIHRlc3RpbmdMaWJyYXJ5ID0gW1xuICB7XG4gICAgbmFtZTogXCJ0c3pob25nMDQxMTp0ZXN0aW5nLWxpYnJhcnlcIixcbiAgICBwbHVnaW5zOiB7XG4gICAgICBcInRlc3RpbmctbGlicmFyeVwiOiBkZWZhdWx0MlxuICAgIH0sXG4gICAgcnVsZXM6IHtcbiAgICAgIC4uLmRlZmF1bHQyLmNvbmZpZ3MucmVhY3QucnVsZXNcbiAgICB9LFxuICAgIGZpbGVzOiBbR0xPQl9URVNUXVxuICB9XG5dO1xuXG5leHBvcnQge1xuICB0ZXN0aW5nTGlicmFyeVxufTtcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvY2h1bmstSURBU080REcuanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLUlEQVNPNERHLmpzXCI7aW1wb3J0IHtcbiAgdHVyYm9QbHVnaW5cbn0gZnJvbSBcIi4vY2h1bmstRVZGRUlYTUIuanNcIjtcblxuLy8gc3JjL2NvbmZpZ3MvdHVyYm8udHNcbnZhciB0dXJibyA9IFtcbiAge1xuICAgIG5hbWU6IFwidHN6aG9uZzA0MTE6dHVyYm9cIixcbiAgICBwbHVnaW5zOiB7XG4gICAgICB0dXJibzogdHVyYm9QbHVnaW5cbiAgICB9LFxuICAgIHJ1bGVzOiB7XG4gICAgICAuLi50dXJib1BsdWdpbi5jb25maWdzLnJlY29tbWVuZGVkLnJ1bGVzXG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQge1xuICB0dXJib1xufTtcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvY2h1bmstUEJCUkRTQlouanNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLVBCQlJEU0JaLmpzXCI7aW1wb3J0IHtcbiAgZGVmYXVsdDcgYXMgZGVmYXVsdDJcbn0gZnJvbSBcIi4vY2h1bmstRVZGRUlYTUIuanNcIjtcblxuLy8gc3JjL2NvbmZpZ3MvY29tbWVudHMudHNcbnZhciBjb21tZW50cyA9IFtcbiAge1xuICAgIG5hbWU6IFwidHN6aG9uZzA0MTE6Y29tbWVudHNcIixcbiAgICBwbHVnaW5zOiB7XG4gICAgICBcImVzbGludC1jb21tZW50c1wiOiBkZWZhdWx0MlxuICAgIH0sXG4gICAgcnVsZXM6IHtcbiAgICAgIC4uLmRlZmF1bHQyLmNvbmZpZ3MucmVjb21tZW5kZWQucnVsZXMsXG4gICAgICBcImVzbGludC1jb21tZW50cy9yZXF1aXJlLWRlc2NyaXB0aW9uXCI6IFwiZXJyb3JcIlxuICAgIH1cbiAgfVxuXTtcblxuZXhwb3J0IHtcbiAgY29tbWVudHNcbn07XG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLVFPSjNLR1VZLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3RcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9jaHVuay1RT0ozS0dVWS5qc1wiO2ltcG9ydCB7XG4gIEdMT0JfRVhDTFVERVxufSBmcm9tIFwiLi9jaHVuay1LTFQ3U0NTRi5qc1wiO1xuXG4vLyBzcmMvY29uZmlncy9pZ25vcmVzLnRzXG52YXIgaWdub3JlcyA9IFtcbiAge1xuICAgIGlnbm9yZXM6IEdMT0JfRVhDTFVERVxuICB9XG5dO1xuXG5leHBvcnQge1xuICBpZ25vcmVzXG59O1xuIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9jaHVuay1HRUJNVzVHSC5qc1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0XCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvY2h1bmstR0VCTVc1R0guanNcIjtpbXBvcnQge1xuICBkZWZhdWx0MTIgYXMgZGVmYXVsdDJcbn0gZnJvbSBcIi4vY2h1bmstRVZGRUlYTUIuanNcIjtcblxuLy8gc3JjL2NvbmZpZ3MvaW1wb3J0LXNvcnQudHNcbnZhciBpbXBvcnRTb3J0ID0gW1xuICB7XG4gICAgbmFtZTogXCJ0c3pob25nMDQxMTppbXBvcnQtc29ydFwiLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIFwic2ltcGxlLWltcG9ydC1zb3J0XCI6IGRlZmF1bHQyXG4gICAgfSxcbiAgICBydWxlczoge1xuICAgICAgXCJzaW1wbGUtaW1wb3J0LXNvcnQvaW1wb3J0c1wiOiBbXG4gICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAge1xuICAgICAgICAgIGdyb3VwczogW1xuICAgICAgICAgICAgLy8gVHlwZSBpbXBvcnRzXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFwiXi4qXFxcXHUwMDAwJFwiLFxuICAgICAgICAgICAgICBcIl5ub2RlOi4qXFxcXHUwMDAwJFwiLFxuICAgICAgICAgICAgICBcIl5AP1xcXFx3LipcXFxcdTAwMDAkXCIsXG4gICAgICAgICAgICAgIFwiXlxcXFwuXFxcXC4uKlxcXFx1MDAwMCRcIixcbiAgICAgICAgICAgICAgXCJeXFxcXC4uKlxcXFx1MDAwMCRcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFNpZGUgZWZmZWN0IGltcG9ydHMgKGUuZy4sIGBpbXBvcnQgJ3NvbWUtbW9kdWxlJ2ApXG4gICAgICAgICAgICBbXCJeXFxcXHUwMDAwXCJdLFxuICAgICAgICAgICAgLy8gTm9kZS5qcyBidWlsdGlucyBwcmVmaXhlZCB3aXRoIGBub2RlOmBcbiAgICAgICAgICAgIFtcIl5ub2RlOlwiXSxcbiAgICAgICAgICAgIC8vIFRoaW5ncyB0aGF0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgKG9yIGRpZ2l0IG9yIHVuZGVyc2NvcmUpLCBvciBgQGAgZm9sbG93ZWQgYnkgYSBsZXR0ZXJcbiAgICAgICAgICAgIFtcIl5AP1xcXFx3XCJdLFxuICAgICAgICAgICAgLy8gQWJzb2x1dGUgaW1wb3J0cyAoZS5nLiwgYGltcG9ydCBzb21ldGhpbmcgZnJvbSAnc3JjL3V0aWxzJ2ApXG4gICAgICAgICAgICBbXCJeW14uXVwiXSxcbiAgICAgICAgICAgIC8vIFBhcmVudCBkaXJlY3RvcnkgcmVsYXRpdmUgaW1wb3J0cyAoZS5nLiwgYGltcG9ydCBzb21ldGhpbmcgZnJvbSAnLi4vdXRpbHMnYClcbiAgICAgICAgICAgIFtcIl5cXFxcLlxcXFwuXCJdLFxuICAgICAgICAgICAgLy8gQ3VycmVudCBkaXJlY3RvcnkgcmVsYXRpdmUgaW1wb3J0cyAoZS5nLiwgYGltcG9ydCBzb21ldGhpbmcgZnJvbSAnLi91dGlscydgKVxuICAgICAgICAgICAgW1wiXlxcXFwuXCJdXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJzaW1wbGUtaW1wb3J0LXNvcnQvZXhwb3J0c1wiOiBcImVycm9yXCJcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCB7XG4gIGltcG9ydFNvcnRcbn07XG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLUtSN1JNWjdWLmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3RcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9jaHVuay1LUjdSTVo3Vi5qc1wiO2ltcG9ydCB7XG4gIGltcG9ydFBsdWdpblxufSBmcm9tIFwiLi9jaHVuay1FVkZFSVhNQi5qc1wiO1xuXG4vLyBzcmMvY29uZmlncy9pbXBvcnRzLnRzXG52YXIgaW1wb3J0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwidHN6aG9uZzA0MTE6aW1wb3J0c1wiLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGltcG9ydDogaW1wb3J0UGx1Z2luXG4gICAgfSxcbiAgICBydWxlczoge1xuICAgICAgXCJpbXBvcnQvbm8tYW1kXCI6IFwiZXJyb3JcIixcbiAgICAgIFwiaW1wb3J0L25vLWNvbW1vbmpzXCI6IFwiZXJyb3JcIixcbiAgICAgIFwiaW1wb3J0L2ZpcnN0XCI6IFwiZXJyb3JcIixcbiAgICAgIFwiaW1wb3J0L25vLWR1cGxpY2F0ZXNcIjogXCJlcnJvclwiLFxuICAgICAgXCJpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXCI6IFwiZXJyb3JcIixcbiAgICAgIFwiaW1wb3J0L25vLW5hbWVkLWRlZmF1bHRcIjogXCJlcnJvclwiLFxuICAgICAgXCJpbXBvcnQvbm8tc2VsZi1pbXBvcnRcIjogXCJlcnJvclwiLFxuICAgICAgXCJpbXBvcnQvbm8td2VicGFjay1sb2FkZXItc3ludGF4XCI6IFwiZXJyb3JcIixcbiAgICAgIFwiaW1wb3J0L25ld2xpbmUtYWZ0ZXItaW1wb3J0XCI6IFtcImVycm9yXCIsIHsgY291bnQ6IDEgfV1cbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCB7XG4gIGltcG9ydHNcbn07XG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0L2NodW5rLUpEN1FXN0M2LmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3RcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9jaHVuay1KRDdRVzdDNi5qc1wiO2ltcG9ydCB7XG4gIGRlZmF1bHQgYXMgZGVmYXVsdDIsXG4gIGRlZmF1bHQxNSBhcyBkZWZhdWx0M1xufSBmcm9tIFwiLi9jaHVuay1FVkZFSVhNQi5qc1wiO1xuXG4vLyBzcmMvY29uZmlncy9qYXZhc2NyaXB0LnRzXG5pbXBvcnQgZ2xvYmFscyBmcm9tIFwiZ2xvYmFsc1wiO1xudmFyIGphdmFzY3JpcHQgPSBbXG4gIHtcbiAgICBuYW1lOiBcInRzemhvbmcwNDExOmphdmFzY3JpcHRcIixcbiAgICBsYW5ndWFnZU9wdGlvbnM6IHtcbiAgICAgIGVjbWFWZXJzaW9uOiAyMDIyLFxuICAgICAgZ2xvYmFsczoge1xuICAgICAgICAuLi5nbG9iYWxzLmJyb3dzZXIsXG4gICAgICAgIC4uLmdsb2JhbHMubm9kZSxcbiAgICAgICAgLi4uZ2xvYmFscy5lczIwMjIsXG4gICAgICAgIGRvY3VtZW50OiBcInJlYWRvbmx5XCIsXG4gICAgICAgIG5hdmlnYXRvcjogXCJyZWFkb25seVwiLFxuICAgICAgICB3aW5kb3c6IFwicmVhZG9ubHlcIlxuICAgICAgfSxcbiAgICAgIHBhcnNlck9wdGlvbnM6IHtcbiAgICAgICAgZWNtYUZlYXR1cmVzOiB7XG4gICAgICAgICAganN4OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGVjbWFWZXJzaW9uOiAyMDIyLFxuICAgICAgICBzb3VyY2VUeXBlOiBcIm1vZHVsZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBsaW50ZXJPcHRpb25zOiB7XG4gICAgICByZXBvcnRVbnVzZWREaXNhYmxlRGlyZWN0aXZlczogdHJ1ZVxuICAgIH0sXG4gICAgcGx1Z2luczoge1xuICAgICAgXCJ1bnVzZWQtaW1wb3J0c1wiOiBkZWZhdWx0M1xuICAgIH0sXG4gICAgcnVsZXM6IHtcbiAgICAgIC4uLmRlZmF1bHQyLmNvbmZpZ3MucmVjb21tZW5kZWQucnVsZXMsXG4gICAgICBcInVudXNlZC1pbXBvcnRzL25vLXVudXNlZC1pbXBvcnRzXCI6IFwiZXJyb3JcIixcbiAgICAgIFwidW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnNcIjogW1xuICAgICAgICBcImVycm9yXCIsXG4gICAgICAgIHtcbiAgICAgICAgICB2YXJzOiBcImFsbFwiLFxuICAgICAgICAgIHZhcnNJZ25vcmVQYXR0ZXJuOiBcIl5fXCIsXG4gICAgICAgICAgYXJnczogXCJhZnRlci11c2VkXCIsXG4gICAgICAgICAgYXJnc0lnbm9yZVBhdHRlcm46IFwiXl9cIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQge1xuICBqYXZhc2NyaXB0XG59O1xuIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FpbWJhbHphbm8vRG9jdW1lbnRzL1dvcmtzcGFjZXMvUHJpdmF0ZS9sdWNhaW1iYWx6YW5vLmlvL2hvbmdob25nLm1lL3BhY2thZ2VzL2VzbGludC1jb25maWcvZGlzdC9pbmRleC5qc1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvbHVjYWltYmFsemFuby9Eb2N1bWVudHMvV29ya3NwYWNlcy9Qcml2YXRlL2x1Y2FpbWJhbHphbm8uaW8vaG9uZ2hvbmcubWUvcGFja2FnZXMvZXNsaW50LWNvbmZpZy9kaXN0XCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2Rpc3QvaW5kZXguanNcIjtpbXBvcnQge1xuICB0eXBlc2NyaXB0XG59IGZyb20gXCIuL2NodW5rLUMyV1VEUVE3LmpzXCI7XG5pbXBvcnQge1xuICB1bmljb3JuXG59IGZyb20gXCIuL2NodW5rLTdTRENBVFVPLmpzXCI7XG5pbXBvcnQge1xuICBuZXh0XG59IGZyb20gXCIuL2NodW5rLTNNUzY0WkpILmpzXCI7XG5pbXBvcnQge1xuICBwbGF5d3JpZ2h0XG59IGZyb20gXCIuL2NodW5rLTZUWVVDM0U3LmpzXCI7XG5pbXBvcnQge1xuICBwcmV0dGllclxufSBmcm9tIFwiLi9jaHVuay1ESlg0Mjc0RC5qc1wiO1xuaW1wb3J0IHtcbiAgcmVhY3Rcbn0gZnJvbSBcIi4vY2h1bmstUVlJQ0pLVVMuanNcIjtcbmltcG9ydCB7XG4gIHNvbmFyanNcbn0gZnJvbSBcIi4vY2h1bmstS01ZSjdPMkouanNcIjtcbmltcG9ydCB7XG4gIHRlc3RpbmdMaWJyYXJ5XG59IGZyb20gXCIuL2NodW5rLVNPUERZMktVLmpzXCI7XG5pbXBvcnQge1xuICB0dXJib1xufSBmcm9tIFwiLi9jaHVuay1JREFTTzRERy5qc1wiO1xuaW1wb3J0IHtcbiAgY29tbWVudHNcbn0gZnJvbSBcIi4vY2h1bmstUEJCUkRTQlouanNcIjtcbmltcG9ydCB7XG4gIGlnbm9yZXNcbn0gZnJvbSBcIi4vY2h1bmstUU9KM0tHVVkuanNcIjtcbmltcG9ydCB7XG4gIEdMT0JfRTJFLFxuICBHTE9CX0VYQ0xVREUsXG4gIEdMT0JfSlMsXG4gIEdMT0JfSlNYLFxuICBHTE9CX1RFU1QsXG4gIEdMT0JfVFMsXG4gIEdMT0JfVFNYXG59IGZyb20gXCIuL2NodW5rLUtMVDdTQ1NGLmpzXCI7XG5pbXBvcnQge1xuICBpbXBvcnRTb3J0XG59IGZyb20gXCIuL2NodW5rLUdFQk1XNUdILmpzXCI7XG5pbXBvcnQge1xuICBpbXBvcnRzXG59IGZyb20gXCIuL2NodW5rLUtSN1JNWjdWLmpzXCI7XG5pbXBvcnQge1xuICBqYXZhc2NyaXB0XG59IGZyb20gXCIuL2NodW5rLUpEN1FXN0M2LmpzXCI7XG5pbXBvcnQgXCIuL2NodW5rLUVWRkVJWE1CLmpzXCI7XG5cbi8vIHNyYy9pbmRleC50c1xuaW1wb3J0IHsgaXNQYWNrYWdlRXhpc3RzIH0gZnJvbSBcImxvY2FsLXBrZ1wiO1xudmFyIGhhc1R5cGVTY3JpcHQgPSBpc1BhY2thZ2VFeGlzdHMoXCJ0eXBlc2NyaXB0XCIpO1xudmFyIGhhc1R1cmJvID0gaXNQYWNrYWdlRXhpc3RzKFwidHVyYm9cIik7XG52YXIgdHN6aG9uZzA0MTEgPSBhc3luYyAob3B0aW9ucyA9IHt9LCAuLi51c2VyQ29uZmlncykgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZXNjcmlwdDogZW5hYmxlVHlwZVNjcmlwdCA9IGhhc1R5cGVTY3JpcHQsXG4gICAgcmVhY3Q6IGVuYWJsZVJlYWN0ID0gZmFsc2UsXG4gICAgdHVyYm86IGVuYWJsZVR1cmJvID0gaGFzVHVyYm8sXG4gICAgbmV4dDogZW5hYmxlTmV4dCA9IGZhbHNlLFxuICAgIHBsYXl3cmlnaHQ6IGVuYWJsZVBsYXl3cmlnaHQgPSBmYWxzZSxcbiAgICB0ZXN0aW5nTGlicmFyeTogZW5hYmxlVGVzdGluZ0xpYnJhcnkgPSBmYWxzZSxcbiAgICBnaXRpZ25vcmU6IGVuYWJsZUdpdGlnbm9yZSA9IHRydWVcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGNvbmZpZ3MgPSBbXTtcbiAgaWYgKGVuYWJsZUdpdGlnbm9yZSkge1xuICAgIGNvbmZpZ3MucHVzaCgoYXdhaXQgaW1wb3J0KFwiZXNsaW50LWNvbmZpZy1mbGF0LWdpdGlnbm9yZVwiKSkuZGVmYXVsdCgpKTtcbiAgfVxuICBjb25maWdzLnB1c2goXG4gICAgLi4uaWdub3JlcyxcbiAgICAuLi5qYXZhc2NyaXB0LFxuICAgIC4uLnVuaWNvcm4sXG4gICAgLi4uY29tbWVudHMsXG4gICAgLi4uaW1wb3J0U29ydCxcbiAgICAuLi5zb25hcmpzLFxuICAgIC4uLmltcG9ydHMsXG4gICAgLi4ucHJldHRpZXJcbiAgKTtcbiAgaWYgKGVuYWJsZVR5cGVTY3JpcHQpIHtcbiAgICBjb25maWdzLnB1c2goLi4udHlwZXNjcmlwdChvcHRpb25zKSk7XG4gIH1cbiAgaWYgKGVuYWJsZVJlYWN0KSB7XG4gICAgY29uZmlncy5wdXNoKC4uLnJlYWN0KG9wdGlvbnMpKTtcbiAgfVxuICBpZiAoZW5hYmxlVHVyYm8pIHtcbiAgICBjb25maWdzLnB1c2goLi4udHVyYm8pO1xuICB9XG4gIGlmIChlbmFibGVOZXh0KSB7XG4gICAgY29uZmlncy5wdXNoKC4uLm5leHQpO1xuICB9XG4gIGlmIChlbmFibGVQbGF5d3JpZ2h0KSB7XG4gICAgY29uZmlncy5wdXNoKC4uLnBsYXl3cmlnaHQpO1xuICB9XG4gIGlmIChlbmFibGVUZXN0aW5nTGlicmFyeSkge1xuICAgIGNvbmZpZ3MucHVzaCguLi50ZXN0aW5nTGlicmFyeSk7XG4gIH1cbiAgY29uZmlncy5wdXNoKC4uLnVzZXJDb25maWdzKTtcbiAgcmV0dXJuIGNvbmZpZ3M7XG59O1xudmFyIHNyY19kZWZhdWx0ID0gdHN6aG9uZzA0MTE7XG5leHBvcnQge1xuICBHTE9CX0UyRSxcbiAgR0xPQl9FWENMVURFLFxuICBHTE9CX0pTLFxuICBHTE9CX0pTWCxcbiAgR0xPQl9URVNULFxuICBHTE9CX1RTLFxuICBHTE9CX1RTWCxcbiAgc3JjX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2VzbGludC5jb25maWcubWpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9sdWNhaW1iYWx6YW5vL0RvY3VtZW50cy9Xb3Jrc3BhY2VzL1ByaXZhdGUvbHVjYWltYmFsemFuby5pby9ob25naG9uZy5tZS9wYWNrYWdlcy9lc2xpbnQtY29uZmlnL2VzbGludC5jb25maWcubWpzXCI7aW1wb3J0IHRzemhvbmcwNDExIGZyb20gJy4vZGlzdC9pbmRleC5qcydcblxuZXhwb3J0IGRlZmF1bHQgdHN6aG9uZzA0MTEoe1xuICBwcm9qZWN0OiAnLi90c2NvbmZpZy5qc29uJyxcbiAgdHNjb25maWdSb290RGlyOiBpbXBvcnQubWV0YS5kaXJuYW1lLFxuICByZWFjdDogdHJ1ZSxcbiAgbmV4dDogdHJ1ZSxcbiAgcGxheXdyaWdodDogdHJ1ZSxcbiAgdGVzdGluZ0xpYnJhcnk6IHRydWUsXG4gIHR1cmJvOiB0cnVlLFxuICB0eXBlc2NyaXB0OiB0cnVlXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLElBQUksZUFBZTtBQUNuQixJQUFJLFVBQVU7QUFDZCxJQUFJLFdBQVc7QUFDZixJQUFJLFVBQVU7QUFDZCxJQUFJLFdBQVc7QUFDZixJQUFJLFdBQVcsMkJBQTJCLFlBQVk7QUFDdEQsSUFBSSxZQUFZLDZCQUE2QixZQUFZO0FBQ3pELElBQUksZUFBZTtBQUFBLEVBQ2pCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFB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
