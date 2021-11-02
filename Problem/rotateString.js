/**
 * Documenter : Jithendiran
 * Date       : 27-10-2021
 */

/**
 * 
 * @param {string} str word to be rotate
 * @param {number} rotateNumber how many word want to rotate
 * @param {string} rotateDir direction of rotation
 * @returns the rotated word
 */
const rotate = (str, rotateNumber, rotateDir) => {

    if ((str.length < 0) && (typeof rotateNumber == "number") && (rotateDir == 'L' || rotateDir == 'R')) {
        throw "Give a proper data "
    }
    else {

        if (rotateDir == 'L') {

            return (str.slice(rotateNumber) + str.slice(0, rotateNumber));
        }
        else if (rotateDir == 'R') {

            return (str.slice(- rotateNumber) + str.slice(0, -3));
        }
    }
}

console.log(rotate("documentation", 3, 'L')) //umentationdoc
console.log(rotate("documentation", 3, 'R')); //iondocumentat