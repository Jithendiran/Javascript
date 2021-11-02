/**
 * Documenter : Jithendiran
 * Date       : 25-10-21
 * 
 * dynamic properties
 * we can dynamically add properties to object
 */

const obj1 = {}
console.log(obj1);//{}

obj1.a = 1
console.log(obj1);//{'a' = 1} 

obj1['b'] = "B"
console.log(obj1);//{'a' = 1,'b' = 'B'} 


/**
 * using Object.defineProperty(obj, prop, descriptor)
 * @param obj The object on which to define the property.
    
 * @param prop The name or Symbol of the property to be defined or modified.
   
 * @param descriptor The descriptor for the property being defined or modified.
    
 * @param configurable true if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
    Defaults to false.
    
 * @param enumerable true if and only if this property shows up during enumeration of the properties on the corresponding object. 
    Defaults to false.
    
 * @param value The value associated with the property. 
    Can be any valid JavaScript value (number, object, function, etc). Defaults to undefined.

 * @param writabletrue if the value associated with the property may be changed with an assignment operator. 
    Defaults to false.
    
 */

Object.defineProperty(obj1, "c", { value: "3", writable: true, enumerable: true }) //if enumerable is false c is not displayed but it actually there

console.log(obj1);//{ a: 1, b: 'B', c: '3' }

obj1.a = 2 //it is possible because it is point to reference of the 
console.log(obj1);//{ a: 2, b: 'B', c: '3' }

//obj1 = { a: 2, b: 4 } // it is error because it change address of obj1 but obj1 type is const

//to freeze the value use Object.freeze(obj) using this cannot add,update,delete.
//There is no way to do this, once an object has been frozen there is no way to unfreeze it.


obj1['innerProp'] = { 'aa': 11 }

Object.freeze(obj1)

obj1.a = 0 //not update
obj1["d"] = 1 // it will not add
delete obj1.a // it will not delete
console.log(obj1);//{ a: 2, b: 'B', c: '3', innerProp: { aa: 11 } }


obj1.innerProp.bb = 3 //it will add
console.log(obj1); //{ a: 2, b: 'B', c: '3', innerProp: { aa: 11, bb: 3 } }

//to freeze inner property
Object.freeze(obj1.innerProp)
obj1.innerProp.cc = 3 //it will not add
obj1.innerProp.bb = 1 //not update 
console.log(obj1); //{ a: 2, b: 'B', c: '3', innerProp: { aa: 11, bb: 3 } }

delete obj1.innerProp.aa //it will not delete
console.log(obj1); //{ a: 2, b: 'B', c: '3', innerProp: { aa: 11, bb: 3 } }


//Object.seal() With sealing, the situation is a little bit different. 
//We still can’t add new properties, delete existing ones and every property becomes non-configurable but the values of properties can be changed

const obj2 = {
   a: 1,
   b: 2,
   innerProp: {
      aa: 11
   }
}

Object.seal(obj2)

obj2.c = 2 //not add
obj2.innerProp.bb = 22 // added 
obj2.a = 0 // modified
delete obj2.a//not deleted
console.log(obj2);