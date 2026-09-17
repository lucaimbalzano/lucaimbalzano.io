import { commentsRouter } from './routers/comments'
import { githubRouter } from './routers/github'
import { likesRouter } from './routers/likes'
import { ratesRouter } from './routers/rates'
import { spotifyRouter } from './routers/spotify'
import { usersRouter } from './routers/users'
import { viewsRouter } from './routers/views'
import { wakatimeRouter } from './routers/wakatime'
import { createTRPCRouter } from './trpc'

export const appRouter = createTRPCRouter({
  github: githubRouter,
  wakatime: wakatimeRouter,
  views: viewsRouter,
  likes: likesRouter,
  spotify: spotifyRouter,
  comments: commentsRouter,
  rates: ratesRouter,
  users: usersRouter
})

export type AppRouter = typeof appRouter
