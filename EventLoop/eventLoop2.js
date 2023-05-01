/**
 * @author: E.K.Jithendiran
 * Date: 01.05.2023
 *
 * This is the working example of event loop
 * 1st read @file eventLoop.js
 */

const fs = require('fs');

/**
 * When running setTimeout with delay 0ms and I/O async method the order execution is not guaranteed
 * 
 * because when we set 0ms delay/ or no delay, Compiler will overwrite it with 1 ms delay
 */
// exp: 1
fs.readFile(__dirname + '/read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error : ", err);
    } else {
        console.log("Data : ", data);
    }

})
setTimeout(() => {
    console.log("Inside Time Out");
    process.nextTick(() => console.log("Inner setTimeoutInside NextTick Queue"))
})
Promise.resolve().then(() => console.log("Inside Promise Queue"))
process.nextTick(() => console.log("Inside NextTick Queue"))

/**
 * Op
    Inside NextTick Queue
    Inside Promise Queue
    Inside Time Out
    Inner setTimeoutInside NextTick Queue
    Data :  Event Loop
 */


// exp: 2
// ref : https://www.youtube.com/watch?v=tVWFg6y6Wdg&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=47

/**
 * SetImmediate is runned befor I/O because for 1st time there is no call back in I/O queue. 
 * so it go to I/O polling check's is there any completed I/o operation if there any now it will put in the I/O queue
 * I/O polling will be run after I/O call back queue
 */
fs.readFile(__dirname + '/read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error : ", err);
    } else {
        console.log("Data : ", data);
    }


})
setTimeout(() => {
    console.log("Inside Time Out");
    process.nextTick(() => console.log("Inner setTimeoutInside NextTick Queue"))
})
Promise.resolve().then(() => console.log("Inside Promise Queue"))
process.nextTick(() => console.log("Inside NextTick Queue"))
setImmediate(() => { console.log("Inside Immediate") })

/**
 * Op
    Inside NextTick Queue
    Inside Promise Queue
    Inside Time Out
    Inner setTimeoutInside NextTick Queue
    Inside Immediate
    Data :  Event Loop
 */

// exp: 3

fs.readFile(__dirname + '/read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error : ", err);
    } else {
        console.log("Data : ", data);
    }

    Promise.resolve().then(() => console.log("Inner fs Inside Promise Queue"))
    process.nextTick(() => console.log("Inner fs Inside NextTick Queue"))
    setImmediate(() => { console.log("Inner fs Inside Immediate") })

})
setTimeout(() => {
    console.log("Inside Time Out");
    process.nextTick(() => console.log("Inner setTimeoutInside NextTick Queue"))
})
Promise.resolve().then(() => console.log("Inside Promise Queue"))
process.nextTick(() => console.log("Inside NextTick Queue"))
setImmediate(() => { console.log("Inside Immediate") })

/**
 * Op
    Inside NextTick Queue
    Inside Promise Queue
    Inside Time Out
    Inner setTimeoutInside NextTick Queue
    Inside Immediate
    Data :  Event Loop
    Inner fs Inside NextTick Queue
    Inner fs Inside Promise Queue
    Inner fs Inside Immediate
 */

// exp: 4 
setImmediate(() => console.log("Set Immediate 1"));
setImmediate(() => {
    console.log("Set Immediate 2");
    Promise.resolve().then(() => console.log("Inside Promise Queue"))
    process.nextTick(() => console.log("Inside NextTick Queue"))
});
setImmediate(() => console.log("Set Immediate 3"));

/**
 * Op
    Set Immediate 1
    Set Immediate 2
    Inside NextTick Queue
    Inside Promise Queue
    Set Immediate 3
 */

// exp: 5
/**
 * Order of setTimeout with nodelay and setImmediate is not guaranteed
 */
setTimeout(() => console.log("Time out"), 0);
setImmediate(() => console.log("Immediate"));

/**
 * Op
    Time out
    Immediate
 */
// or
/**
 * Op
    Immediate
    Time out
 */

const rd = fs.createReadStream(__filename);
rd.close();
rd.on('close', () => {
    console.log("Inside close");
});

setImmediate(() => console.log("Immediate"));
setTimeout(() => console.log("Time out"), 0);
Promise.resolve().then(() => console.log("Inside Promise Queue"));
process.nextTick(() => console.log("Inside NextTick Queue"));
/**
 * Op
    Inside NextTick Queue
    Inside Promise Queue
    Time out
    Immediate
    Inside close
 */