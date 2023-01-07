require('dotenv').config()
const express = require('express')
const mongoDB = require('./config/db')
const http = require('http')
const app = express()
const port = process.env.PORT || 5000

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// to req and pass data through req.body
app.use(express.urlencoded({extended: false}))


app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/reservations', require('./routes/reservationRoutes'))
app.use('/api/accommodations', require('./routes/accommodationRoutes'))
app.use('/api/hosts', require('./routes/hostRoutes'))

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Homepage'})
// })  


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