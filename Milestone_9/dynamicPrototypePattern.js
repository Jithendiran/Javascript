/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Dynamic Prototype Pattern
 * 
 * The object is light weight which means all the property is attached to it's prototype
 * 
 * also konwn as Combination Constructor and Prototype Pattern
 */

const personProto = function (name, age) {

    //the property is created when new object created
    this.name = name
    this.age = age

    //the property created only once for 1st object then it is shared
    if (typeof this.toPrint !== 'function') {
        console.log("inside");
        personProto.prototype.toPrint = function () {
            return `Name : ${this.name} Age : ${this.age}`
        }
    }
};



const p1 = new personProto("ji", 21) //O/p inside


console.log(p1.toPrint()); //Name : ji Age : 21


const p2 = new personProto("jith", 21)

console.log(p2.toPrint());//Name : jith Age : 21

console.log(p1.toPrint === p2.toPrint);//true

console.log(personProto.__proto__);//{}

console.log(personProto.prototype);//{ toPrint: [Function (anonymous)] }