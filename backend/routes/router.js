const router = require('express').Router()
const accommodationRouter = require('./accommodationRoutes')
const userRouter = require('./userRoutes')
const reservationRouter = require('./reservationRoutes')

router.use('/accommodation', accommodationRouter)
router.use('/user', userRouter)
router.use('/reservation', reservationRouter)

module.exports = router