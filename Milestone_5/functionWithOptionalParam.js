/**
 * 
 * Documenter : Jithendiran
 * Date       : 31-10-21
 * 
 * argument passing with naming parameter,default argument
 */

//annonyms function normal function is similar like this
const fun = function ({ a = 1, b = 2, c = 3 } = {}) {

    this.a = a
    this.b = b
    this.c = c

    return this
}

console.log(new fun()); //fun { a: 1, b: 2, c: 3 }

console.log(new fun({ c: 0 })); //fun { a: 1, b: 2, c: 0 }

console.log(new fun({ c: 0, a: 9 }));//fun { a: 9, b: 2, c: 0 }

console.log(new fun({ c: 8, a: 7, b: 10 }));//fun { a: 7, b: 10, c: 8 }


//in arrow function 
const fun1 = ( { a = 1, b = 2, c = 3 } = {},name = "ji") => {
    this.name = name
    this.a = a
    this.b = b
    this.c = c

    return this
}

console.log(fun1()); //{ name: 'ji', a: 1, b: 2, c: 3 }

console.log(fun1({ c: 0 })); //{ name: 'ji', a: 1, b: 2, c: 0 }

console.log(fun1({ c: 0, a: 9 }));//{ name: 'ji', a: 9, b: 2, c: 0 }

console.log(fun1( { c: 8, a: 7, b: 10 },name = "jith"));//{ name: 'jith', a: 7, b: 10, c: 8 }