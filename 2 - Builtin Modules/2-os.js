const os = require('os')

// software
console.log(os.type()) // => Linux
console.log(os.platform()) // => linux
console.log(os.arch()) // => x64
console.log(os.homedir()) // => /home/marzuk
console.log(os.userInfo()) // => {...}
console.log(os.version()) // => 62~20.04.1-Ubuntu SMP Wed Jun 2 08:55:04 UTC 2021

// hardware
console.log(os.freemem()) // => 881987584
console.log(os.cpus()) // => [{},{}...]
