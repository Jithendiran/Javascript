/* 
   Documentor Name : E.K.Jithendiran
   Date            : 21-10-2021
*/
// The generator function ( function* statement)
/*
It is a special type of function
it can pause and resume it's execution
it simplifies the creation of iterrators
*/

// yeild
/*
The yield keyword pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller.
It can be thought of as a generator-based version of the return keyword.
*/
'use strict';
function* gen()
{
    
    yield 1;// 1st time call it return 1 and suspend itself
    yield 2;// 2nd time call it return 2 and suspend itself
    yield "final like u can n no.of yeild"//last call
}

// for(i in gen())
// {
//     console.log(i)
// }
console.log(gen()) //Object [Generator] {}
console.log(gen().next())//{ value: 1, done: false }//it return generator object and call the fist value
console.log(gen().next())//{ value: 1, done: false }//it return generator object and call the fist value
console.log(gen().next())//{ value: 1, done: false }//it return generator object and call the fist value
console.log(gen().next())//{ value: 1, done: false }//it return generator object and call the fist value

//if n calls like above is always return 1st yeild only

const generator = gen() //generator has the generator value
console.log(generator.next())//{ value: 1, done: false }//it return fist value
console.log(generator.next())//{ value: 2, done: false }//it return second value
console.log(generator.next())//{ value: 'final like u can n no.of yeild', done: false }//it return 3rd value
console.log(generator.next())//{ value: undefined, done: true } // it indicate it has no value

//call also like this
// const c1 = gen()
// for (const i in c1.next())
// {
//     console.log(i); 
// }
/*
o/p
value
done
*/

/*
The for...of statement creates a loop iterating over iterable objects, 
including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
 It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
 */
 
const c1 = gen()
for (const itItem of c1)
{
    console.log(itItem);
}
/*
o/p
1
2
final like u can n no.of yeild
*/

for(const i of gen())
{
    console.log(i);
}
/*
op
1
2
final like u can n no.of yeild
*/

function* square()
{
    let n =1;
    while(true)
    {
        yield n*n;
        n++;
    }
}

// for(let i of square())
// {
//     console.log(i); //run for infinite
// }
let gen1 = square()
for(let i=0;i<5;i++)
{
    console.log(gen1.next().value);
}
/*
1
4
9
16
25
*/

//generator function with variable
function* witharg(max)
{
    let n =1;
    while (n<max) 
    {

        yield n*n
        n++;

    }
}

for (const iterator of witharg(5))
{
    console.log(iterator);
}
/*
1
4
9
16
*/