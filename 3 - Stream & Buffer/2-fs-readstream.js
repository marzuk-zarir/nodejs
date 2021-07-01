const fs = require('fs')

/**
 * ! read file with stream
 * * when we read a large file without stream it takes too much time
 * ? fs.createReadStream(read_path,encoding) => create a stream object with 'data' event
 * ? data event fire when a buffer(chuck of data) is ready...it pass buffer as callback arg
 * todo: encoding is optional...if we not use encoding we can use toString() to decode buffer
 */

const streamData = fs.createReadStream('./read-data.txt', 'utf-8')
streamData.on('data', (chunk) => {
    console.log(chunk)
})

/**
 * * in this case we read a big data from (data.txt) size about 22 megabyte
 * * without stream it takes too much time to read this data
 */
// ? read data without stream
fs.readFile('./read-data.txt', 'utf-8', (err, data) => {
    console.log(data)
})

console.log('this line is print at first')
