/* 
* Documentor Name : E.K.Jithendiran
* Date            : 21-10-2021

* Problem Solving

* An array is positive dominant if it contains strictly more unique positive values than unique negative values.
* Write a function that returns true if an array is positive dominant.

* isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
* There is only 1 unique positive value (1).
* There are 2 unique negative values (-3, -4).

* isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

* isPositiveDominant([5, 0]) ➞ true

* isPositiveDominant([0, -4, -1]) ➞ false
*/

/**
 * If positive unique value is more return true else false
 * @param {array} a 
 * @returns true or false
 */
const isPositiveDominant = (a) => {
    let p = 0, n = 0;
    /*
  uniqueValue = {
      property:count
  }
  property -> unique values (number)
  count    -> count of the particular value(number)
  */
    let uniqueValue = {

    };

    for (let i = 0; i < a.length; i++) {
        if (uniqueValue.hasOwnProperty(a[i])) {
            //if object has the property alredy
            //increment the count of propety
            uniqueValue[a[i]] += 1
        }
        else {
            //not have the property
            //initlize the propert with value 0
            uniqueValue[a[i]] = 1
        }
    }
    //console.log(uniqueValue);
    for (const key in uniqueValue) {
        if (key >= 0) {
            p++;
        }
        else {
            n++;
        }
    }
    return p >= n ? true : false;

}

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])) // false
console.log(isPositiveDominant([5, 99, 832, -3, -4]))//true
console.log(isPositiveDominant([5, 0])) // true
console.log(isPositiveDominant([0, -4, -1])) //false

module.exports = isPositiveDominant