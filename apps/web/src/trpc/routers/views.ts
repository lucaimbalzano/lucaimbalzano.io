import { eq, posts, sql } from '@simbashrd/db'
import { ratelimit, redis, redisKeys } from '@simbashrd/kv'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { getIp } from '@/utils/get-ip'

import { createTRPCRouter, publicProcedure } from '../trpc'

const getKey = (id: string) => `views:${id}`

export const viewsRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ slug: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const ip = getIp(ctx.headers)

      const { success } = await ratelimit.limit(getKey(`get:${ip}`))

      if (!success) throw new TRPCError({ code: 'TOO_MANY_REQUESTS' })

      const cachedViews = await redis.get<number>(redisKeys.postViews(input.slug))

      if (cachedViews) {
        return {
          views: cachedViews
        }
      }

      const post = await ctx.db
        .select({ views: posts.views })
        .from(posts)
        .where(eq(posts.slug, input.slug))

      if (!post[0]) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Post not found'
        })
      }

      await redis.set(redisKeys.postViews(input.slug), post[0].views)

      return {
        views: post[0].views
      }
    }),
  increment: publicProcedure
    .input(z.object({ slug: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const ip = ctx.headers.get('x-forwarded-for') ?? '0.0.0.0'

      const { success } = await ratelimit.limit(getKey(`increment:${ip}`))

      if (!success) throw new TRPCError({ code: 'TOO_MANY_REQUESTS' })

      const views = await ctx.db
        .insert(posts)
        .values({
          slug: input.slug,
          views: 1
        })
        .onConflictDoUpdate({
          target: posts.slug,
          set: {
            views: sql<number>`${posts.views} + 1`
          }
        })
        .returning()

      await redis.set(redisKeys.postViews(input.slug), views[0]?.views)
    })
})
