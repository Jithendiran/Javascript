/* 
   Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/
//for
let i,j;
for (i = 0; i < 5; i++) 
{
  console.log(i)
  
}

for(i = 0,j = 5;i < j;i++,j--)
{
    console.log("i : "+i+" j : "+j)
}

//for-in
//it takes the index 
let a = {'a':1,'b':2,3:3}
for(i in a)
{
    console.log(i+" : "+a[i]); // 3 : 3  a : 1  b : 2
}
let u = [1,2,3,4]
for(i in u)
{
    console.log(i)// 0 1 2 3
}
//for-of
//it takes the value
var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars)
{
  console.log(x); //BMW, Volvo, Mini
}

for (i in cars)
{
    console.log(i) // 0 1 2
}