/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Prototype Pattern
 * 
 * The object is light weight which means all the property is attached to it's prototype
 * all the property in shared space
 */

const personProto = function () {

};
personProto.prototype.name = 'no name'
personProto.prototype.age = 0
personProto.prototype.toString = function () {
    return `Name : ${this.name} Age : ${this.age}`
}

const p1 = new personProto()
p1.name = "ji"
p1.age = 21

console.log(p1.toString()); //Name : ji Age : 21
console.log('age' in p1);//true
console.log(p1.hasOwnProperty('age'));//true

const p2 = new personProto()
p2.name = "aa"

console.log(p2.toString());//Name : aa Age : 0
console.log('age' in p2);//true
console.log(p2.hasOwnProperty('age'));//false

console.log(p1.toString === p2.toString);//true
