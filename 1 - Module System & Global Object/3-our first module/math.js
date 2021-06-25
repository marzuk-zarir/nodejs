/**
 * ! export our local modules
 * * module.exports is object
 * * in this object, every value is accessible from other files or modules
 * * we should follow one way in our code
 */

// ! module.exports inline syntax
// module.exports.add = (a, b) => a + b
// module.exports.sub = (a, b) => a - b

// ! module.exports syntax(recommended)
const add = (a, b) => a + b
const sub = (a, b) => a - b
module.exports = { add, sub } // => module.exports = { add: add, sub: sub }

// ! exports syntax
// exports.add = (a, b) => a + b
// exports.sub = (a, b) => a - b

// console.log(module.exports)
