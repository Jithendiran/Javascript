/* 
   Documentor Name : E.K.Jithendiran
   Date            : 21-10-2021
*/
//function overloading
function aa(a)
{
    console.log(a);
    
}
aa("1") //1 undefined 
/*
The reason for the “undefined” in the output is
 In JavaScript if two functions are defined with same name then the last defined function will overwrite the former function. 
*/
function aa(a,b)
{
    console.log(a+" "+b)
}
aa("hi","hello")

let a = function(a)
{
    console.log(a)
}
a("hi") //hi
/*
The above statement get function(a)
this not like function overloading . it is like assignment 
after seeing the assignment of new definition only it exec function(a,b)
*/
a = function(a,b)
{
    console.log(a+" "+b)
}
a("hi","hello") //hi hello
a("hi")//hi undefined
