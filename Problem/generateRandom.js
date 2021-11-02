/**
 * Documenter : Jithendiran
 * Date       : 22-10-2021
 */

const generateRandom = (min = 1, max = 10) => {
   if (!(typeof min == "number" && typeof max == "number")) {
      throw "Must numeric"
   }
   else if (min > max) {
      throw "Min value is greater"
   }
   else {
      console.log(`min : ${min} : max : ${max}`)
      return ((new Date().getMilliseconds() % max) + min)
   }


}

console.log(generateRandom())