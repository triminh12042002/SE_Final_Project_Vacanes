const express = require('express')
const router = express.Router()
const {registerUser, getAllUser, loginUser} = require('../controllers/userControllers')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/get', getAllUser)  
router.get('/get', getAllUser)

module.exports = router
