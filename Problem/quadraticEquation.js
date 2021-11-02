/**
 * Documenter : Jithendiran
 * Date       : 22-10-2021
 */

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns 
 */

const quadraticEquation = (a, b, c) => {
    // program to solve quadratic equation
    let root1, root2;

    // calculate discriminant
    let discriminant = b * b - 4 * a * c;

    // condition for real and different roots
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return {
            'root1': root1,
            'root2': root2,
            'value': 'roots are real and different'
        }
    }

    // condition for real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);

        return {
            'root1': root1,
            'root2': root2,
            'value': 'roots are real and equal'

        }
    }

    // if roots are not real
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        // result
        root1 = `${realPart} + ${imagPart}i`
        root2 = `${realPart} - ${imagPart}i`

        return {
            'real': realPart,
            'img': imagPart,
            'value': `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
        }
    }
}

console.log(quadraticEquation(1, -3, 10));
/*
op
{
  real: '1.50',
  img: '2.78',
  value: 'The roots of quadratic equation are 1.50 + 2.78i and 1.50 - 2.78i'
}
*/
console.log(quadraticEquation(1, 6, 5)); //{ root1: -1, root2: -5, value: 'roots are real and different' }
