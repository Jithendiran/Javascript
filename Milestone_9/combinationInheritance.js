/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Combination Inheritance
 * 
 * Combination inheritance combines prototype chaining and constructor stealing to get the best of each approach.
 * 
 * We use prototype chaining to inherit properties and methods on the prototype and to use constructor stealing to inherit instance properties.
 */

//null <- Object <- sayName <- superType
const superType = function (name) {
    this.name = name;/*  ww  w  . de m  o 2  s .c  o m*/
    this.colors = ["red", "blue", "green"];
}

superType.prototype.sayName = function () {
    console.log(this.name);
};

const subType = function (name, age) {
    // inherit properties
    superType.call(this, name);

    this.age = age;
}

// inherit methods
///null <- Object <-superType{name,color},sayAge <-subType
subType.prototype = new superType();

subType.prototype.sayAge = function () {
    console.log(this.age);
};

const instance1 = new subType("CSS", 19);
instance1.colors.push("black");
console.log(instance1.colors);  // "red,blue,green,black"
instance1.sayName();            // "CSS";
instance1.sayAge();             // 19

const instance2 = new subType("HTML", 27);
console.log(instance2.colors);  // "red,blue,green"
instance2.sayName();            // "HTML";
instance2.sayAge();             // 27
