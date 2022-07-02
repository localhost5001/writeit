import { Router } from 'express'

const keywordsRouter = Router()

keywordsRouter.get('/', (req, res) => {
  res.json({
    text: 'reactjs'
  })
})

export { keywordsRouter }
