/**
 * Documenter : E.K.Jithendiran
 * Date       : 05-11-2021
 * 
 * Event Emitters
 */
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

console.log("Before listen 1");
myEmitter.on('event', () => {
    console.log('an event occurred! 1st'); //an event occurred! 1st 
});
console.log("After listen 1");

myEmitter.emit('event');

console.log("After emit 1");

myEmitter.on('event', () => {
    console.log('an event occurred! 2nd'); //it not executed
});
console.log("After listen 2");

/*
Before listen 1
After listen 1
an event occurred! 1st
After emit 1
After listen 2
*/
const myEmitter1 = new MyEmitter();

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
O/p
Before emit 1
After emit 1
this happens asynchronously 1
*/

//async
const myEmitter2 = new MyEmitter();
let m = 0;
myEmitter2.once('event', () => {
  console.log(++m);
});
myEmitter2.emit('event');
// Prints: 1
myEmitter2.emit('event');
// Ignored

//remove 

//myEmitter.removeListener('event',callbackname)

myEmitter.removeAllListeners()
myEmitter.emit('event'); // nothing prints


//Reference
//https://nodejs.org/api/events.html