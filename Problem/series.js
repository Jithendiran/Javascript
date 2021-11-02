/**
 * Documenter : Jithendiran
 * Date       : 27-10-2021
 */


/**
 * 
 * @param {number} n 
 * @returns square of a number
 */
const square = (n) => n * n

/**
 * 
 * @param {number} n 
 * @returns series number
 */
const series = (n) => {
    let s = 0
    if (n > 1) {
        for (let i = 2; i <= n; i++) {

            if (i % 2 == 0) {
                s += square(i)
            }
            else {
                s -= square(i)
            }
        }

        return s + 1
    }
    else {
        return n
    }

}

   
console.log(series(5))//-13