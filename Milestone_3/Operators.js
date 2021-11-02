//Operators
/* Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/
//Arithmetic Operators
/*
Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation (ES2016)
/	        Division
%	        Modulus (Division Remainder)
++	        Increment
--	        Decrement
*/
console.log(3**2)//9
/*
Assignment operators assign values to JavaScript variables.

Operator	    Example	        Same As
=	            x = y	        x = y
+=	            x += y	        x = x + y
-=	            x -= y	        x = x - y
*=	            x *= y	        x = x * y
/=	            x /= y	        x = x / y
%=	            x %= y	        x = x % y
**=	            x **= y	        x = x ** y
*/
let x = 2;
console.log(x+=2)
/*
JavaScript Comparison Operators
Operator	    Description
==	            equal to
===	            equal value and equal type
!=	            not equal
!==	            not equal value or not equal type
>	            greater than
<	            less than
>=	            greater than or equal to
<=	            less than or equal to
?	            ternary operator
*/
console.log('5' == 5) //true
console.log('5' === 5)//false
console.log('5' != 5) //false
console.log('5' !== 5) //true
console.log('5' > 2)//true
console.log('A' > 2)//false
console.log('a' > 2) //false
console.log('a' > '2') //true

/*
JavaScript  Logical Operators
Operator	Description
&&	    logical and
||	    logical or
!	    logical not
*/

// JavaScript Type Operators
/*
Operator	      Description
typeof	      Returns the type of a variable
instanceof	   Returns true if an object is an instance of an object type
*/
console.log("a" instanceof Object)
function Car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
 }
 const auto = new Car('Honda', 'Accord', 1998);
 
 console.log(auto instanceof Car);//  true
 
 console.log(auto instanceof Object);// true
 
 console.log(null) //null
 console.log(!null)//true
 console.log(!!null)//false

 console.log(undefined) //undefined
 console.log(!undefined)//true
 console.log(!!undefined)//false


console.log(null,0 == null);            // false
console.log(0 == undefined);       // false
console.log(0 == !!null);          // true, look at Logical NOT operator
console.log(0 == !!undefined);     // true, look at Logical NOT operator
console.log(null == undefined);   //true

//conditional or terinary
var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';
console.log(canDrive)

