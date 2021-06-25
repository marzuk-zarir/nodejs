/**
 * ! importing a modules:
 * * when we use core or 3rd party module we should use module name as argument in require func
 * * when we use local module we should use relative path in require func
 * todo: es6 import syntax is not working in nodejs
 */

// ? importing local module
const math = require('./math')

// ? importing 3rd party/builtin module
const express = require('express')
const os = require('os')

console.log(math.add(5, 5)) // => 10
console.log(math.sub(10, 5)) // => 5

/**
 * ! when we import our module it returns every exported property in export obj
 * * so when we need a specific property we should destructuring property from export object
 */
console.log(math) // => { add: [function], sub: [function] }

// ? import only add function from math module
const { add } = require('./math.js') // es6 destructuring
console.log(add(20, 20)) // => 40
