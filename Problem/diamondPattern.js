/**
 * Documenter : Jithendiran
 * Date       : 22-10-2021
 */

/**
 * Prints the diamond pattern
 * @param {number} n numeric value
 */

const diamondPattern = (n) => {
    n = n - 1
    //upper Triangle
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n * 2; j++) {

            if (n - i <= j && n + i >= j) {
                process.stdout.write('*');
            }
            else {
                process.stdout.write(" ");
            }
        }
        console.log('');
    }
    //lower Triangel  
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n * 2; j >= 0; j--) {

            if (n - i <= j && n + i >= j) {
                process.stdout.write('*');
            }
            else {
                process.stdout.write(" ");
            }
        }
        console.log('');


    }
}
diamondPattern(20)
