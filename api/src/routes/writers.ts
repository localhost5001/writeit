import { Router } from 'express'

const writersRouter = Router()

writersRouter.get('/', (req, res) => {
  res.json({ text: 'writers' })
})

export { writersRouter }
