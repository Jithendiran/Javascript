/**
 * Documentor : Jithendiran
 * Date       : 26-10-2021
 * 
 * class
 */

/**
 * Classes are a template for creating objects. They encapsulate data with code to work on that data.
 * Classes in JS are built on prototypes but also have some syntax and semantics 
 * 
 * Classes are in fact "special functions", and just as you can define function expressions and function declarations,
 * the class syntax has two components: class expressions and class declarations.
 */


//  const p = new Rectangle(); // ReferenceError

//  class Rectangle {}


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get calcArea() {
        return this.getArea()
    }
    getArea() {
        return this.height * this.width
    }
}

const p = new Rectangle(2, 3);
console.log(p.getArea(), p.getArea); //6 [Function: getArea]
console.log(p.calcArea);//6

//console.log(Rectangle());//TypeError: Class constructor Rectangle cannot be invoked without 'new'

class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }
    // Method
    *getSides() {
        for (const side of this.sides) {
            yield side;
        }
    }

    addTwo() {
        return this.sides[0] + this.sides[1]
    }

    getClass() {
        return this
    }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);

console.log(pentagon.getClass());//Polygon { sides: [ 1, 2, 3, 4, 5 ] }

console.log([...pentagon.getSides()]); // [1,2,3,4,5]
console.log(pentagon.name);//undefined

// unnamed
let Rectangle1 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle1.name);
// output: "Rectangle"

// named
let Rectangle0 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle0.name);
  // output: "Rectangle2"






