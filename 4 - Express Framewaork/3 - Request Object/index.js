const express = require('express')
const port = process.env.PORT || 3000

const app = express()
const admin = express()

/**
 * ! req.baseUrl
 * * -> base url of app. if request in parent app it returns empty string otherwise returns mount path's base url
 * ! req.originalUrl
 * * -> original url after host name with query
 * note: req.url(node builtin method) breaks in child app
 * ! req.path
 * * -> path after host without query parameters. In child app return path after mount path without query parameters
 * ! req.hostname
 * * -> hostname of url
 * ! req.ip
 * * -> request client's ip address
 * ! req.method
 * * -> request method in Uppercase
 * ! req.protocol
 * * -> request protocol
 * ! req.secure
 * * -> if request protocol is 'https' return true otherwise false
 */

app.use('/admin', admin)

admin.get('/dashboard', (req, res) => {
    // console.log(req.baseUrl) // => '/admin'
    // console.log(req.originalUrl) // => '/admin/dashboard?filter=name'
    // console.log(req.path) // => '/dashboard'

    res.send('Welcome to admin dashboard')
})

app.get('/', (req, res) => {
    // console.log(req.baseUrl) // => '' (empty string)
    // console.log(req.originalUrl) // => '/?filter=name'
    // console.log(req.path) // => '/'
    // console.log(req.hostname) // => 'localhost'
    // console.log(req.ip) // => in insomnia '::ffff:127.0.0.1'. in browser '::1'
    // console.log(req.method) // => 'GET'
    // console.log(req.protocol) // => 'http'
    // console.log(req.secure) // => false

    res.send('Hello Express')
})

/**
 * ! req.params
 * * -> a object which contains dynamic route
 * * -> object key name is set by name of dynamic route name. value is set by dynamic route
 * note: in params object all value is in string
 * ! req.query
 * * -> a object which contains all querystring key value pair
 */
app.get('/user/:id', (req, res) => {
    // console.log(req.params) // => { id: '5' }
    // console.log(req.params.id) // '5' (string)

    // console.log(req.query) // => { filter: 'name' }
    // ? If request url is 'localhost:3000/users/5?filter'
    // console.log(req.query) // => { filter: '' }

    res.send('Welcome to user dashboard')
})

/**
 * ! req.body
 * * -> contain request payload and parse it as parser func in js object
 * ? ref: details in application object folder
 */

// JSON parser
app.use(express.json())
app.post('/user', (req, res) => {
    console.log(req.body) // => { name: 'marzuk zarir' }
    console.log(req.body.name) // => 'marzuk zarir'

    res.send('User created')
})

/**
 * ! req.app
 * * -> In real life application all handler store in other files. but we need to access app object from handler file. we can use it with req.app
 */

const appController = require('./controller/appController')
app.set('app name', 'Express tutorial')
app.get('/app', appController) // controller access set value print it console // => 'Express tutorial'

/**
 * ! req.route
 * * -> an object which contains path, reqMethod, match regex etc
 */
app.get('/route', (req, res) => {
    console.log(req.route)
    res.send('Welcome')
})

/**
 * ! req.accepts(value: string | array)
 * * -> if request header's accept value is match with parameter value or header accept property support it...it return match parameter value otherwise return false
 * * -> we can pass array of value also in parameter
 * ! req.get(header: string)
 * * -> we can get a header property's value as parameter. if header doesn't exist return undefine
 * note: header in parameter is case insensitive. so, name and Name is same
 */

app.get('/accept', (req, res) => {
    // ? Client send 'Accept: text/html'
    // console.log(req.accepts('html')) // => 'html'
    // ? Client send 'Accept: **/*'
    // console.log(req.accepts('text/html')) // => 'text/html'
    // ? Client send 'Accept: application/json'
    // console.log(req.accepts('text/html')) // => false
    // ? Client send 'Accept: application/json'
    // console.log(req.accepts(['html', 'json'])) // => false 'json'

    console.log(req.get('name')) // => 'marzuk'

    res.send('Done')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
