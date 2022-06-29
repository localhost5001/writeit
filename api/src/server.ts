import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, world')
})

app.listen(8080, () => {
  console.log("API is listening at http://localhost:8080")
})
