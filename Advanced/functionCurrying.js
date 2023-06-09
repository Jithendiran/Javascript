/**
 * @author E.K.Jithendiran
 * @date 09.06.2023
 */

/**
 * A function currying will take more than one parameter and break into uniary parameter
 * there fore function currying will take one parameter
 * A function currying will return another function and the last function return the value
 */

let funcCurry = (arg1) => {
    return (arg2) => {
        return (arg3) => {
            return `1 : ${arg1} 2 : ${arg2} 3 : ${arg3}`;
        }
    }
}

console.log(funcCurry('aa')('bb')('cc'));

/**
 * Op
 *  1 : aa 2 : bb 3 : cc
 */

// short code
funcCurry = arg1 => arg2 => arg3 => `1 : ${arg1} 2 : ${arg2} 3 : ${arg3}`;
console.log(funcCurry('aa')('bb')('cc'));

/**
 * Op
 *  1 : aa 2 : bb 3 : cc
 */

console.log(funcCurry('aa').toString());
/**
 * Op
 * arg2 => arg3 => `1 : ${arg1} 2 : ${arg2} 3 : ${arg3}`
 */

// function composition
// It is like a matemetical formula like multiply(sum(2))
// It will be execute in reverse order like 1st sum will execute then multiply will execute

// const sumBy2 = fun => x => x + 2;
// const multiplyBy2 = fun => x => x * 2;
// const completeOrder = (...arg) => {
//     console.log(`Order Completed : ${[...arg].toString()}`)
// };

// // const final = multiplyBy2(sumBy2);
// console.log(sumBy2(completeOrder(2)));

const init = fn => (...arg) => {
    console.log(`Init Executed`);
    return fn(...arg);
}

const prepare = fn => (...arg) => {
    console.log(`Prepare Executed`);
    return fn(...arg);
}

let complete = (...arg) => {
    console.log(`Order ${[...arg].toString()} completed`);
}

complete = prepare(complete);
console.log(complete.toString());

/**
 * Op
    (...arg) => {
    console.log(`Prepare Executed`);
    }
 */
complete = init(complete);
complete(1);
/**
 * Op
    Init Executed
    Prepare Executed
    Order 1 completed
 */

// compose functions
const addBy2 = x => x + 1;
const multiplyBy2 = x => x * 2;
const pipe = (...fns) => val => fns.reduce((acc, fn) => fn(acc), val)
const compose = (...fns) => val => fns.reduceRight((acc, fn) => fn(acc), val);

console.log(compose(multiplyBy2, addBy2)(4));
// order of exec is add2 then multiply
// 10

console.log(pipe(multiplyBy2, addBy2)(4));
// order of exec is multiply then add2
// 9

// palindrom with pipe

const values = [
    "CatTA C", "M ADAm", "abc d"
]
// conver to lower
const joinCustom = x => x.join('');
const splitCustom = x => x.split(' ');
const toLowerCustom = x => x.toLowerCase();
const reverseCustom = x => joinCustom(x.split('').reverse());

values.forEach(element => {
    const frd = pipe(
        toLowerCustom,
        splitCustom,
        joinCustom,
    );
    const rev = pipe(
        frd,
        reverseCustom
    );
    const fwdrs = frd(element);
    const revrs = rev(element);
    console.log(fwdrs, revrs, fwdrs === revrs);
})