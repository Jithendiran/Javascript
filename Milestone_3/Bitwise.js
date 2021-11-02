//Bitwise
/* Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/

//And (&)
let a = 5 //    00....0101 
let b = 1 //    00....0001
console.log(a&b) //000..0001 => 1

//Or (|)
console.log(a|b) //00...0101 => 5

//Not (~)
console.log("NOt",~a) // 11...1010 => -6

//Bitwise Left Shift (<<)
//This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off

console.log(a << b) //00000000000000000000000000000101
                    //00000000000000000000000000001010 (10) o/p

console.log(-a << b) //-10 

//Bitwise Right Shift (>>)
//This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off
console.log( a >> b) //00000000000000000000000000000101
                     //00000000000000000000000000000010(2)o/p
console.log(-a>>b)  //11111111111111111111111111111011
                    //11111111111111111111111111111101 (-3)o/p

//(Zero Fill) Right Shift (>>>)
//This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off
console.log(a >>> b)//00000000000000000000000000000101
                    //00000000000000000000000000000010 (2)o/p

console.log(-a >>> b)//11111111111111111111111111111011
                    //01111111111111111111111111111101(2147483645)o/p

//XOR (^)
console.log(a ^ b) //00000000000000000000000000000101
                   //00000000000000000000000000000001
                   //00000000000000000000000000000100 (4)

                   



