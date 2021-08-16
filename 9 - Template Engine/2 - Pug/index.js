const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'pug')
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Pug Template Engine',
        image: {
            src: 'https://images.unsplash.com/photo-1629042388423-d7eb9acbfadc',
            alt: 'Test Image'
        },
        program: ['javascript', 'php', 'java', 'python', 'c#'],
        auth: false,
        name: 'Marzuk zarir'
    })
})

app.get('/home', (req, res) => {
    res.render('pages/inc/home', {
        title: 'My site | Home',
        heading: 'This is home page'
    })
})

app.get('/about', (req, res) => {
    res.render('pages/inc/about', {
        title: 'My site | About',
        heading: 'This is about page'
    })
})

app.get('/contact', (req, res) => {
    res.render('pages/inc/contact', {
        title: 'My site | Contact',
        heading: 'This is contact page'
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
