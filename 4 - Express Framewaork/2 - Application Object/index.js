const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/**
 * ! Topics:
 * ! 1. app.mount & mount event
 * ! 2. app.all
 * ! 3. app.enable, app.disable & app.enabled, app.disabled
 * ! 4. app.get & app.set
 * ! 5. app.route
 * ! 6. app.set('view engine') & app.render
 */

/**
 * ? Application local object
 * * -> this local object is visible form all file inside same app
 * * -> if we access this obj from index file we use 'app.locals'
 * * -> if we access this obj from external file but same application we use 'req.app.locals'
 */

app.locals.severName = 'Express Server 4.17'

app.get('/', (req, res) => {
    console.log(req.app.locals.severName) // => Express Server 4.17
    res.send('Hello Express')
})

/**
 * ? Mount path
 * * -> we can create child app one file in express
 * * -> childApp.mount gives us which is the parent route for child app
 * note: mount path always same for child app through child app has different routes
 * ? mount event
 * * -> when a child app mounted in parent, 'mount' event fire on child app and parent app is accessibly from this event parameter
 */

// Child app
const admin = express()

// Fire mount event when child app mounted
admin.on('mount', (parentAppObj) => {
    // console.log(parentAppObj) //=> parent app object
})

// Declare that if any request come form '/admin' route then pass this to the children app
app.use('/admin', admin)

// Child app route
admin.get('/', (req, res) => {
    console.log(admin.mountpath) // => /admin
    res.send('Child app')
})

// Child app route
admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath) // => /admin
    res.send('Welcome to admin dashboard')
})

/**
 * ? Works with all request method at once
 * * -> app.all(route, handler) -> this methods works with universal request methods in same route
 */

app.all('/universal', (req, res) => {
    res.send(
        `<h1>This page is accessible for all request methods</h1>
        Your requested method is ${req.method}`
    )
})

/**
 * ? Enable or disable a settings in app
 * * -> app.enable('option string') -> enable option for whole app
 * * -> app.disable('option string') -> disable option for whole app
 *
 * * -> app.enabled('option string') -> return true if provided option is enabled otherwise false
 * * -> app.disabled('option string') -> return true if provided option is disabled otherwise false
 *
 * note: all options https://expressjs.com/en/4x/api.html#app.set
 */

// Example: by default express route is case-insensitive. 'option' and 'OptIon' is same
app.enable('case sensitive routing') // now app's route is case sensitive
console.log(app.enabled('case sensitive routing')) // => true

// Same way we can disable this option by using app.disable
// app.disable('case sensitive routing')

app.get('/option', (req, res) => {
    res.send('Welcome to option route')
})

/**
 * ? Set & get a string
 * * -> app.set(key,value) -> we can set a key and value as string
 * * -> app.get(key) -> this returns value of the provided key
 * note: app.get works with two ways. 1st app.get() can declare a get route and handler. 2nd get a key's value which is set before
 */

app.set('name', 'marzuk-zarir')
console.log(app.get('name')) // => marzuk-zarir

/**
 * ? Common request methods in same route
 * * -> app.route('common_path').reqMethod(handler) -> This create a common route for request methods. this help us to write code shortly
 */

app.route('/users')
    .get((req, res) => {
        res.send('Get all users')
    })
    .post((req, res) => {
        res.send('Create a user')
    })
    .put((req, res) => {
        res.send('Update a user')
    })
    .delete((req, res) => {
        res.send('Delete a user')
    })

/**
 * ? Template engine setup
 * * -> app.set('view engine', 'engine_name') -> set a template engine for express app
 * * -> app.render('template_name', local_views_obj,callback(error,html))
 * -> it looks 'project_root/views/template_name' by default and parse it to html as local_views_obj and send it to callback. if parse successful error will be null
 * note: app.render() and res.render() is not same
 */

app.set('view engine', 'ejs')
app.get('/template', (req, res) => {
    app.render('test', { names: ['marzuk', 'dev', 'cherei', 'don'] }, (err, html) => {
        if (!err) {
            res.send(html)
        } else {
            res.json({ status: '500 internal server error' })
        }
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
