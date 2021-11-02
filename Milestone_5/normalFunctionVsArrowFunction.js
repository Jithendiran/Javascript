/* 
   Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/
// normal function and var if write any where in program means js automatically cut that and paste it to top of the file
//'this' for arrow function is actually bound to it's previous object  


a()//Inside Normal Function

console.log(x); // undefined because it just declear it

function a(params) {
    console.log('Inside Normal Function');
}



var x = 2 //declear is above and init is stay here

//f()//error

let f = ()=>{
    console.log('Inside Arrow Function');
}

f() //fine

//f1() //error
let f1 = function (params) {
    
    console.log("inside");
}

let f3 = ()=>{
    console.log(this);
}
f3()//{}  it not return global

console.log(this)//{}

function globe()
{
    console.log(this);
}

globe()
/*
o/p
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
*/

//cannot use new keyword with arrow function
let x1 = {
    aa : ()=>{
        return this
    }
}

console.log(x1.aa());//{}

//let x2 = new x1() error
