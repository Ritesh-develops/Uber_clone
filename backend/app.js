const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const connecttoDb = require('./db/db')
const userRoutes = require("./routes/user.routes")

const express = require("express");
const connectDb = require("./db/db");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connecttoDb()

app.use(cors())

app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/users', userRoutes)

module.exports = app;
