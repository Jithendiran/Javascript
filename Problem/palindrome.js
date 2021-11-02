/**
 * Documenter : Jithendiran
 * Date       : 27-10-2021
 */

/**
 * 
 * @param {string} str word 
 * @returns is palindrome or not
 */

const isPalindrome = (str) => str.toLowerCase() == str.toLowerCase().split('').reverse().join('')


/**
 * 
 * @param {string} str sentence
 * @returns which words are palindrome in that sentence
 */

const isAnyPalindrome = (str) => {
    let r = []
    for (let i of str.split(' ')) {

        if (isPalindrome(i)) {
            r.push(i)
        }
    }

    return r

}

const str = "Liril speaks Malayalam"

console.log(isAnyPalindrome(str)); //[ 'Liril', 'Malayalam' ]

module.exports = isAnyPalindrome