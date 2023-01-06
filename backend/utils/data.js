require('dotenv').config()
const mongoDB = require('../config/db')
const Accommodation = require('../models/accommodationModel')
const User = require('../models/userModel')
const Host = require('../models/hostModel')

mongoDB.connectDB()

// title: { type: String, unique: false },
// description: { type: String, unique: false },
// location: { type: String, unique: false },
// numberOfPeople: { type: Number, unique: false },
// pricePerNight: { type: Number, unique: false },
// creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// imageUrlList: [{
//     type: String
// }],
// reservations:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
// isVerified

const seed1 = async () => {
    await Accommodation.deleteMany({})
    for (let i = 0; i < 10; i++) {
        const accom = new Accommodation({
            title: `Place ${i}` ,
            description: 'asdja sjkdajs djajskd aksd',
            location: 'asd ad',
            numberOfPeople: 10,
            pricePerNight: 12,
            isVerified: (i % 2 ? true : false),
            creator: '63b8355f8625791e204b18bc',
            imageUrlList: ['https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720&fbclid=IwAR342APqRYs9qTbZV4jWiqbMEUV_sRhZuHFOoNYqv0oFgOGvFHUjKIHmJT4']
        })
        await accom.save()
    }
    mongoDB.disconnectDB()
} 

// 1 user là host, 1 k
const seed = async () => {
    await User.deleteMany({})
    await Host.deleteMany({})
    const user = await User({
        name: 'host1',
        email: 'adsas@gmail.com',
        password: 'asdasd',
        isHost: true    
    })
    await user.save()
    const host = new Host({
        userId: user._id
    })
    await host.save()

    mongoDB.disconnectDB()
} 


seed1()