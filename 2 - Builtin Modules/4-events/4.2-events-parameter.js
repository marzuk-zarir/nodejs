const EventEmitter = require('events')

/**
 * * we can pass event parameter after event_name when emit or raise event
 * * then we can receive all parameters on callback func when added a listener
 */
const ubuntu = new EventEmitter()
ubuntu.on('startup', (time) => {
    console.log(`Ubuntu is started on ${time}`)
})
ubuntu.emit('startup', '7.00pm')

/**
 * * we can pass multiple parameter serially but it is not recommended
 * ! when we pass multiple parameter we should pass a single object as parameter with multiple property (recommended)
 */
const operatingSystem = new EventEmitter()
operatingSystem.on('startup', ({ osName, time }) => {
    console.log(`${osName} is started on ${time}`)
})
operatingSystem.emit('startup', { osName: 'windows 10', time: '8.00pm' })
