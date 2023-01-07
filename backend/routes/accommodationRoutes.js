const express = require('express')
const router = express.Router()
const asyncHandler = require('../utils/asyncHandler')
const {getAllAccommodation,getAccommodation, createAccommodation, updateAccommodation, deleteAcccommodation} = require('../controllers/accommodationControllers')

router.get('/', asyncHandler(getAllAccommodation))
router.get('/:roomId', asyncHandler(getAccommodation))
router.post('/:id', asyncHandler(createAccommodation))
router.post('/:id/edit/:roomId', asyncHandler(updateAccommodation))
router.post('/:id/delete/:roomId', asyncHandler(deleteAcccommodation))

module.exports = router