/**
 * Doumenter : Jithendiran
 * Date      : 22-10-2021
 * 
 * Array
 * JavaScript variables can be objects. Arrays are special kinds of objects.
 * Because of this, you can have variables of different types in the same Array.
 * You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array.
 * Array can be iteratable
 */

let fun = () => {
    console.log('Inside function')
}

let a = [1, "hi", fun(), fun]
a[2] //Inside function
a[3]() //Inside function

for (const iterator of a) {
    console.log(`${iterator} : Type of ${typeof iterator}`);

}

/*
o/p
Inside function
Inside function
1 : Type of number
hi : Type of string
undefined : Type of undefined
() =>{
    console.log('Inside function')
} : Type of function
*/


a = [4, 3, 'a', "A", 'abc', "AV"]
console.log(a.sort());//[ 3, 4, 'A', 'AV', 'a', 'abc' ] this will sort array it self no need to assign it
console.log(a)//[ 3, 4, 'A', 'AV', 'a', 'abc' ]

console.log(a.length);//6
let printArray = (i) => {
    console.log(i);

}

a.forEach(printArray) // 3 4 A AV a abc

const points = new Array(40, 100, 1, 5, 25, 10);
console.log(points);//[40, 100, 1, 5, 25, 10]

console.log(Array.isArray(points))//true
console.log(Array.isArray(a));//true
console.log(Array.isArray(1));//false

a.push('last') //add element in last position
console.log(a);//[ 3, 4, 'A', 'AV', 'a', 'abc','last' ]
a.pop()//remove element in last position
console.log(a);//[ 3, 4, 'A', 'AV', 'a', 'abc' ]
a.shift()//remove element in 1st position
console.log(a);//[ 4, 'A', 'AV', 'a', 'abc' ]
a.unshift(1)//add element in 1st position
console.log(a);//[ 1, 4, 'A', 'AV', 'a', 'abc' ]


/**
 * ... spread operator
 * it returns the value with ',' 
 * eg [1,2,3] => 1,2,3
 */

console.log(a, points)//[ 1, 4, 'A', 'AV', 'a', 'abc' ] [ 40, 100, 1, 5, 25, 10 ]
console.log([...a, ...points])//[ 1, 4, 'A', 'AV', 'a', 'abc' , 40, 100, 1, 5, 25, 10 ]

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }

console.log(myUpdatedVehicle);
/*
{
brand: 'Ford',
model: 'Mustang',
color: 'yellow', //last one is updated
type: 'car',
year: 2021
}
*/

let [x, y, z, , ...list] = [...a, ...points]  //[ 1, 4, 'A', 'AV', 'a', 'abc' , 40, 100, 1, 5, 25, 10 ]
console.log(x); //1
console.log(y); //4
console.log(z); //A
//'AV' is missied
console.log(list);// [ 'a', 'abc' , 40, 100, 1, 5, 25, 10 ]

console.log(list.indexOf(1))//4

/**
 * Iterators
 * map,filter,reduce
 */
let arr = [2, 3, 4, 1, 7, 8, 9]

console.log(arr.map(i => i * 2)) //[4,  6,  8, 2, 14, 16, 18]
console.log(arr.filter(i => i % 2 == 0));//[ 2, 4, 8 ]
console.log(arr.reduce((i, j) => i + j, 0));//34
console.log(arr.reduce((i, j) => i + j, 1));//35

//A JavaScript Set is a collection of unique values.Each value can only occur once in a Set.

arr = new Set([1, 1, 12, 3, 3])
console.log(arr)//Set(3) {1,12,3}

arr.add('r')
console.log(arr);//Set(4) { 1, 12, 3, 'r' }
arr.delete('r')
console.log(arr);//Set(3) { 1, 12, 3}

arr.forEach(i => console.log(i)) // 1 12 3

//A Map holds key-value pairs where the keys can be any datatype.A Map remembers the original insertion order of the keys.

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
fruits.set("watermelon", 500);
console.log(fruits);//Map(4) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 ,'watermelon' => 500 }
console.log(fruits.get("apples"));    // Returns 500
fruits.delete("apples");
console.log(fruits);//Map(3) { 'bananas' => 300, 'oranges' => 200, 'watermelon' => 500 }

for (const key of fruits) {
    console.log(key);
}
/*
[ 'bananas', 300 ]
[ 'oranges', 200 ]
[ 'watermelon', 500 ]
*/
console.log(fruits.has("apples"));//false




