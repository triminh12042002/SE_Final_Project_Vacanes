const express = require('express')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    console.log(req.body)

    if(!email || !name || !password) {
        res.status(400)
        throw new Error('Please fill in all fields')    
    }

    const userExists = await User.findOne({email}) 
    
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt(9)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Login user
// @route POST api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    // check user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

const getAllUser = async (req, res) => {
    const allUsers = await User.find({})
    res.status(200).json(allUsers)
}

module.exports = {registerUser, loginUser, getAllUser}