/**
 * @author: E.K.Jithendiran
 * Date: 01.05.2023
 *
 * This is the working example of event loop
 * 1st read @file read.txt then look @file eventloop.png
 */

// when running exp 1 comment all other exp
// exp 1
console.log("First");
// microTask queue
Promise.resolve().then(() => console.log("Inside Promise Queue"))
process.nextTick(() => console.log("Inside NextTick Queue"))
console.log("Second");

/**
 * Op
    First
    Second
    Inside NextTick Queue
    Inside Promise Queue
 */

// exp 2
// nextTick and Promise can't execute in between bcz both are part of microtask queue  
process.nextTick(() => console.log("Inside NextTick Queue 1... 1"));
process.nextTick(() => {
    console.log("Inside NextTick Queue 2...2");
    process.nextTick(() => console.log("Inside inner of nexttick queue 2...4"))
    Promise.resolve().then(() => console.log("Inside inner of nexttick queue 2 promise...8"))
})
process.nextTick(() => console.log("Inside NextTick Queue 3...3"));

Promise.resolve().then(() => console.log("Inside Promise Queue 1...5"))
Promise.resolve().then(() => {
    console.log("Inside Promise Queue 2....6")
    process.nextTick(() => console.log("Inside inner of promise  queue 2 next tick...10"))
    Promise.resolve().then(() => console.log("Inside inner Promise Queue 2...9"))
})
Promise.resolve().then(() => console.log("Inside Promise Queue 3...7"))

/**
 * Op
        Inside NextTick Queue 1... 1
        Inside NextTick Queue 2...2
        Inside NextTick Queue 3...3
        Inside inner of nexttick queue 2...4
        Inside Promise Queue 1...5
        Inside Promise Queue 2....6
        Inside Promise Queue 3...7
        Inside inner of nexttick queue 2 promise...8
        Inside inner Promise Queue 2...9
        Inside inner of promise  queue 2 next tick...10
 */

// exp 3
// After every call back of timeout microTask queue will be checked
setTimeout(() => console.log("Time out 1"));
setTimeout(() => {
    console.log("Time out 2");
    process.nextTick(() => console.log("Next tick inside time out"));
    Promise.resolve().then(() => console.log("Promise inside time out"))
});
setTimeout(() => console.log("Time out 3"));

process.nextTick(() => console.log("Inside NextTick Queue 1... 1"));
process.nextTick(() => {
    console.log("Inside NextTick Queue 2...2");
    process.nextTick(() => console.log("Inside inner of nexttick queue 2...4"))
    Promise.resolve().then(() => console.log("Inside inner of nexttick queue 2 promise...8"))
})
process.nextTick(() => console.log("Inside NextTick Queue 3...3"));

Promise.resolve().then(() => console.log("Inside Promise Queue 1...5"))
Promise.resolve().then(() => {
    console.log("Inside Promise Queue 2....6")
    process.nextTick(() => console.log("Inside inner of promise  queue 2 next tick...10"))
    Promise.resolve().then(() => console.log("Inside inner Promise Queue 2...9"))
})
Promise.resolve().then(() => console.log("Inside Promise Queue 3...7"))

/**
 * Op
        Inside NextTick Queue 1... 1
        Inside NextTick Queue 2...2
        Inside NextTick Queue 3...3
        Inside inner of nexttick queue 2...4
        Inside Promise Queue 1...5
        Inside Promise Queue 2....6
        Inside Promise Queue 3...7
        Inside inner of nexttick queue 2 promise...8
        Inside inner Promise Queue 2...9
        Inside inner of promise  queue 2 next tick...10
        Time out 1
        Time out 2
        Next tick inside time out
        Promise inside time out
        Time out 3
 */

// exp 4
setTimeout(() => console.log("Delay 1"), 1000);
setTimeout(() => console.log("Delay 2"), 500);
setTimeout(() => console.log("Delay 3"), 200);

/**
 * Op
    Delay 3
    Delay 2
    Delay 1
 */