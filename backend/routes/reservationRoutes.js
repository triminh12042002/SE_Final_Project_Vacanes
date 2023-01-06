const express = require('express')
const router = express.Router()
const {getReservations, setReservation} = require('../controllers/reservationControllers')
const {protect} = require('../middleware/authMiddleware')

// get list reservations
router.route('/').get(protect, getReservations).post(protect, setReservation)

module.exports = router