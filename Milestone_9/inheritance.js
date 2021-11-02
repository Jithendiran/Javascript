/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Inheritance
 * 
 * using parents property
 */

//using class
'use strict';
class A {
    constructor(name, age) {
        console.log("inside cons1");
        this.name = name
        this.age = age
    }

    getName() {

        return `Inside parent ${this.name}`
    }

    getParent() {
        return 'Inside Parent'
    }
}

class B extends A {
    constructor(name, age, place) {
        console.log("inside cons2");
        super(name, age)
        this.place = place
    }
    getName() {

        return `Inside child ${this.name}`
    }

    getPlace() {

        return `Inside ${this.place}`
    }
}

const b1 = new B()//inside cons2 inside cons1
console.log(b1.getPlace())//Inside undefined
//console.log(b1.getName());//ReferenceError: name is not defined

const b2 = new B('aa', 21, 'tup')//inside cons2 inside cons1
console.log(b2.getPlace())//Inside tup

//override
console.log(b1.getName());//Inside child undefined 

class C extends A {
    constructor(name, age, place) {
        console.log("inside cons2");
        super(name, age)
        this.place = place
    }

    getName() {

        return super.getName()
    }
    getPlace() {
        return `Inside ${this.place}`
    }
}

const c1 = new C('aa', 21, 'erd')//inside cons2 inside cons1
console.log(c1.getPlace())//Inside erd

console.log(c1.getName());//Inside parent aa