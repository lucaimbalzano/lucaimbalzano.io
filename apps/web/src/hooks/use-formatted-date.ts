import { useFormatter } from '@simbashrd/i18n/client'
import dayjs from 'dayjs'

const DEFAULT_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
} as const

type Options = {
  relative?: boolean
  formatOptions?: typeof DEFAULT_FORMAT_OPTIONS
}

export const useFormattedDate = (date: Date | string, options: Options = {}) => {
  const { relative = false, formatOptions = DEFAULT_FORMAT_OPTIONS } = options

  const format = useFormatter()
  const now = new Date()

  const convertedDate = typeof date === 'string' ? new Date(date) : date

  if (relative) {
    const weeksDiff = dayjs().diff(date, 'week')

    return Math.abs(weeksDiff) > 1
      ? format.dateTime(convertedDate, formatOptions)
      : format.relativeTime(convertedDate, now)
  }

  return format.dateTime(convertedDate, formatOptions)
}
