const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    hosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'host' }]
},
{
    timestamps: true
}) 

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin