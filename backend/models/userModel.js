const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add a name']
    },
    email: {
        type: String,
        require: [true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Please add a password']
    },
    isHost: {
        type: Boolean,
        require: true
    },
},
    {
        timestamps: true
    })

const User = mongoose.model('User', userSchema)

module.exports = User
module.exports.userSchema = userSchema