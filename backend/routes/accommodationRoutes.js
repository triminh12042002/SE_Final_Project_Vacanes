const express = require('express')
const router = express.Router()
const asyncHandler = require('../utils/asyncHandler')
const {getAllAccommodation, createAccommodation, updateAccommodation, deleteAcccommodation} = require('../controllers/accommodationControllers')

router.get('/', asyncHandler(getAllAccommodation))
router.post('/:id', asyncHandler(createAccommodation))
router.post('/:id/edit/:roomId', asyncHandler(updateAccommodation))
router.post('/:id/delete/:roomId', asyncHandler(deleteAcccommodation))

module.exports = router