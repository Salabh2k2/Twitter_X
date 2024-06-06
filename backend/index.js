import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./config/database.js"

databaseConnection()
const app = express()

dotenv.config({
  path:".env"
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})