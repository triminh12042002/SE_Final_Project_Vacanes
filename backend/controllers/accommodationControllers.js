const Accommodation = require('../models/accommodationModel')
const User = require('../models/userModel')
const Host = require('../models/hostModel')

// title: { type: String, unique: false },
// description: { type: String, unique: false },
// location: { type: String, unique: false },
// numberOfPeople: { type: Number, unique: false },
// pricePerNight: { type: Number, unique: false },
// creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// imageUrlList: [{
//     type: String
// }],
// reservations:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
// isVerified

const isHost = async (id)=>{
    const user = await User.findById(id)
    if(!user){
        return {ok: false, message: 'User not exist'}
    }
    if(!user.isHost){
        return {ok: false, message: 'Only host can create the accommodation'}
    }

    return {ok: true}
}

const getAllAccommodation = async (req, res)=> {
    const allRooms = await Accommodation.find({isVerified: true}, '-isVerified')
    return res.status(200).json(allRooms)
}


const createAccommodation = async (req, res)=> {
    const {id} = req.params
    const response = await isHost(id)
    if (!response.ok){
        return res.status(400).json({
            error: res.message
        })
    }
    console.log(req.body)
    const roomData = req.body

    if(!roomData){
        return res.status(400).json({
            error: 'Require data for creating'
        })
    }

    const newRoom = await Accommodation({...roomData, creator: id})
    await newRoom.save()
    // update rooms
    const host = await Host.find({userId: id})
    host.accommodations.push(newRoom._id)
    await host.save()

    return res.status(200).json(newRoom)
}

// check user ton tai -> check co phai la host -> check co phai creator
const updateAccommodation = async (req, res)=> {
    const {id, roomId} = req.params
    const response = await isHost(id)
    if (!response.ok){
        return res.status(400).json({
            error: res.message
        })
    }

    const roomData = req.body.accommodation
    if(!roomData){
        return res.status(400).json({
            error: 'Require data for updating'
        })
    }

    //Room: check room exist and authored or not
    const roomUpdate = await Accommodation.findById(roomId)
    if(!roomUpdate) {
        return res.status(400).json({
            error: 'Accommodation does not exist'
        })
    }
    if(roomUpdate.userId != id){
        return res.status(400).json({
            error: 'Unauthorized for updating'
        })
    }

    await roomUpdate.update({...roomData})
    return res.status(200).json(roomUpdate)
}

const deleteAcccommodation = async (req, res)=> {
    const {id, roomId} = req.params
    const user = await User.findById(id)

    if(!user){
        return res.status(400).json({
            error: 'User not exist'
        })
    }

    if(!user.isHost){
        return res.status(400).json({
            error: 'Only host can delete the accommodation'
        })
    }
    
    const deleteRoom = await Accommodation.findById(roomId)
    if(!deleteRoom){
        return res.status(400).json({
            error: 'Accommodation does not exist'
        })
    }

    await deleteRoom.remove()
    return res.status(400).json({
        message: 'Remove successfully'
    })
}

module.exports = {getAllAccommodation, createAccommodation, updateAccommodation, deleteAcccommodation}