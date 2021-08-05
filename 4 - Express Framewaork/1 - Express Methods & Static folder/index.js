const path = require('path')
const express = require('express')

// ? Express is return a function which returns a object
const app = express()

// * Simple Html content send as get request in '/server' route
app.get('/server', (req, res) => {
    res.send('<h1>Hello world. I am from express sever</h1>')
})

/**
 * ? app.use() -> this method use a function on this app
 * ! express methods:
 * * - express.json(option) -> parse request body in 'application/json' formate data as js obj
 * * - express.text(option) -> parse request body in 'plain/text' formate data as js obj
 * * - express.raw(option) -> parse request body in 'application/octet-stream' formate complete stream
 * * - express.urlencoded(option) -> parse request body in 'application/x-www-form-urlencoded' formate data as js obj
 */

// app.use(express.json())
// app.use(express.text())
// app.use(express.raw())
// app.use(express.urlencoded())
app.post('/methods', (req, res) => {
    // json -> // => { name: "marzuk zarir" } (pure js object)
    // text -> // => { name: "marzuk zarir" } (plain text)
    // raw -> // => <Buffer 7b 0a 7d ...> (stream) (use toString for parse)
    // urlencoded -> // => { name: "marzuk zarir" } (pure js object) (deprecated)
    console.log(req.body)
    res.send('Fetch data in console')
})

/**
 * ? express.static('static directory path', option: {})
 * * -> this middleware convert provided directory into static
 * * -> so, every file of this directory can be accessible form browser by path wise
 * * -> mime-types of static directory is auto set by express server
 */
const staticPath = path.resolve(__dirname, 'static')
app.use(express.static(staticPath))

app.listen(3000, () => {
    console.log('Express server is listening on port 3000')
})
