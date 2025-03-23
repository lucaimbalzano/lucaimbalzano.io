import simbashrd from '@simbashrd/eslint-config'

export default simbashrd(
  {
    project: './tsconfig.json',
    tsconfigRootDir: import.meta.dirname
  },
  {
    ignores: ['apps/**', 'packages/**']
  }
)
