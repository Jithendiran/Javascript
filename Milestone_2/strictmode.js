// without strict mode
a = 5;
console.log(a)
var NaN = 3

//silent failure
var obj = {
    a: 123,
    get X() {
        return this.a;
    }
}

obj.X = 3; // it do nothing
console.log(obj.a)

//correct way is
var obj = {
    a: 123,
    get X() {
        return this.a;
    },
    set X(x) {
        this.a = x;
    }
}

obj.X = 3; // it will work
console.log(obj.a)

var ab = {
    a: 123
}
Object.defineProperty(ab, 'b', { value: 2, writable: false })
console.log(ab)
ab.b = 7

console.log(ab)

///
function aa(a, b, a) //duplicate variable name 
{
    console.log("hi")
}

aa(1, 2, 3)





//with using strict mode
'use strict';
// a = 5; it cause  a = 5 ReferenceError: a is not defined error
var a = 5
console.log(a)
a = 10;
console.log(a)
var NaN = 3 // it will cause error because 1

//NaN is not a keyword, but it is rather a built-in property of the global object, and as such may be , it gives type error in the browser


//silent failure
var obj = {
    a: 123,
    get X() {
        return this.a;
    }
}

obj.X = 3; // it do nothing
console.log(obj.a)

///
var ab = {
    a: 123
}
Object.defineProperty(ab, 'b', { value: 2, writable: false })
console.log(ab)
ab.b = 7 //it will cause error  TypeError: Cannot assign to read only property 'b' of object '#<Object>'

console.log(ab)


////
function aa(a, b, a) //error SyntaxError: Duplicate parameter name not allowed in this context
{
    console.log("hi")
}

aa(1, 2, 3)


