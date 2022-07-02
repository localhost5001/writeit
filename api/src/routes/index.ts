import type { Express } from 'express'

import { postsRouter } from './posts.js'
import { writersRouter } from './writers.js'
import { keywordsRouter } from './keywords.js'

function registerAppRoutes(app: Express) {
  app
    .use('/posts', postsRouter)
    .use('/writers', writersRouter)
    .use('/keywords', keywordsRouter)

  return app
}

export { registerAppRoutes }
