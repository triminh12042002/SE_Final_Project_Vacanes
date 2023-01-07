
const express = require('express')
const router = express.Router()
const asyncHandler = require('../utils/asyncHandler')
const {getUnveridiedHost, getUnverifiedRoom, verifyHost, verifyRoom} = require('../controllers/adminControllers')

router.get('/host', asyncHandler(getUnveridiedHost))
router.get('/room', asyncHandler(getUnverifiedRoom))
router.get('/hostVerify/:id', asyncHandler(verifyHost))
router.get('/roomVerify/:roomId', asyncHandler(verifyRoom))

module.exports = router