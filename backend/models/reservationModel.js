const mongoose = require('mongoose')
const schema = mongoose.Schema

const reservationSchema = new schema({
    dateStart: {type: Date},
    dateEnd: {type: Date},
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    accommodation: { type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation' },
})

const Reservation = mongoose.model('Reservation', reservationSchema)
module.exports = Reservation