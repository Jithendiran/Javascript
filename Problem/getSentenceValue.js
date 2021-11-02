/* 
* Documentor Name : E.K.Jithendiran
* Date            : 21-10-2021

* Problem Solving

* Each letter in a sentence is worth its position in the alphabet (i.e. a = 1, b = 2, c = 3, etc...). However, if a word is all in UPPERCASE, the value of that word is doubled.

* Create a function which returns the value of a sentence.



* getSentenceValue("abc ABC Abc") ➞ 24
* a = 1, b = 2, c = 3

* abc = 1 + 2 + 3 = 6
* ABC = (1+2+3) * 2 = 12 (ALL letters are in uppercase)
* Abc = 1 + 2 + 3 = 6 (NOT ALL letters are in uppercase)

* 6 + 12 + 6 = 24



* Example:-
* getSentenceValue("HELLO world") ➞ 176

* getSentenceValue("Edabit is LEGENDARY") ➞ 251

* getSentenceValue("Her seaside sea-shelling business is really booming!") ➞ 488



**Notes :-**
Ignore spaces and punctuation.
Remember that the value of a word isn't doubled unless all the letters in it are uppercase.
*/

/**
 * Returns true if all the letter are uppercase else false 
 *
 * @param {string} str The string 
 * 
 * @return {boolean}  
 */

let isUpper = (str) => {
    if (!/[a-z]/.test(str)) {
        // if no small
        if (!/[0-9]/.test(str)) {
            //if no number
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}

/**
 * Returns the value of alphabet a || A = 1,b || B =2 ,.....z || Z = 26
 *
 * @param {string} a The letter
 * 
 * @return {number}  numeric value of that value
 */

let getAlphaToNum = (a) => {
    let b = a.toLowerCase().charCodeAt(0)

    if (b >= 97 && b <= 122) {

        return (b - 97 + 1)
    }
    else{
        
        return 0
    }
}

/**
 * Returns the sum of value of single word
 *
 * @param {string} a The word
 * 
 * @return {number} s the sum of value of single word
 */

let countAlpha = (a)=>{
    let s = 0
    for (let i of a.split("")) {

         s = s + getAlphaToNum(i) 
        
    }

    return s;

}
/**
 * Returns the sum of value of sentence
 *
 * @param {string} a The word
 * 
 * @return {number} s the sum of value of sentence
 */
let getSentenceValue = (a) => {

    let s = 0
    for (let iterator of a.split(" ")) {
        if (isUpper(iterator)) {
            s = s + (2 * countAlpha(iterator))
        }
        else{
            s = s + countAlpha(iterator)
        }
    }
    return s

}

console.log(getSentenceValue("abc ABC Abc")); //24

console.log(getSentenceValue("HELLO world"));//176

console.log(getSentenceValue("Edabit is LEGENDARY"));//251
console.log(getSentenceValue("Her seaside sea-shelling business is really booming!"));//488

module.exports = getSentenceValue