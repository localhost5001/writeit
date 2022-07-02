import { Router } from 'express'

const postsRouter = Router()

postsRouter.get('/', (req, res) => {
  res.json({ text: 'posts' })
})

export { postsRouter }
