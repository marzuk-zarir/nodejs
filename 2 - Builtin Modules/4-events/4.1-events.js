const EventEmitter = require('events')

/**
 * ! Events module
 * * events module return a class
 * * event is almost like 'Dom Event'
 * * we can create events from create a instance from event module
 *
 * ? event.on(event_name, callback) => this method add a listener with event & callback will call when event happen
 * ? event.emit(event_name) => this method raise the event as event_name
 *
 * todo always first create event.on() method then call with event.emit() method
 */

const dataConnection = new EventEmitter()
dataConnection.on('connect', () => console.log('Data connection Successful'))
setTimeout(() => {
    dataConnection.emit('connect')
}, 2000)

// ? once is for single time raise...if we raise multi time it will ignore
let i = 1
dataConnection.once('count', () => console.log(i++))
dataConnection.emit('count') // => 1
dataConnection.emit('count') // => ignore
dataConnection.emit('count') // => ignore

dataConnection.on('disconnect', () => console.log('Data disconnected')) // not raise or emit

// ? eventNames() return all added listener in array...except listener which is created with once()
console.log(dataConnection.eventNames()) // => [ 'connect', 'disconnect' ]
