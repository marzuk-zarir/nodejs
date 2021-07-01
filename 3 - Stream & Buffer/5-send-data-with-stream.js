const http = require('http')
const fs = require('fs')

const readStream = fs.createReadStream('./send-data.txt')

/**
 * ! send data as stream to client
 * * createServer(request, response)
 * ? request => request is read stream
 * ? response => response is write stream
 */

const app = http.createServer((req, res) => {
    readStream.pipe(res)
})

app.listen(3000)
