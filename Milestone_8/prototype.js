/**
 * Documentor : Jithendiran
 * Date       : 26-10-21
 * 
 * Prototype
 */

/*
Javascript is a prototype based language not class based
using prototype we can inherit

*/
//Object.prototype has hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,...etc but these are not enumerable so it is not visible in log

//Object.prototype.__proto__ => null that means prototype chain is over

//if object is created js will append Object.prototype to the new object it is in the last level
const obj1 = {
    name: "jithendiran",
    address: "Tirupur",
    getName: function () {
        console.log(this.name, this.address);
    }
}

const obj2 = {
    name: 'jith'
}

console.log(obj1.__proto__);//[Object: null prototype] {}
console.log(Object.prototype);//[Object: null prototype] {}

obj2.__proto__ = obj1
console.log(obj2.__proto__);//{ name: 'jithendiran', address: 'Tirupur',getName: [Function: getName] }
console.log(obj2.name);//jith
console.log(obj2.address);//Tirupur
console.log(obj2.__proto__.__proto__);//[Object: null prototype] {}

obj1.getName() //jithendiran Tirupur
obj2.getName() //jith Tirupur // here this is point to obj2

const fun = function () {
    console.log("Indise fun")
}
console.log(fun.__proto__);//{}

Function.__proto__.getName = function () {
    console.log("Inside parent fun")
}

console.log(fun.__proto__);//{ getName: [Function (anonymous)] }
//it is prototype chaining.1st js check in its property if there it will access else it go to parent prototype ,
//if there it will access else it go to parent prototype that is Object.Prototype 
fun.__proto__.getName()//Inside parent fun

console.log(obj2.__proto__ == Object.prototype); //false
console.log(obj2.__proto__.__proto__ == Object.prototype);//true

//__proto__ is the actual object that is used in the lookup chain to resolve methods, etc. 
//prototype is the object that is used to build __proto__ when you create an object with new

console.log(Object.__proto__.__proto__);//[Object: null prototype] {}