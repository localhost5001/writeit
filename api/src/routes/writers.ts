import { Router } from 'express'
import { writersRepository } from 'repositories/index.js'

const writersRouter = Router()

writersRouter.get('/', async (req, res) => {
  res.json({ text: 'writers' })
})

export { writersRouter }
