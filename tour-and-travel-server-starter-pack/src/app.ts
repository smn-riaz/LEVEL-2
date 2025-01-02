import express, { Application, Request, Response } from "express";
import userRouter from "./module/user/user.router";
import tourRouter from "./module/tour/tour.router";

const app:Application = express();


app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/tour", tourRouter)


app.get('/',(req:Request,res: Response) => {
    res.send({
        status:true,
        message:"Running"
    })
})


export default app;
