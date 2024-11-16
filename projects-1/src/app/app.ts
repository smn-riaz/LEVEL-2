import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000


//parser
app.use(express.json())
app.use(express.text())














const logger = (req:Request, res:Response, next:NextFunction) => {
  // console.log(req.url, req.method, req.hostname)

  next()
}



app.get('/',logger, (req:Request , res:Response) => {
  res.send('Hello World from Shahman Riaz')
})

app.post('/', (req:Request, res:Response) => {
  // console.log(req.body);
  res.json({
    message:"Successfully recieved data"
  })
})


app.get("/:userId/:subId",(req:Request, res:Response)=> {
  console.log(req.params);
  res.json({
    user: req.params.userId,
    dev:req.params.subId
  })
})

app.get("/",(req:Request, res:Response)=> {
  console.log(req.query);
  res.json()
})





export default app