import exp from 'constants'
import express, { Application, Request, Response } from 'express'
const app:Application = express()
import cors from 'cors'


// parsers
app.use(express.json())
app.use(cors())

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


export default app