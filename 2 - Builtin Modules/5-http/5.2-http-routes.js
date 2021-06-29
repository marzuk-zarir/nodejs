const http = require('http')

/**
 * * in createServer callback req.url method give which url are requested under same host
 * * by default, '/' is root route
 */
const app = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.write('This is Home page')
            break
        case '/about':
            res.write('This is About page')
            break
        case '/blog':
            res.write('This is Blog page')
            break
        default:
            res.write('Error...Page not found')
            break
    }
    res.end()
})

app.listen(8080)
