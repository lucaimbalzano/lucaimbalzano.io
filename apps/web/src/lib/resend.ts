import { flags } from '@simbashrd/env'
import { Resend } from 'resend'

export const resend = flags.comment ? new Resend(process.env.RESEND_API_KEY) : null
