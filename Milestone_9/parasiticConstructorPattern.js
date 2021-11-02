/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Parasitic Constructor Pattern
 * 
 * In a parasitic constructor pattern, you create a constructor function that creates an object and returns that object.
 */


const person = function (name) {
    const o = new Object();
    o.name = name;
    o.identify = function () {
        console.log("I'm " + o.name);
    }
    return o;
}

const p1 = new person('aa');

p1.identify() //I'm aa