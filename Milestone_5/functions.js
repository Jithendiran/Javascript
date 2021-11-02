/* 
   Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/
//It achieves code reusability
//normal function
//The function declaration ( function statement)

//function without parameter
function f1() //function definition
{

    console.log('f1');

}

f1();//function calling

//funcyion with parameter
function f2(a) {
    console.log("The paraneter passed : " + a)
}
f2(1)

//function with Rest Parameters
function f3(...args) {
    if (args.length <= 0) {
        console.log("No parameter");
    }
    else
        for (let i in args) {
            console.log(args[i], "Type of :", typeof i);
        }
}
f3() // No parameter 
f3(1) //1 Type of : string
f3(1, 2) //1 Type of : string , 2 Type of : string
f3("as", "ad", 1)//as Type of : string ad Type of : string 1 Type of : string


// The annonyms function
var myFunction = function () {
    console.log('Inside annonyms function without parameter');

}
myFunction()//Inside annonyms function without parameter
var myFunction1 = function (a, b) {
    console.log(a + b);

}
myFunction1("Inside annonyms function", " with parameter") //Inside annonyms function with parameter
//arrow function
var myFunction3 = (...args) => {
    if (args.length <= 0) {
        console.log("No parameter");
    }
    else {
        var s = '';
        for (let i in args) {
            s += args[i]
        }
        console.log(s); //Inside annonyms function with parameter arrow function

    }
}
myFunction3("Inside annonyms function", " with parameter", " arrow function")


// The Function constructor.
function f4(a, b) {
    this.name = a
    this.type = b
}
var a = new f4('a', 1)
console.log(a, typeof a) //f4 { name: 'a', type: 1 } object


//immediate invoke function
//without parameter
// (()=>{
//     console.log("HI");
// })();
// (function (){
//     console.log('Hi');

// })();
// //with parameter
// ((a)=>{
//     console.log(a);
// })("hi");
// (function (a){
//     console.log(a);

// })('Hi');


// normal function is global scope
function a(){
    return this;
}

a().c = 1;
console.log(a())
/*
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
  },
  c: 1
}
*/

let v1 = a()
v1.c = 2;
console.log(a())
/*
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
  },
  c: 2
}
*/

let v2 = a()
v2.c = 3;
console.log(a())
/*
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
  },
  c: 3
}
*/

//new keyword create seprate memory

let a1 = new a()
a1.c = 4;
console.log(a1)//a { c: 4 }

let a2 = new a()
a2.c = 5;
console.log(a2);//a { c: 5 }

