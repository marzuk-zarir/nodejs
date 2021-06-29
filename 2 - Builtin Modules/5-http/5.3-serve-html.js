const fs = require('fs')
const http = require('http')

const app = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, html) => {
        if (err) {
            res.write('Error, Page not found')
            res.end()
            return
        }
        res.write(html)
        res.end()
    })
})

app.listen(8080)
