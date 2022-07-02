import express from 'express'
import cors from 'cors'

import { connectDb } from 'db/index.js'
import { appConfig } from 'appConfig.js'

await connectDb()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, world')
})

app.listen(8080, () => {
  console.log(`API is listening at http://localhost:${appConfig.appPort}`)
})
