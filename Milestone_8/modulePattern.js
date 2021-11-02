/**
 * Documentor : Jithendiran
 * Date       : 26-10-21
 * 
 * modulePattern
 * The module pattern, as described by Douglas Crockford, does the same for singletons.
 * Singletons are objects of which there will only ever be one instance
 */

const privateObj = {
    _privateVar: 27,
    set privateVar(a) {
        this._privateVar = a
    },
    get privateVar() {
        return this._privateVar
    }
}

console.log(privateObj._privateVar);//27

privateObj.privateVar = 33

console.log(privateObj.privateVar);//33

console.log(privateObj._privateVar);//33 but this also accessable

// solution is wrapup inside a function .Because it is function scope

const obj = (function () {
    let _privateVar = 27

    return {
        a: 2,
        get privateVar() {
            return _privateVar
        },
        set privateVar(a) {
            _privateVar = a
        }
    }

})()

console.log(obj.privateVar);//27

obj.privateVar = 33

console.log(obj.privateVar);//33

console.log(obj._privateVar);//undefined
console.log(obj);//{ a: 2, privateVar: [Getter/Setter] }

const a = (function () {
    console.log("no");
})()
a //no

//reference
//https://www.demo2s.com/javascript/javascript-function-module-pattern-for-singleton.html
