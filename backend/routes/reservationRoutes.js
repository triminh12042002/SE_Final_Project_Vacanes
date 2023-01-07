
const express = require('express')
const router = express.Router()
const asyncHandler = require('../utils/asyncHandler')
const {createReservation} = require('../controllers/reservationControllers')

router.post('/:id/reserve/:roomId', asyncHandler(createReservation))

module.exports = router