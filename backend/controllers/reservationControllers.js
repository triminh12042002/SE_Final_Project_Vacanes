const express = require('express')

const User = require('../models/userModel')
const Reservation = require('../models/reservationModel')


// @edsc Get list reservations
// @route GET /api/reservations
// @access Private
const getReservations = async (req, res) => {
    const reservations = await Reservation.find({creator: req.user.id})
    
    res.status(200).json(reservations)
}

const setReservation = async (req, res) => {
    

}

module.exports = {getReservations, setReservation}

