
import Express  from "express";
import createHttpError from "http-errors";
import morgan from "morgan";


import AuthRoute from './routes/auth.route.js'
import EnvConfig from "./config/EnvConfig.js";
import ConnectDB from "./db/ConnectDB.js";


//connected to db
ConnectDB()

//app
const app = new Express();

app.get("/",(req,res)=>res.json({"msg":"It works"}))


// auth
app.use(morgan("dev"))
app.use("/auth",AuthRoute)

app.use(async(req,res,next)=>{
    // const error = new Error("My custom gen error")
    // error.status = 404
    // next(error)
    next(createHttpError.NotFound("this route is not exist"))
})


app.use((err,req,res,next)=>{
    res.status(err.status||500);
    res.send({
    error:{
        status:err.status||500,
        message:err.message,
    }
    })
})


const port = EnvConfig.PORT
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})