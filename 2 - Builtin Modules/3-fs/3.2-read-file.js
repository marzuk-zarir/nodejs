const fs = require('fs')

/**
 * ! read file
 * ? readFile(path, callback(error, readData)) => callback receive err and data args err.
 * * => if err occur while file read it will return error
 * * => readData return file content as 'Buffer'. if error occur readData will null
 */

/**
 * ! Buffer data
 * * as read file return data as buffer we should covert it in readable format
 * * if read file is in json formate buffer covert automatically js obj when parsing
 * * if read file is in other formate we should convert with 'decoder' or toString() method
 */

// read json file
fs.readFile('./read/read.json', (err, data) => {
    if (err) {
        console.log("File can't read")
        return
    }
    data = JSON.parse(data)
    console.log(data)
})

// read text file
fs.readFile('./read/read.txt', (err, data) => {
    if (err) {
        console.log("file can't read")
        return
    }
    console.log(data.toString())
})
