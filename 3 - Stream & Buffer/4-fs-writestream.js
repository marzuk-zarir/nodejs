const fs = require('fs')

const readStream = fs.createReadStream('./read-data.txt')
const writeStream = fs.createWriteStream('./write-data.txt')

/**
 * ! mainly write stream is almost same with read stream
 * * write stream mainly write data with little little chunk
 * ? writeStream.write(Big_data) => write Big_data in little chunk
 */

// in this example we read data without stream and write data with stream
// fs.readFile('./read-data.txt', (err, data) => {
//     writeStream.write(data)
// })

/**
 * ! pipe
 * * pipe is a short way to write a writeStream from a readStream
 * ? readStream.pipe() => if we pass a writeStream as argument then it works like writeStream.write()
 */
readStream.pipe(writeStream)
