import { Octokit } from '@octokit/rest'
import { env } from '@simbashrd/env'
import { ratelimit } from '@simbashrd/kv'
import { TRPCError } from '@trpc/server'

import { GITHUB_REPO, GITHUB_USERNAME } from '@/lib/constants'
import { getIp } from '@/utils/get-ip'

import { createTRPCRouter, publicProcedure } from '../trpc'

const getKey = (id: string) => `github:${id}`

export const githubRouter = createTRPCRouter({
  getRepoStars: publicProcedure.query(async ({ ctx }) => {
    const ip = getIp(ctx.headers)

    const { success } = await ratelimit.limit(getKey(ip))

    if (!success) throw new TRPCError({ code: 'TOO_MANY_REQUESTS' })

    const octokit = new Octokit({
      auth: env.GITHUB_TOKEN
    })

    const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO
    })

    return data.stargazers_count
  })
})
