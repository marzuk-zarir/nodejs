/**
 * ! Global Object:
 * ? 'global' object is a object where every builtin functions are define in nodejs environment
 * ? like as 'window' object in browser
 * global object contains:
 * console, process, __dirname, __filename, Buffer(class), setTimeOut, module, export, require etc
 */

global.console.log('Hello nodejs') // => Hello nodejs
console.log(global.process) // => process{...}
console.log(global.__dirname) // => /home/marzuk/Public/Nodejs/2 - Builtin Module System
console.log(global.__filename) // => /home/marzuk/Public/Nodejs/2 - Builtin Module System/1-global-object.js

/**
 * ! Global vs Window Object:
 * * every variables, functions, class which are declares in global scope automatically attach with 'window' object
 * * but 'global' object doesn't contains var, funcs, class of global scope
 */

const a = 10
function test() {
    console.log('test func')
}
// ? working fine
// console.log(window.a) // => 10
// console.log(window.test())  // => 'test func'

// ! Error
// console.log(global.a) // => undefined
// console.log(global.test()) // => global.test() is not a function

/**
 * ! why nodejs throw and error when we want access a global scope's item with 'global' object ?
 * * In browser, every files global scope's items are attach with 'window' object.
 * * So, every file's global scope's items can share their value with other files through 'window' object.
 *
 * ? But a nodejs project contains huge number of files. If every file's global scope's items share their data with other files, 'global' will have huge number of data
 * * and one file's can easily change or replace other's data.
 * * so, nodejs stores data file wise which is called 'module'
 * * if we declare a variable in global scope of a file, that variable can visible on only that file
 */

// module is object under global object
console.log(module) // => Module{...}
