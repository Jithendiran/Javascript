/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Prototype
 * 
 * for more information run the following code in browser
 */



const person = function (first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

// greeting is attached to person 
// greet function is not inside person 
//it is like inheritance 
person.prototype.greeting = function () {
    console.log('Hi! I\'m ' + this.name.first + '.');
};

const p1 = new person("jidesh", "jith", 21, "Male", "fun")

p1.greeting()//Hi! I'm jidesh.

console.log(Object.__proto__);//{} it has toString,hasOwnProperty,...(it is not visible because enumerable is set to false)
console.log(Object.__proto__.__proto__);//[Object: null prototype] {} it means this prototype chain is over

console.log(person.__proto__);//{} it has greeting to see that
console.log(person.prototype);//{ greeting: [Function (anonymous)] }

/**
 It’s a common mistake of novice developers not to know the difference between these two.

Please note that __proto__ is not the same as the internal [[Prototype]] property. 
It’s a getter/setter for [[Prototype]]. Later we’ll see situations where it matters, for now let’s just keep it in mind, as we build our understanding of JavaScript language.

The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype.
 We’ll also cover these functions later.

By the specification, __proto__ must only be supported by browsers. 
In fact though, all environments including server-side support __proto__, so we’re quite safe using it.

As the __proto__ notation is a bit more intuitively obvious, we use it in the examples.
 */

