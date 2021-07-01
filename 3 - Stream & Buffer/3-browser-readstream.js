const http = require('http')
const formHtml = `<form action="/submit" method="post">
<textarea name="form-text" cols="60" rows="10"></textarea>
<input type="submit" value="Submit">
</form>`

/**
 * ! read stream from web browser
 * * when we submit a form 'request' object listen different event
 * * in this way form method should be 'post' and input filed name attribute required
 * ? 'data' => this event give us single single chunk data as buffer in callback
 * ? 'end' => this event fire when data all chunk received...no callback return
 */

// print as chunk
// const app = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(formHtml)
//         res.end()
//     } else if (req.url === '/submit' && req.method === 'POST') {
//         req.on('data', (chunk) => {
//             console.log(chunk.toSting())
//         })
//         res.write('<h1>Thanks for submit form</h1>')
//         res.end()
//     } else {
//         res.write('Sorry, page not found')
//         res.end()
//     }
// })

// app.listen(6060, () => console.log('Server started...'))

/**
 * * 'end' event emit when all data chunk is received(no callback want)
 * * we can push all chunk buffer into a array when data event emit
 * * then convert all chunk buffer into a one buffer with 'Buffer.concat'
 * ? and this one buffer store all posted data
 */
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        req.end(formHtml)
    } else if (req.url === '/submit' && req.method === 'POST') {
        const fullData = []

        req.on('data', (chunk) => fullData.push(chunk)) // push chunk buffer in array

        req.on('end', () => {
            const data = Buffer.concat(fullData) // concat all buffer into one buffer
            console.log('Full data stream completed')
            console.log(data.toString())
        })

        res.end('<h1>Thanks for submit</h1>')
    } else {
        res.end('Sorry, page not found')
    }
})

server.listen(6060, () => {
    console.log('server is listening on http://localhost:6060')
})
