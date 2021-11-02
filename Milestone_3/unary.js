//Uniary Operator
/* Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/
let a = 10;
a = +a; // 10
a = -a; // -10

//In case you apply the unary plus or minus on a non-numeric value, it performs the same conversion as the Number() function.
let s = '10';
console.log(+s); // 10

let f = false, t = true;
console.log(+f); // 0
console.log(+t); // 1

//increment
let a1 = 5
a1++; //post Increment
console.log(a1)//6
++a1;//pre Increment
console.log(a1)//7

//decrement
let b = 5
b--; //post Decrement
console.log(b)//4
--b;//pre Decrement
console.log(b)//3


