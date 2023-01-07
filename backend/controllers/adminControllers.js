const Accommodation = require('../models/accommodationModel')
const User = require('../models/userModel')
const Reservation = require('../models/reservationModel')
const Host = require('../models/hostModel')


const getUnveridiedHost = async (req, res)=>{
    const unveridiedHosts = await Host.find({isVerified: false})
    return res.status(200).json(unveridiedHosts)
}

const getUnverifiedRoom = async(req, res)=>{
    const unveridiedRooms = await Accommodation.find({isVerified: false})
    return res.status(200).json(unveridiedRooms)
}

const verifyHost = async(req, res)=>{
    const {id} = req.params
    const host = await Host.findById(id)
    host.isVerified = true 
    await host.save()
    return res.status(200).json(host)
}

const verifyRoom = async(req, res)=>{
    const {roomId} = req.params
    const room = await Accommodation.findById(roomId)
    room.isVerified = true 
    await room.save()
    return res.status(200).json(room)
}

module.exports = {getUnveridiedHost, getUnverifiedRoom, verifyHost, verifyRoom}