/**
 * ! event with modular pattern
 * * we extends 'events' class in OSEvent
 * * we create a instance of OSEvent
 * * then we call a method named 'start'. this method add listener named 'startUp'
 * * then we emit 'start' event
 */

const OSEvent = require('./event/4.3-OSEvent') // class
const osEvent = new OSEvent() //  create instance
osEvent.start() //  call start method which has add listener name 'start'
osEvent.emit('startUp', '7.00am') //  finally raise 'start' event

// => Ubuntu start on 7.00am
