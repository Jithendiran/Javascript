/**
 * Documenter : Jithendiran
 * Date       : 27-10-2021
 */
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns return which one is greatest
 */
const biggestAmong3 = (a, b, c) => (a > b ? (a > c ? "a is bigger" : "c is bigger") : b > a ? (b > c ? "b is bigger" : "c is bigger") : "c is bigger")

console.log(biggestAmong3(3, 2, 1));//a is bigger
console.log(biggestAmong3(2, 3, 1));//b is bigger
console.log(biggestAmong3(1, 2, 21));//c is bigger

module.exports = biggestAmong3