/**
 * Doumenter : Jithendiran
 * Date      : 22-10-2021
 */
// These are run asyn 
//callbacks

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

let myDisplayer = (some) => {
  console.log(some);
}

let myCalculator = (num1, num2, myCallback) => {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//promise

//A JavaScript Promise object contains both the producing code and calls to the consuming code:



let myPromise = new Promise(function (myResolve, myReject) {
  let x = 1;

  // The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");// when successful
  } else {
    myReject("Error");// when error
  }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) { myDisplayer(value); },//code if successful
  function (error) { myDisplayer(error); }//code if some error
);
//or

myPromise.then(function (value) {
  myDisplayer(value)
}).catch((value) => {
  myDisplayer(value)
})

//eg 2
const samplePromise1 = new Promise((resolve, reject) => {
  let x = 1;
  //x = 1 return Promise 1 Rejected  sample promise 2 will not work
  if (x == 0) {
    resolve("Promise 1 Finished")
  }
  else {
    reject("Promise 1 Rejected")
  }
})

const samplePromise2 = new Promise((resolve, reject) => {
  let x = 0
  //x = 1 return Promise 2 Rejected
  if (x == 0) {
    resolve("Promise 2 Finished")
  }
  else {
    reject("Promise 2 Rejected")
  }
})

samplePromise1.then((value) => {
  console.log(value)    //Promise 1 Finished
  return samplePromise2
}).then((value) => {
  console.log(value)    //Promise 2 Finished
}).catch((error) => { //single catch for both promise
  console.log(error)
})

//async
//async makes a function return a Promise.
//await makes a function wait for a Promise

//The keyword async before a function makes the function return a promise:

//Example
async function myFunction() {
  return "Hello";
}
//Is the same as:

async function myFunction() {
  return Promise.resolve("Hello");
}



//The keyword await before a function makes the function wait for a promise:

//no need of multiple then
let asyncExample = async function () {
  try {
    const resul1 = await samplePromise1
    console.log(resul1);
    const resul2 = await samplePromise2
    console.log(resul2)
  }
  catch (err) {
    console.log(`Error At async : ${err}`)
  }

}

asyncExample()