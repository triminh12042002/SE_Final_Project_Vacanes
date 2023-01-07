const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

mongoose.connection.on('error', err => { console.log(err) });

mongoose.connection.once('open', ()=> {console.log('Database connected')})

const connectDB = async()=>{
    await mongoose.connect(MONGO_URI)
}

const disconnectDB = async ()=>{
    await mongoose.disconnect()
}

module.exports  = {connectDB, disconnectDB}