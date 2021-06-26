/**
 * ! absolute path
 * * absolute path is same for every location(dir location)
 * * it is always start from os root
 * ? /home/marzuk/Documents/Nodejs
 *
 * ! relative path
 * * relative path is location specific
 * * relative path '../' means one dir before './' means dir roots
 * ? ../../Nodejs
 */

// ? __filename shows our current file path & __dirname shows current directory
console.log(__filename) // => /home/marzuk/Documents/Nodejs/2 - Builtin Modules/path.js
console.log(__dirname) // => /home/marzuk/Documents/Nodejs/2 - Builtin Modules

/**
 * ! path module:
 * * path module was built for desktop related path information. this module can't works with url or website's path
 * ? basename(path_location) => last files or dir from full path
 * ? extname(path_location) => extension of file
 * ? format(path_object) => format and return full path as os formate
 * ? isAbsolute(path_location) => if provided path are absolute it return true otherwise false
 * ? parse(path_location) => return a object as path_location. path.formate ' s reverse
 * ? normalize(path) => return path after remove unwanted slashes and dots
 * ? join(dir or file...) => all comma separated dir or filename are joined and return a full path as os based
 * ? resolve(dir or file...) => join all path as argument and return absolute path
 */
const path = require('path')
const curFile = __filename
const curDir = __dirname

// basename
console.log(path.basename(curFile)) // => 1-path.js
console.log(path.basename(curDir)) // => 2 - Builtin Modules

// extension name
console.log(path.extname('marzuk/js/sample.html')) // => .html

// format
const pathObj = { dir: 'user/local', name: 'logo', ext: '.png' }
console.log(path.format(pathObj)) // => user/local/logo.png

// isAbsolute
console.log(path.isAbsolute('/home/marzuk/local/sample.txt')) // => true
console.log(path.isAbsolute('../../../local/sample.txt')) // => false

// parse
console.log(path.parse('/home/marzuk/local/test/sample/script.js'))
// => {
//     root: '/',
//     dir: '/home/marzuk/local/test/sample',
//     base: 'script.js',
//     ext: '.js',
//     name: 'script'
// }

// normalize
console.log(path.normalize('.//src//dist')) // => src/dist

// join
console.log(path.join('marzuk', 'web', 'src', 'js', 'script.js')) // => marzuk/web/src/js/script.js

// resolve
console.log(path.resolve('marzuk', 'web', 'src', 'js', 'script.js')) // => /home/marzuk/Documents/Nodejs/marzuk/web/src/js/script.js

/**
 * * by default nodejs use forward slash to separate dir. so windows platform it shows forward slash
 * * but we can use path.win32 property to covert path into windows formate
 *
 * ! windows path:
 * * directory separated with back slash like (C:\Program Files\vscode\bin\code.cmd)
 *
 * ! unix or macos path:
 * * directory separated with forward slash like (/home/marzuk/node/src/script.js)
 */

// without use win32 property
console.log(path.resolve(curDir)) // => /home/marzuk/Documents/Nodejs/2 - Builtin Modules

// with use win32 property
console.log(path.win32.resolve(curDir)) // => \home\marzuk\Documents\Nodejs\2 - Builtin Modules
