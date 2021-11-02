/**
 * Documenter : Jithendiran
 * Date       : 25-10-21
 * 
 * primitive and reference
 */

//primitive
let a = 10
console.log(`A = ${a} type of A = ${typeof a} `);//A = 10 type of A = number 

let b = a
console.log(`B = ${b} type of B = ${typeof b} `);//B = 10 type of B = number 
a++;
b--;
console.log(`A = ${a} `);//A = 11 
console.log(`B = ${b} `);//B = 9 


//reference

const rgb = ['red', 'green', 'blue'];
const rgb1 = rgb


console.log(rgb);//[ 'red', 'green', 'blue' ]
console.log(rgb1)//[ 'red', 'green', 'blue' ]
rgb1[0] = 'RED'
console.log(rgb);//[ 'RED', 'green', 'blue' ]
console.log(rgb1)//[ 'RED', 'green', 'blue' ]

console.log(typeof rgb)//object

console.log(rgb instanceof Array); // true

const x = { name: 'John' };
console.log(x);//{ name: 'John' }

const y = x
console.log(y);//{ name: 'John' }

y.name = 'Jith'

console.log(x);//{ name: 'Jith' }

console.log(y);//{ name: 'Jith' }

const fun = function () { }

const fun1 = function () { }

console.log(`typeof fun ${typeof fun}`);//typeof fun function
const a1 = new fun()

console.log(`typeof a ${typeof a1}`);//typeof a object
const b1 = new fun1()
console.log(`typeof b ${typeof b1}`);//typeof b object

console.log(a1 instanceof fun);//true
console.log(a1 instanceof fun1);//false