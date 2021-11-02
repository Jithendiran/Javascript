/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Constructor Pattern
 * 
 * In classical object-oriented programming languages, a constructor is a special method used to initialize a newly created object once memory has been allocated for it.
 * In JavaScript, as almost everything is an object, we're most often interested in object constructors.
 */

function Car(model, year, miles) {

    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };
}

// Usage:

// We can create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

// and then open our browser console to view the 
// output of the toString() method being called on 
// these objects
console.log(civic.toString()); //Honda Civic has done 20000 miles
console.log(mondeo.toString());//Ford Mondeo has done 5000 miles


  //Reference
  //https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s01.html
  //https://medium.com/@olufotebig/the-constructor-pattern-learning-javascript-design-patterns-18c2e76ae52