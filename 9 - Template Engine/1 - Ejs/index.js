const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('pages/index', {
        pageTitle: 'Home page',
        content: { title: 'This is home page' }
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about', {
        pageTitle: 'About page',
        content: { title: 'This is about page' }
    })
})

app.get('/contacts', (req, res) => {
    res.render('pages/contacts', {
        pageTitle: 'Contact page',
        content: { title: 'This is contact page' }
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
