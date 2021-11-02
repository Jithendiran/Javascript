//Boolean
/* Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/
if ( true || false )
{
    console.log("Inside True") //Control comes here
}
else
{
    console.log("Inside False")
}

if ( true && false)
{
    console.log("Inside True")
}
else
{
    console.log("Inside False")//Control comes here

}

function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( A() && B() ); // called A false
// logs "called A" due to the function call,
// then logs false (which is the resulting value of the operator)

function c(){ console.log('called A'); return true; }
function d(){ console.log('called B'); return true; }

console.log( c() && d() ); //called A called B true

let a1 = true  && true       // t && t returns true
let a2 = true  && false      // t && f returns false
let a3 = false && true       // f && t returns false
let a4 = false && (3 == 4)   // f && f returns false
let a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
let a6 = false && 'Cat'      // f && t returns false
let a7 = 'Cat' && false      // t && f returns false
let a8 = ''    && false      // f && f returns ""
let a9 = false && ''         // f && f returns false

console.log(a1,a2,a3,a4,a5,a6,a7,a8,a9)
