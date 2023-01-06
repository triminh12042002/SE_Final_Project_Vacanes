require('dotenv').config()
const express = require('express')
const mongoDB = require('./config/db')
const http = require('http')
const app = express()
const Router = require('./routes/router')
const Host = require('./models/hostModel')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', Router)

// Error handler
app.all('*', (req, res)=>{
    throw new ExpressError('Page not found', 404)
})

app.use((err, req, res, next)=>{
    const {message = 'Something went wrong', statusCode = 500} = err
    res.status(statusCode).json({message, statusCode, err})
})




const port = process.env.PORT || 8080
const startServer = async ()=>{
    try {
        
        await mongoDB.connectDB()
        http.createServer(app).listen(port, ()=>{
            console.log(`Listening port ${port}`)
        })
    }catch(err){
        console.log(`Server cannot start with error: ${err}`)
    }
}

startServer()