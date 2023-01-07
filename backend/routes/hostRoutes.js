const express = require('express')
const router = express.Router()
const asyncHandler = require('../utils/asyncHandler')

router.post('/:id', asyncHandler(createAccommodation))
router.post('/:id/edit/:roomId', asyncHandler(updateAccommodation))
router.post('/:id/delete/:roomId', asyncHandler(deleteAcccommodation))
