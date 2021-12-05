/**
 * Documenter : Jithendiran
 * Date       : 02-11-2021
 * Promise
 */

//deifine
/*
A Promise is an object representing the eventual completion or failure of an asynchronous operation. 
Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
*/

/*
Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions,
one called if the audio file is successfully created, and the other called if an error occurs.
 */

// const successCallback = function (result) {
//     console.log("Audio file ready at URL: " + result);
// }

// const failureCallback = function (error) {
//     console.error("Error generating audio file: " + error);
// }

// //createAudioFileAsync(audioSettings, successCallback, failureCallback); in callbacks


// //If createAudioFileAsync() were rewritten to return a promise, you would attach your callbacks to it
// //createAudioFileAsync(audioSettings).then(successCallback, failureCallback); in terms of promise


// //chaining

// doSomething(function(result) {
//     doSomethingElse(result, function(newResult) {
//       doThirdThing(newResult, function(finalResult) {
//         console.log('Got the final result: ' + finalResult);
//       }, failureCallback);
//     }, failureCallback);
//   }, failureCallback);


// //chainning rewritten as

// doSomething()
// .then(result => doSomethingElse(result))
// .then(newResult => doThirdThing(newResult))
// .then(finalResult => {
//   console.log(`Got the final result: ${finalResult}`);
// })
// .catch(failureCallback);


new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
    .then(() => {
        throw new Error('Something failed');

        console.log('Do this');
    })
    .catch(() => {
        console.error('Do that');
    })
    .then(() => {
        console.log('Do this, no matter what happened before');
    });
/*
O/p
Initial
Do that
Do this, no matter what happened before

*/

/* Advantage
Promises solve the problem of call back hell 
if error accour it has code to handle
*/
/*Disadventage
using multiple then also cause callback hell
*/
const https = require('https')
const url = "https://reqres.in/api/users?page=2";
https.get(url, res => {
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    });
    res.on('end', () => {
        data = JSON.parse(data);
        console.log(data);
    })
}).on('error', err => {
    console.log(err.message);
})



//reference
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
//https://www.w3schools.com/js/js_promise.asp