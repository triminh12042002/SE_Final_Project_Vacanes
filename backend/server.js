const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const app = express()
const port = 5000

const Host = require('./models/hostModel')

connectDB()

// to res with an json object
app.use(express.json())

// to req and pass data through req.body
app.use(express.urlencoded({extends: false}))


app.use('/api/users', require('./routes/userRoutes'))
app.get('/', (req, res) => {
    res.status(200).json({message: 'Homepage'})
})  

app.listen(port, () => console.log(`Server start at port ${port}`))