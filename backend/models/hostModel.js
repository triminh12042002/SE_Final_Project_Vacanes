const mongoose = require('mongoose')

const hostSchema = mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    isVerified: false,
    accommodations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'accommodation' }]
    },
    {
        timestamps: true
    });

const Host = mongoose.model('Host', hostSchema)


// test
// const test = async ()=>{
//     const host = new Host({
//         name: 'A',
//         email: 'abcd@gmail.com',
//         password: 'blank',
//         isHost: true
//     })

//     const allUser = await User.find({})
//     console.log(allUser)
// }

// test()

module.exports = Host