const mongoose = require('mongoose')
const schema = mongoose.Schema

// mongoose.promise = Promise

const accommodationSchema = new schema({
    title: { type: String, unique: false },
    description: { type: String, unique: false },
    location: { type: String, unique: false },
    numberOfPeople: { type: Number, unique: false },
    pricePerNight: { type: Number, unique: false },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    imageUrlList: [{
        type: String
    }],
    reservations:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
})

const Accommodation = mongoose.model('Accommodation', accommodationSchema)
module.exports = Accommodation