const EventEmitter = require('events')

class OSEvent extends EventEmitter {
    start() {
        this.on('startUp', (startTime) => {
            console.log(`Ubuntu start on ${startTime}`)
        })
    }
}

module.exports = OSEvent
