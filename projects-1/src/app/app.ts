import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000


//parser
app.use(express.json())
app.use(express.text())

const userRouter = express.Router()
const courseRouter = express.Router()

app.use('/',userRouter)
app.use('/api/v1/course',courseRouter)


userRouter.post('/api/v1/users/create-user',(req:Request, res:Response)=> {
  const user = req.body;
  // console.log(user);
  res.json({
    success:true,
    message:"User is created Successfully",
    data:user
  })
})

courseRouter.post('/create-course', (req:Request, res:Response) => {
  const course = req.body
  res.json({
    success:true,
    message:"User is created Successfully",
    data:course
  })
})










const logger = (req:Request, res:Response, next:NextFunction) => {
  // console.log(req.url, req.method, req.hostname)

  next()
}



app.get('/',logger, (req:Request , res:Response,next:NextFunction) => {
  try{
    res.send(something)
  } catch(error){
    console.log(error);
    next(error)
    // If error is not handled globally
    // res.status(400).json({
    //   success: false,
    //   message:"Failed to get data"
    // })
  }
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


app.all('*', (req:Request,res:Response) => {
res.status(400).json({
  success:false,
  message:""
})
})





//global error handler
app.use((error:any,req:Request,res:Response,next:NextFunction)=> {
  console.log(error);
  if(error) {
   res.status(400).json({
    success:false,
    message:"Something went wrong"
   })
  }
})


export default app