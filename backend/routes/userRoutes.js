const express = require('express')
const router = express.Router()
const {registerUser, getAllUser, loginUser, requestToBeHost, getHostAccommodation} = require('../controllers/userControllers')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/get', getAllUser)  
router.get('/:id/request', requestToBeHost)
router.get('/:id', getHostAccommodation)

module.exports = router
