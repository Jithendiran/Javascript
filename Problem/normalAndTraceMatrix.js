/**
 * Documenter : Jithendiran
 * Date       : 27-10-2021
 */

/**
 * 
 * @param {number} array 2d number array 
 * @returns normal value of the matrix
 */

const normal = (array) => {

    return new Promise((resolve) => {
        let s = 0
        for (let i of array) {
            for (let j of i) {
                s = s + (j * j)
            }
        }
        resolve(Math.sqrt(s))
    })
}

/**
 * 
 * @param {number} array 2d number array
 * @returns trace value of the 2d array
 */

const trace = (array) => {

    return new Promise((resolve) => {

        let s = 0

        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (i == j) {
                    s += array[i][j]
                }

            }
        }

        resolve(s)
    }
    )
}



const fun = async function (array) {
    try {

        const res1 = await normal(array)
        console.log(`Normal : ${res1}`); //16.881943016134134
        const res2 = await trace(array)
        console.log(`Trace : ${res2}`); //Trace : 15
    }
    catch (err) {
        console.log(err);
    }
}

const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
fun(a)

