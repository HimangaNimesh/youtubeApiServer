import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=> {
        console.log("Connected to MongoDB")
    })
    .catch((error)=> {
        throw error
    })
}

app.listen(8000, ()=>{
    connect()
    console.log("Connected!....")
})