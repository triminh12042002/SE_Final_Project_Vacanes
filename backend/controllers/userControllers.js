const express = require('express')

const registerUser = (req, res) => {
    res.status(201).json({
        message: 'register successfully'
    })
}

module.exports = registerUser