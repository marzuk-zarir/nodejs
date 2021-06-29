const http = require('http')

/**
 * ! http module
 * * http module given a object with Agent,Server,createServer,methods,status_code methods and properties
 */
// console.log(http)

/**
 * * we can create server with createServer method
 * ? createServer(callback(request, response)) => returns a server object which is listenable on specific port
 * ? => in callback we receive request and response object...res.write is use for write on webpage
 * ? => in callback lastly we should response.end()
 */

const app = http.createServer((req, res) => {
    res.write('<h1>Node Server</h1><br />')
    res.write('Hello Node...')
    res.end()
})

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080')
})

// this event is raise when server is listening
app.on('listening', () => {
    console.log('port listened')
})

// this event is raise when request send to server
app.on('connection', () => {
    console.log('browser connected')
})

app.on('error', () => {
    console.log('Error')
})
