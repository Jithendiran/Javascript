/**
 * Documentor : Jithendiran
 * Date       : 26-10-21
 * 
 * this
 */

//this is act according to their place
// arrow function take this from it's parent value.but the values are undefined
// normal object, function can take this from it's value
// call,apply,bind use this

const obj = {
    name: 'Jith',
    age: 21,
    getName: function () {
        console.log(this.name);
    },
    print: () => {
        console.log(this.name);
    }
}

obj.getName()//Jith


const obj2 = {
    name: 'Ji',
    print: () => {
        console.log(this.name);
    }
}

obj.getName.call(obj2)//Ji
obj.print.call(obj2)//undefined

// in above line obj's print is refers to obj2 but it's value is don't know



function ab() {
    this.name = "ans"
    this.aha = "hidh"
    return this  //it is global
}

const aa = () => {
    this.name = "nd"
    return this //it is not global
}

const ac = function () {
    this.name = "gh"
    return this //it is global
}
console.log(ab())
console.log(aa())//{ name: 'nd' }
console.log(ac());
