const fs = require('fs')
const users = [
    { name: 'john doe', age: 35 },
    { name: 'Bernice Rudd', age: 41 },
    { name: 'Shaun Dillard', age: 40 },
    { name: 'Tiffany Simon', age: 22 },
    { name: 'Dirk Rollins', age: 18 }
]

/**
 * * read write is i/o intensive task. so, this task won't handle main thread normally.
 * * read write works with service workers thread
 */

/**
 * ! writeFile
 * * we can write file sync or async
 * * but we should always use async bcz sync task blocks main thread
 * ? fs.writeFile(file_path, data, callback(error)) => callback take 1 args: error...if error occur while writing file error takes the error otherwise this arg is null
 */

// write json file
fs.writeFile('./write/write.json', JSON.stringify(users), (err) => {
    if (err) throw new Error('Json file wrote unsuccessful')
    console.log('json file write successful')
})

// write txt file
fs.writeFile('./write/write.txt', 'Hello, node\n', (err) => {
    if (err) throw new Error('text file wrote unsuccessful')
    console.log('text file write successful')
})

/**
 * ! appendFile
 * * if we use write file twice or more it will clear previous content of file
 * * but append file just add new content. previous content won't delete
 */

// append text into a file
fs.appendFile('./write/1-write.txt', 'this is appended line', (err) => {
    if (err) throw new Error('appended unsuccessful')
    console.log('appended successful')
})

console.log('this is line is execute before write files')
