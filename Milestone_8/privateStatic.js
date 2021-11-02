/**
 * Documentor : Jithendiran
 * Date       : 27-10-21
 * 
 * Private
 * srating with '#' is private
 *  
 */

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static id = 0;
  constructor() {
    //id++; error
    ClassWithPrivateStaticField.id++;
  }

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod() === 42);
// true
console.log(ClassWithPrivateStaticField.id);//0
const c1 = new ClassWithPrivateStaticField()
console.log(ClassWithPrivateStaticField.id);//1
