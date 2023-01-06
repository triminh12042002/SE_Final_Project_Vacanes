const router = require('express').Router()
const accommodationRouter = require('./accommodationRoutes')
const userRouter = require('./userRoutes')

router.use('/accommodation', accommodationRouter)
router.use('/user', userRouter)

module.exports = router