/**
 * Documenter : Jithendiran
 * Date       : 02-11-2021
 * Async Awit
 */

//define
/*
An async function is a function declared with the async keyword, and the await keyword is permitted within them.
The async and await keywords enable asynchronous,
promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
*/
//The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code;
//however it can be used on its own with JavaScript modules.
const resolveAfter2Seconds = function (x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
};
//awit reduce multiple then statement
//method 1
let add = async function (x) { // async function expression assigned to a variable
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);

    return x + a + b;
};

add(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
});

//calling only add() is not asynchrous 
//call with then() because that return a promise

//method 2
(async function (x) { // async function expression used as an IIFE
    try {// try catch can handle reject .if reject is came it will goes to catch
        const p_a = resolveAfter2Seconds(20);
        const p_b = resolveAfter2Seconds(30);

        return x + await p_a + await p_b;

    } catch (error) {
        console.log("It run when promise rejected");
    }

})(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
});

let f4 = async function () {
    try {
        const z = await Promise.reject(30);
    } catch (e) {
        console.error(e); // 30
    }
}

f4().then(() => {//because it alredy catch in try block
    console.log("Even though error it is inide resolve");//Even though error it is inide resolve
}).catch(() => {//it not executed.because there is a try block
    console.log("Inside error");
});

f4 = async function () {

    const z = await Promise.reject(30);

}
f4().then(() => {//Not entered then because there is no try/catch
    console.log("Not enter");
}).catch(() => {//Now it is executed because no try block there
    console.log("Inside error");
});
