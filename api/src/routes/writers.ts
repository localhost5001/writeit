import { Router } from 'express'

import * as writerRepo from 'repositories/writersRepository.js'

const writersRouter = Router()

writersRouter.get('/', async (req, res) => {
  res.json({ text: 'writers' })
})

export { writersRouter }
