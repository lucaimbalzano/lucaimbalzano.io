const isProduction = process.env.NODE_ENV === 'production'

export const SITE_URL = isProduction ? 'https://docs.honghong.me' : 'http://localhost:3002'
export const SITE_TITLE = 'Docs | Luca - A Full Stack Engineer'
export const SITE_DESCRIPTION =
  "Explore comprehensive documentation and resources for Luca's projects"
export const SITE_KEYWORDS = [
  'simbashrd',
  'Web Development',
  'Programming',
  'UI/UX Design',
  'GitHub projects',
  'Documentation'
]
