const express = require('express')
const router = express.Router()
const {getAllAccommodation,getAccommodation, createAccommodation, updateAccommodation, deleteAcccommodation} = require('../controllers/accommodationControllers')
const asyncHandler = require('../utils/asyncHandler')
const {registerUser, getAllUser, loginUser, requestToBeHost, getHostAccommodation} = require('../controllers/userControllers')

router.post('/:id', asyncHandler(createAccommodation))
router.post('/:id/edit/:roomId', asyncHandler(updateAccommodation))
router.post('/:id/delete/:roomId', asyncHandler(deleteAcccommodation))
router.get('/:id/request', requestToBeHost)
router.get('/:id', getHostAccommodation)

module.exports = router
