/**
 * Documenter : Jithendiran
 * Date       : 23-10-21
 */

/**
 * 
 * @param {array} a it has the array of interger numbers
 * @returns 
 */

const vShapedSequence = (a) => {
    let r = []
    loop1:
    for (let i = 0; i < a.length - 1; i++) {
        let s = []
        s.push(a[i])
        for (let j = i + 1; j < i + 3; j++) {

            if (j >= a.length) {

                break loop1
            }
            if (s.length == 1) {

                if (s[0] != a[j]) {
                    s.push(a[j])
                }
                else {
                    s = []
                    continue loop1
                }
            }
            else if (s.length == 2) {
                if (s[0] == a[j]) {
                    s.push(a[j])
                }
                else {
                    s = []
                    continue loop1
                }
            }

        }
        r.push(s)
    }

    process.stdout.write(`${r.length} V-Shaped (from left to right): `)
    return r
}
console.log(vShapedSequence([1, 7, 1, 7, 1, 7, 1]))//[ [ 1, 7, 1 ], [ 7, 1, 7 ], [ 1, 7, 1 ], [ 7, 1, 7 ], [ 1, 7, 1 ] ]
console.log(vShapedSequence([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]))//[3, 7, 3], [1, 5, 1], [2, -2, 2]
