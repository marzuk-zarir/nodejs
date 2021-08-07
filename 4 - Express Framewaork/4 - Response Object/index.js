const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/**
 * ! res.app
 * * -> we can access app with this property though handler is in other file
 * ! res.render(file_path_after_views_dir, localVariable)
 * * -> send a html file from template engine to client
 * * -> localVariable is accessibly from template file
 * ! res.locals
 * * -> set local variable for template engine outside of render function
 * ! res.headerSent
 * * -> return true if response was already end otherwise false
 */

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    // console.log(res.app) // => app object
    res.locals.headline = 'This is home page'
    res.render('index', { pageTitle: 'Home' })
    console.log(res.headersSent) // => true
})

/**
 * ! res.send('data')
 * * -> send response with data and close the connection
 * ! res.json(array | object)
 * * -> convert provided data in json and send this json response and close the connection
 * ! res.end()
 * * -> send response and close the connection
 * note: this three function through error if connection is already close
 */

app.get('/res', (req, res) => {
    // res.send('Response object')
    // res.json({ name: 'marzuk zarir', age: 16 })
    // res.end()
})

/**
 * ! res.status(http_status_code)
 * * -> set status code in header but connection not close
 * ! res.sendStatus(http_status_code)
 * * -> set status code in header and write status code description write in response body. also connection close
 */

app.get('/status', (req, res) => {
    // res.status(404)
    res.sendStatus(400)
})

/**
 * ! res.formate(object: { 'Accept_Header': callback })
 * * -> we can declare Accept_Header as property and value as callback which is call if Accept_Header match
 * * -> if general match or doesn't sent 'Accept' in header call 1st callback. if doesn't match call default callback
 */
app.get('/formate', (req, res) => {
    res.format({
        'text/plain': () => res.send('hello world'),
        'text/html': () => res.send('<h1>hello world</h1>'),
        'application/json': () => res.json({ message: 'hello world' }),
        default: () => res.sendStatus(400)
    })
})

/**
 * ! res.location(url)
 * * -> set location header and value is url. client can redirect with url if want
 * ! res.redirect(url)
 * * -> redirect url
 * ! res.get(header_name)
 * * -> return a header value from name. if doesn't exist return undefined
 * ! res.set(header_name, header_value)
 * * -> set header with provided header name and header value
 */

app.get('/hello', (req, res) => {
    // res.location('/users').end()
    // res.redirect('/users')
    // console.log(res.get('location')) // => '/users'
    res.set('name', 'marzuk').end()
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
