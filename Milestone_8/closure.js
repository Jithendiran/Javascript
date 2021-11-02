/**
 * Documentor : Jithendiran
 * Date       : 26-10-2021
 * 
 * closure
 * Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * It is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task,
 * as it will negatively affect script performance both in terms of processing speed and memory consumption.
 */

const { Console } = require("console");

// inner function can access outer function variable even after it is executed
const makeFunc = () => {
    const name = 'Mozilla';
    const displayName = () => {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();//Mozilla

const makeAdder = (x) => {
    return (y) => {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

const counter = (() => {
    let privateCounter = 0;
    const changeBy = (val) => {
        privateCounter += val;
    }

    return {
        increment: () => {
            changeBy(1);
        },

        decrement: () => {
            changeBy(-1);
        },

        value: () => {
            return privateCounter;
        }
    };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.

const e = 10;
const sum = (a) => {
    return (b) => {
        return (c) => {
            // outer functions scope
            return (d) => {
                // local scope
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)); // log 20

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result) //log 20


const a = () => {
    const name = "jith"


    return () => {

        console.log(name);
    }
}

const b = a()
b() //jith

