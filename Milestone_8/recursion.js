/**
 * Documenter : Jithendiran
 * Date       : 26-10-21
 * 
 * recursion
 * the function calling itself
 */
/**
 * Finding factorial of a number
 * @param {number} n 
 * @returns factorial value
 */
const factorial = (n) => {
    if (n == 1) {
        return 1
    }
    else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5));//120

