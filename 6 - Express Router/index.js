const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const publicRouter = require('./router/publicRouter')
const adminRouter = require('./router/adminRouter')

/**
 * ! Express router
 * * Express gives us router object to create and use a router
 * * It helps us to make our code more readable formate
 * * So, we can create separate file for each route which is scalable for future
 */

app.use('/', publicRouter)
app.use('/admin', adminRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
