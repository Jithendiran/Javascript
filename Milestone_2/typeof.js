var a = "1"
console.log(typeof a) //string

a = 1
console.log(typeof a) //number

function a()
{
    console.log("hi");
}
console.log(typeof a) //number
 
a = ()=>{
    console.log("hi");
}
console.log(typeof a) //function

a = {
    aa:1
}
console.log(typeof a) //object

a = true

console.log(typeof a) //boolean
var b;

console.log(typeof b) //undefined
