const fs = require('fs/promises')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(abc)
})

/**
 * ! Asynchronous error
 * * by default async error does not handle by express
 * * but we can catch it with our handler
 */

app.get('/async', async (req, res, next) => {
    try {
        const data = await fs.readFile('file-does-not-exist', 'utf-8')
        res.send(data.length)
    } catch (e) {
        next(e)
    }
})

/**
 * ! 404 error handler
 * * by default 404 error is not handled by server side
 * * so, error handling not catch it
 * * we can catch at last middleware
 * note: by default express handle it with 'Cannot GET /route' msg to client
 */

// We can overwrite it
app.use((req, res, next) => {
    res.status(404)
    next('Requested route is not exist')
})

/**
 * ! Synchronous error
 * * by default express auto handle sync error.
 * * in development environment express send full error to client
 * * in production environment express send 'Internal server error' with 500 status code
 * note: we can overwrite this default error handling middleware
 */

// Change error default error handling middleware. it works on production env
app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500)
        res.send('Internal server error')
    } else {
        res.send('There was an error')
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
