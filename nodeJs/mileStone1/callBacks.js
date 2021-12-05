/**
 * Documenter : Jithendiran
 * Date       : 02-11-2021
 * CallBack
 */

//Define
/*
A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.

Callbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks.
 A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects.
This structure is used in many modern web APIs, such as fetch()

asynchronous is refers to execution is not in order.

In javascript if a statement want to fetch data it takes some time.The synchronous code wait until the data fetched,then execute other statement.
in asynchronous the code can't wait until it fetched , it do other tasks
*/

/**
 * 
 * Advantage
 * asynchronous execution
 */
/**
 * 
 * Disadvantage
 * When you have several callbacks that depend on each other, you can have a situation that is called Callback Hell.
 */
const greeting = function (name) {

    console.log('Hello ' + name + " from call back");

}



const processUserInput = function (name, callback) {

    //do any thing

    //after work finish call callback
    callback(name);//Hello jidesh from call back

}

processUserInput("jidesh", greeting);


//built in callback
setTimeout(greeting, 2000, "jith")
console.log("Doing other work 1 ");
setTimeout(() => console.log("other work 2 "), 1000)
setTimeout(() => console.log("other work 3 "), 2000)

/*
O/p
Hello jidesh from call back
Doing other work 1 
other work 2 
Hello jith from call back
other work 3 
*/



//callback hell
setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("Hey");
        setTimeout(() => {
            console.log("Namaste");
            setTimeout(() => {
                console.log("Hi");
                setTimeout(() => {
                    console.log("Jidesh");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);