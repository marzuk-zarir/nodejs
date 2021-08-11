const express = require('express')
const adminRouter = express.Router()

adminRouter.get('/', (req, res) => {
    res.send('Welcome to admin dashboard')
})

adminRouter.get('/login', (req, res) => {
    res.send('Welcome to login page')
})

module.exports = adminRouter
