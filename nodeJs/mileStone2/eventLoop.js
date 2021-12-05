/**
 * Documenter : E.K.Jithendiran
 * Date       : 03-11-2021
 * 
 * Event Loop
 */
// 1st read the content in eventLoop.txt

//async are taken by thread pool it defaultly has 4 thread

console.log("1st");

setTimeout(() => console.log("2nd"), 0) // even the time out is 0 it not executed 2nd bcz it goes to the end of the stack

console.log("3rd");
setTimeout(_ => console.log("4th"), 0)// it execte after the 2nd

const a = (x) =>{
    return new Promise((res) => {
        return res(x)
    })
}

a("From promise").then((i) => {
    console.log(i);
})

const f = async () =>{
    console.log("Inside f");
    console.log(await a("From async"))
}
f()

console.log("5th");

console.log("6th");
/*
O/p
1st
3rd
Inside f
5th
6th
From promise
From async
2nd
4th
*/

//Reference
//https://nodejs.dev/learn/the-nodejs-event-loop
//https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/