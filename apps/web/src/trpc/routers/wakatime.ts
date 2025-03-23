import { env } from '@simbashrd/env'
import { ratelimit } from '@simbashrd/kv'
import { TRPCError } from '@trpc/server'

import { getIp } from '@/utils/get-ip'

import { createTRPCRouter, publicProcedure } from '../trpc'

const getKey = (ip: string) => `wakatime:${ip}`

export const wakatimeRouter = createTRPCRouter({
  get: publicProcedure.query(async ({ ctx }) => {
    try {
      const ip = getIp(ctx.headers)

      // Handle rate limiting
      try {
        const { success } = await ratelimit.limit(getKey(ip))
        if (!success) throw new TRPCError({ code: 'TOO_MANY_REQUESTS' })
      } catch (error) {
        console.error('Rate limiting error:', error)
        // Continue execution even if rate limiting fails - optional
      }

      // Create Authorization header with proper Base64 encoding
      const authHeader = `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString('base64')}`

      // Make the API request
      const response = await fetch(
        'https://wakatime.com/api/v1/users/current/all_time_since_today',
        {
          headers: {
            Authorization: authHeader
          }
        }
      )

      // Check for API errors
      if (!response.ok) {
        const errorBody = await response.text()
        console.error('WakaTime API error:', response.status, errorBody)
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: `WakaTime API error: ${response.status}`
        })
      }

      // Parse the response
      const data = await response.json()

      if (!data.data || typeof data.data.total_seconds !== 'number') {
        console.error('Unexpected WakaTime response format:', data)
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Invalid response format' })
      }

      return {
        seconds: data.data.total_seconds
      }
    } catch (error) {
      console.error('WakaTime procedure error:', error)
      if (error instanceof TRPCError) throw error
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch WakaTime data'
      })
    }
  })
})
