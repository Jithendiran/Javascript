//Operators
/* Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/

//The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand
let x = 1;

x = (x++, x);

console.log(x);// 2

x = (2, 3);

console.log(x);//3



function x1() {
    
    return '1';
}
function y1() {
    
    return '2';
}
function z1() {
    
    return '3';
}

var y = (x1(), y1(), z1());

console.log(y)

