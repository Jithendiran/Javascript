/**
 * Documenter : E.K.Jithendiran
 * Date       : 03-11-2021
 * 
 * Event Emitters
 */
/**
 worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: 
 mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

 On the backend side, Node.js offers us the option to build a similar system using the events module.

 This module, in particular, offers the EventEmitter class, which we'll use to handle our events.
 */

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

/**
 This object exposes, among many others, the on and emit methods.

 * emit is used to trigger an event
 * on is used to add a callback function that's going to be executed when the event is triggered

 */

//start is a name for event we can give any name
console.log("Before listen 1");
eventEmitter.on('start', () => {
    console.log('started 1st')//started 1st
})
console.log("After listen 1");
//emit an event
eventEmitter.emit('start')

console.log("Before listen 2");
// it is not executed
eventEmitter.on('start', () => {
    console.log('started 2nd')
})

/*
O/p 
Before listen 1
After listen 1
started 1st
Before listen 2
*/


// passing parameter to event emitter
eventEmitter.on('ji', (a, b) => {
    console.log(a + b)//parameter emitter
})

eventEmitter.emit('ji', "parameter ", "emitter")



const myEmitter1 = new EventEmitter();

myEmitter1.on('event', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously 1');
    });
});
console.log("Before emit 1");

myEmitter1.emit('event', 'a', 'b');

console.log("After emit 1");

//not executed
myEmitter1.on('event', (a, b) => {
    setImmediate(() => {
        console.log('this happens asynchronously 2');
    });
});


/*
The EventEmitter object also exposes several other methods to interact with events, like

once(): add a one-time listener
removeListener() / off(): remove an event listener from an event
removeAllListeners(): remove all listeners for an even
*/

let m = 0;
eventEmitter.once('event', () => {
  console.log(++m);
});
eventEmitter.emit('event');
// Prints: 1
eventEmitter.emit('event');
// Ignored


//remove 

//myEmitter.removeListener('event',callbackname)

eventEmitter.removeAllListeners()
eventEmitter.emit('ji'); // nothing prints

//Reference
//https://nodejs.dev/learn/the-nodejs-event-emitter