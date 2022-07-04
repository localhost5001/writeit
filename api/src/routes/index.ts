import type { Express } from 'express'

import { postsRouter } from './posts.js'
import { writersRouter } from './writers.js'

function registerAppRoutes(app: Express) {
  app
    .use('/posts', postsRouter)
    .use('/writers', writersRouter)

  return app
}

export { registerAppRoutes }
