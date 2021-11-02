/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Parasitic Inheritance
 * It's about a function that creates objects by taking all the functionality from another object into a new one,
 * augmenting the new object, and returning it, pretending that it has done all the work.
 * 
 */


const object = function (obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}
//eg 1

const twoD = {
    name: '2D shape',
    dimensions: 2
};
const triangle = function (s, h) {
    var that = object(twoD);
    that.name = 'Triangle';
    that.getArea = function () {
        return this.side * this.height / 2;
    };
    that.side = s;
    that.height = h;
    return that;
}

const t = triangle(5, 10);
console.log(t.dimensions);//2
const t2 = new triangle(5, 5);
console.log(t2.getArea());//12.5


//eg 2
const Person = function (name) {
    this.name = name;
}
Person.prototype.job = 'frontend';
Person.prototype.sayHello = function () {
    console.log('Hello ' + this.name);
}
const person = new Person('jia ming');
person.sayHello();//Hello jia ming


const sup = new Person();

const subobject = function (obj) {
    const sub = object(obj);
    sub.name = 'ming';
    return sub;
}
const sup2 = subobject(sup);

console.log(sup2.name);//ming
console.log(sup2 instanceof Person);//true