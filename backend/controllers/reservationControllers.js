const Accommodation = require('../models/accommodationModel')
const User = require('../models/userModel')
const Reservation = require('../models/reservationModel')


const validate = async (roomId, dateStart, dateEnd) => {
    const room = await Accommodation.findById(roomId)
    dateStart = new Date(room.dateStart)
    dateEnd = new Date(room.dateEnd)
    for (let i = 0; i < room.reservations.length; i++) {
        if (dateStart < room.reservations[i].dateStart && dateEnd > room.reservations[i].dateEnd) {
            return false
        }
    }
    return true
}

const createReservation = async (req, res)=>{
    const {id, roomId} = req.params
    const {dateStart, dateEnd} = req.body
    const response = await validate(roomId, dateStart, dateEnd)
    if(!response){
        return res.status(400).json({
            error: 'Room already reserved'
        })
    }

    const user = await User.findById(id)
    if(!user){
        return res.status(400).json({
            error: 'User not exist'
        })
    }

    const newReservation = new Reservation({
        dateStart, dateEnd, creator: id, accommodation: roomId
    })

    newReservation.save()
    return res.status(200).json(newReservation)
}

module.exports = {createReservation}