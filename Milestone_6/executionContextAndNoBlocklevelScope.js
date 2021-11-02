/**
 * Documenter : Jithendiran
 * Date       : 26-10-21
 */
a = "hello"//global
b = "man"
var c = "c"
const fun = function () {
    if (1 == 1) {
        var a = 2//local for function
        var x = 7
        b = 3
        c = 5
    }
    console.log(a);//2
    console.log(b);//3
    console.log(c);//5

}
console.log(a);//hello
console.log(b);//man
console.log(c);//c
fun()
console.log(a);//hello
//console.log(x);//error
console.log(b);//3
console.log(c);//5


function NoBlockLevelScope() {

    if (1 > 0) {
        var myVar = 22;

    }

    console.log(myVar);//22
}

NoBlockLevelScope()
//console.log(myVar);//error

