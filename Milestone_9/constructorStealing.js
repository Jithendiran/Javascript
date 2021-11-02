/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Constructor Stealing
 * 
 * To solve the inheritance problem with reference values on prototypes, We use constructor stealing
 */

/**
 * Constructor Stealing is to call the Shape constructor from within the Rectangle constructor.
 * The apply() and call() methods can be used to execute a constructor on the newly created object.
 */

let shape = function () {
    this.colors = ["red", "blue", "green"];
}

let rectangle = function () {
    //inherit from Shape
    shape.call(this);
}

let instance1 = new rectangle();
instance1.colors.push("black");
console.log(instance1.colors);    //"red,blue,green,black"

let instance2 = new rectangle();
console.log(instance2.colors);    //"red,blue,green"

shape = function (name) {
    this.name = name;
}
rectangle = function (name) {
    //inherit from Shape passing in an argument
    shape.call(this, name);

    //instance isDrawable
    this.age = 21;
}
var instance = new rectangle("Jith");
console.log(instance.name);    //"Jith";
console.log(instance.age);     //21

