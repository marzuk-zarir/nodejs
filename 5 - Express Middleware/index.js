const express = require('express')
const chalk = require('chalk')

const app = express()
const adminRouter = express.Router()
const port = process.env.PORT || 3000

/**
 * ! What is middleware
 * * Middleware is a function that execute during the request-response cycle in express app
 * * It contains req,res,next functions as parameters
 * * It can change request and response object and execute any code
 * * It can pass the req and res for next middleware function by calling next()
 * * It also can end the response and complete the request
 *
 * ! Middleware Types:
 * * 1.Builtin
 * * 2.Application
 * * 3.Router
 * * 4.Error handling
 * * 5.3rd party
 *
 * ! Use custom middleware
 * * app.use(custom_middleware)
 */

// Custom middleware
const printMethod = (req, res, next) => {
    let consoleColor
    switch (req.method) {
        case 'GET':
            consoleColor = chalk.green
            break
        case 'POST':
            consoleColor = chalk.blue
            break
        case 'PUT':
            consoleColor = chalk.yellow
            break
        case 'DELETE':
            consoleColor = chalk.red
            break
        default:
            consoleColor = chalk.white
    }
    console.log(`${consoleColor(req.method)} ${req.url}`)
    next() // without calling this app is hang in this middleware
}

/**
 * ? Error handling middleware
 * * this type of middleware receive a extra error parameter which contains thrown error
 * * this middleware doesn't work if there is no error happening
 * note: without all parameters this middleware doesn't work
 * note: error handling middleware should use as last middleware. otherwise doesn't work
 */
const errorMiddleware = (err, req, res, next) => {
    console.log(chalk.red(err.message))
    res.status(500).send('Internal server error !!')
}

app.use('/admin', adminRouter)

// ? Application middleware - full express app use this middleware
app.use(printMethod)
app.use(errorMiddleware)
app.all('/', (req, res) => {
    res.send('Hello Express')
})

// middleware function
const routerMiddleware = (req, res, next) => {
    console.log('This middleware works only this route')
    next()
}

// ? Router middleware - works when this router object
adminRouter.use(routerMiddleware)
adminRouter.all('/dashboard', (req, res) => {
    res.send('Welcome admin dashboard')
})

// ? Builtin middleware - express.json()
// ? 3rd party middleware - 3rd party package

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
