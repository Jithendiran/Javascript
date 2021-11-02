/**
 * Documentor : Jithendiran
 * Date       : 26-10-2021
 * 
 * static
 * static is common variable for all the instance of a class.
 * it is access by class name
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(p1.displayName); // undefined
//console.log(p1.distance());    // error
console.log(p1.distance); //undefined
console.log(p2.displayName); // undefined
console.log(p2.distance);    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
