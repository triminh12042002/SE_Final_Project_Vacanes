<<<<<<< HEAD
// const router = require('express').Router()
// const accommodationRouter = require('./accommodationRoutes')
// const userRouter = require('./userRoutes')

// router.use('/accommodation', accommodationRouter)
// router.use('/user', userRouter)
=======
const router = require('express').Router()
const accommodationRouter = require('./accommodationRoutes')
const userRouter = require('./userRoutes')
const reservationRouter = require('./reservationRoutes')

router.use('/accommodation', accommodationRouter)
router.use('/user', userRouter)
router.use('/reservation', reservationRouter)
>>>>>>> 22350b17e81e001992fd2ff88af438454c4d0912

// module.exports = router