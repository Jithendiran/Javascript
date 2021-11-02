/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Prototype Chain
 * 
 * for more information run the following code in browser
 */

/**
 * The __proto__ is an object within every object that points out (references) the prototype that has been set for that object. 
 * __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
 * 
 * The prototype property is only present for functions and is a property that’s set only if you’re using the ‘new’ keyword when creating objects with this (constructor) function. 
 */



const house = {
    color: "brown",
    size: "huge",
    expensive: true
}

console.log(house.prototype) // undefined
console.log(house.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSet... (__pro

// Note: 'house' is an object that has a __proto__ object, but does not have a prototype

const add = function (a, b) {
    return a + b
}

console.log(add.prototype) // {constructor: ƒ}
console.log(add.__proto__) // ƒ () { [native code] }

// Note: 'add' is a function that has a __proto__ and a prototype property.

const cat = {
    breed: "Russian Blue"
} // cat.__proto__ lists all its methods and cat.prototype returns undefined as expected
const dog = {
    age: 7
} // same for the dog variable
// Now, let's see how we can get the cat object to access the properties of the dog object

Object.setPrototypeOf(cat, dog) // allows the cat object to access the properties of the dog object

// Even though we've used 'setPrototypeOf', the cat object still doesn't have a prototype property. It only has a reference to the dog object via __proto__:

console.log(cat.hasOwnProperty('prototype')) // returns false

console.log(cat.age) // returns 7

// Method 1: We'll define a constructor functoin and create an object using the new keyword. Then, we'll create another object and see how we can access its peoperties using the first object
const person = function (name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new person("Mark", 25) // defined an object called person1 using the Person constructor function above
let person2 = { nationality: "Australian" } // defines a simple object literal with a nationality key
// Now to let person1 access person2's nationality, we can use the same setPrototypeOf method:
Object.setPrototypeOf(person1, person2) // same as the cat and dog example above
console.log(person1.nationality) // returns 'Australian' as expected

// Method 2: If we do the same thing but instead, we set the prototype of the constructor function to person2's prototype, we can now only access it via the constructor object:
person1 = new person("Mark", 25)
person2 = { nationality: "Australian" }
Object.setPrototypeOf(person, person2) // we've replaced person1 with Person

console.log(person1.nationality) // returns 'undefined', because person1 can access person2's properties only via the constructor object, as follows:
console.log(person1.constructor.nationality) // returns "Australian"


//newly created object has
//null <- Object <- ourobj


Object.prototype.name1 = "jidesh"

const aa = { b: 1 }

const bb = { c: 2 }

Object.setPrototypeOf(aa, bb)

console.log(aa.b); //1  // b is a's prperty
console.log(aa.c); //2   //1st check in aa .it is not found then it look's bb's property,it is found
console.log(aa.name1);//jidesh  //1st check in aa .it is not found then it look's bb's property ,it not found ,then it look Object's prototype it is found
//Object.prototype has (hasOwnprperty,toString,..etc) additionly it has name set by our self

//name can be access by any function or object

//tree is
//null <-Object <- bb <- aa
//null <-Object <- function native <- funcion code

const ac = "lkh"
console.log(ac.name1);//jidesh



//Reference
//https://medium.com/@venkatiyengar/proto-vs-prototype-d3c9df933f58


