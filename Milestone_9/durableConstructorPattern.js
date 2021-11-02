/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Durable Constructor Pattern 
 * 
 * it is an secure pattern
 * 
 * In a parasitic constructor pattern, you create a constructor function that creates an object and returns that object.
 * 
 * A durable object is an object that does not have public property and its methods don’t reference to the this object.
 * The durable objects are often used in secure environments where accessing this and new are not allowed.
 */

const securePerson = function (name) {
    var o = new Object();
    o.identify = function () {
        console.log(name); //  no this
    }
    return o;
}


//The alien is a durable object that does not allow the external code to access its members without calling its methods.
const alien = securePerson('?#@');
alien.identify(); // ?#@