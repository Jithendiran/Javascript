/**
 * Documenter   : Jithendiran
 * Date         : 29-10-2021
 * 
 * Objects
 */


//create object

// 1 Using the Object literal syntax
const school = {
    name: 'aa School',
    location: 'bb',
    established: 'yyyy',
    displayInfo: function () {
        console.log(`${school.name} was established in ${school.established} at ${school.location}`);
    }
}
school.displayInfo();//aa School was established in yyyy at bb

const school1 = {
    name: 'aa School',
    location: 'bb',
    established: 'yyyy',
    displayInfo: function () {
        console.log(`${this.name} was established in ${this.established} at ${this.location}`);
    }
}

school1.displayInfo()//aa School was established in yyyy at bb

//here the this and person are same



// 2 Object Constructor

const school2 = new Object();
school2.name = 'Vivekanada school';
school2.location = 'Delhi';
school2.established = 1971;

school2.displayInfo = function () {
    console.log(`${school2.name} was established in ${school2.established} at ${school2.location}`);
}

school.displayInfo();

// 3 Constructors

function Vehicle(name, maker) {
    this.name = name;
    this.maker = maker;
}

const car1 = new Vehicle('Fiesta', 'Ford');
const car2 = new Vehicle('Santa Fe', 'Hyundai')

console.log(car1.name); // Output: Fiesta
console.log(car2.name); // Output: Santa Fe

for (const key in car1) {
    console.log("a", key); //name maker
}

//for..of 

// 4 Prototypes
//syntax
//Object.create(proto)
//Object.create(proto, propertiesObject)
const a = { 'A': 'a' }
const obj = Object.create(a, { p: { 'value': 2, 'enumerable': true, 'configurable': false } })
// the second propertiesObject argument is optional


console.log(obj);//{ p: 2 }
console.log(obj.__proto__);//{ A: 'a' }
console.log(obj.hasOwnProperty(a));//false
delete obj.p //cause error if using 'use strict'
console.log(obj);// false because configurable is false

Object.defineProperty(obj, 'q', { value: 3, configurable: true, enumerable: true })
console.log(obj);//{ p: 2, q: 3 }

delete obj.q
console.log(obj);//{ p: 2 } deleted because configurable is true

//using class
class people {
    constructor() {
        this.name = "Adam";
        this.age = 21
    }
}

let person1 = new people();

// Output : Adam    
console.log(person1.name);

for (const key in person1) {
    console.log(key); //name age
}


//access object

//using . ,[].for..in,for..of

console.log(school.established);//yyyy

for (const key in school) { //it access key
    console.log(key);
}
/*
O/p
name
location
established
displayInfo
*/

// for (const iterator of school) { //error
//     console.log(iterator);
// }

const iterable = {
    [Symbol.iterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    return { value: this.i++, done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

for (const value of iterable) {
    console.log(value);
}
  // 0
  // 1
  // 2
