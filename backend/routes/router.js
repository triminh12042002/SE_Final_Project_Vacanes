const router = require('express').Router()
const accommodationRouter = require('./accommodationRoutes')
const userRouter = require('./userRoutes')
const reservationRouter = require('./reservationRoutes')
const adminRouter = require('./adminRoutes')

router.use('/accommodation', accommodationRouter)
router.use('/user', userRouter)
router.use('/reservation', reservationRouter)
router.use('/admin', adminRouter)
module.exports = router