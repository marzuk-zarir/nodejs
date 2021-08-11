const express = require('express')
const publicRouter = express.Router()

publicRouter.get('/', (req, res) => {
    res.send('Home page')
})

/**
 * ! router.param('param_name', callback(req,res,next,param_value))
 * ? we can use our logic as param_name and set it as req object's property
 * * 'param_name' -> which param want to grab
 * * callback(req,res,next,param_value) -> req,res,next is common. last argument contains parameter value
 */

publicRouter.param('id', (req, res, next, adminId) => {
    // If someone hit param 'id' with 1, req.admin contains 'marzuk' otherwise 'anonymous'
    req.admin = adminId === '1' ? 'Marzuk' : 'Anonymous'
    next()
})

publicRouter.get('/user/:id', (req, res) => {
    res.send(`Hello ${req.admin}`)
})

/**
 * ! router.route('common_url')
 * * This create a common route for request methods. this help us to write code shortly
 */

publicRouter
    .route('/user')
    .get((req, res) => res.send('Get user'))
    .post((req, res) => res.send('Post user'))
    .put((req, res) => res.send('Put user'))
    .delete((req, res) => res.send('Delete user'))

/**
 * ! router.use(middleware)
 * * it use this middleware for this route only
 */

publicRouter.use((req, res, next) => {
    console.log('This middleware works only this router')
    next()
})

publicRouter.get('/mid', (req, res) => res.send('Hello world'))

module.exports = publicRouter
