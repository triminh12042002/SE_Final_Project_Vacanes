const express = require('express')

const registerUser = (req, res) => {
    res.status(201).json({
        message: 'register successfully'
    })
}

const loginUser = (req, res) => {
    res.status(201).json({
        message: 'register successfully'
    })
}


const getMe = (req, res) => {
    res.status(201).json({message: 'get user data'})

}

module.exports = {registerUser, getMe, loginUser}