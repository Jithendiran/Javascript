/**
 * Documenter : Jithendiran
 * Date       : 27-10-2021
 */
/**
 * 
 * @param {number} n 
 * @returns sum of the digits
 */
const sumOfDigit = (n) => n.toString().split('').reduce((a,b) => parseInt(a,10)+parseInt(b,10))

console.log(sumOfDigit(34))//7
console.log(sumOfDigit(123));//6
console.log(sumOfDigit(54321));//15
console.log(sumOfDigit("123"));//6