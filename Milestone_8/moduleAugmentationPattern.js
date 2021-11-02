/**
 * Documentor : Jithendiran
 * Date       : 26-10-21
 * 
 * module augmentation
 * 
 * Imagine that we have a module called ModuleA and, as a developer, you want to add more functionality to this module.
 * However, for some reason, you decide to implement this new functionality in a completely separate module and then dynamically augment the original module with all the data and capabilities of this new module.
 * You can achieve this as shown here:
 */

//  var moduleA = ((coreModule) => {
//     const someData = "this is some data to be used later";
//     coreModule.someMethod = () => {
//         return someData;
//     };

//     return coreModule;
// })(moduleA);

const singleton = function () {
  // private variables and functions
  let privateVariable = 10;

  function privateFunction() {
    return false;
  }/*from   w ww .  demo 2 s. co m*/

  // create object
  const object = new Object();

  // add privileged/public properties and methods
  object.publicProperty = true;

  object.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  };

  // return the object
  return object;
}();

console.log(singleton);//{ publicProperty: true, publicMethod: [Function (anonymous)] }

//if developer a develop code with a variable . developer b develop code with a variable if both developer use same variable
//it don't want to sync 