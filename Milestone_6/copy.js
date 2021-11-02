/**
 * Documenter : Jithendiran
 * Date       : 25-10-21
 * 
 * dynamic properties
 * copying object
 */

/**
 * Three waus to copy an object
 * Use the spread (...) syntax.
 * Use the Object.assign() method.
 * Use the JSON.stringify() and JSON.parse() methods
 */

const person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'xxx',
    landmark: 'yyy'
  }
};


// using spread ... method and it is shallow copy
let p1 = {
  ...person
};

console.log(p1);//{ firstName: 'John', lastName: 'Doe',  address: { street: 'xxx', landmark: 'yyy' } }
p1.name = "John Doe"

p1.address.area = 'zzz'//it will reflect
console.log(p1);//{ firstName: 'John', lastName: 'Doe',  address: { street: 'xxx', landmark: 'yyy' ,area: 'zzz' }, name: 'John Doe' }
console.log(person);//{ firstName: 'John', lastName: 'Doe',  address: { street: 'xxx', landmark: 'yyy' , area: 'zzz' } }


// using  Object.assign() method and it is shallow copy
let p2 = Object.assign({}, person);
p2.age = 21
console.log(p2);
/*
O/p
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'xxx', landmark: 'yyy', area: 'zzz' },
  age: 21
}
*/
console.log(person)
/*
O/p
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'xxx', landmark: 'yyy', area: 'zzz' }
}
*/
person.address.street = 'ppp'//it will refelect
console.log(person)
/*
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'ppp', landmark: 'yyy', area: 'zzz' }
}
*/

console.log(p2)

/*
O/p
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'ppp', landmark: 'yyy', area: 'zzz' },
  age: 21
}
*/
p2.address.landmark = 'MMM'//will refelect
console.log(p2);
/*
O/p
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'ppp', landmark: 'MMM', area: 'zzz' },
  age: 21
}
*/
console.log(person);
/*
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'ppp', landmark: 'MMM', area: 'zzz' }
}
*/

// using JSON and it is deep copy
let p3 = JSON.parse(JSON.stringify(person));
console.log(p3);
/*
O/p
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'ppp', landmark: 'MMM', area: 'zzz' }
}
*/
p3.name = 'John Doe'
console.log(p3);
/*
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'ppp', landmark: 'MMM', area: 'zzz' },
  name: 'John Doe'
}

*/
console.log(person);
/*
O/p
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'ppp', landmark: 'MMM', area: 'zzz' }
}
*/

p3.address.street = 'SSS'
console.log(p3);
/*
O/p
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'SSS', landmark: 'MMM', area: 'zzz' },
  name: 'John Doe'
}
*/

console.log(person);
/*
{
  firstName: 'John',
  lastName: 'Doe',
  address: { street: 'ppp', landmark: 'MMM', area: 'zzz' } //not reflected
}
*/
