import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./config/database.js"
import cookieParser from "cookie-parser"
import userRoute from "./routes/userRoute.js"
import tweetRoute from "./routes/tweetRoute.js"
import cors from "cors"
databaseConnection()
const app = express()

dotenv.config({
  path:".env"
})
//middleware

const corsOption = {
  origin:"http://localhost:3000",
  credentials:true,
  optionSuccessStatus:200
}
app.use(cors(corsOption))
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(cookieParser())

//api

app.use("/api/v1/user",userRoute)
app.use("/api/v1/tweet",tweetRoute)

// app.get("/home",(req,res)=>{
//   res.status(201).json({
//     message:"Response from backend"
//   })
// })

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})