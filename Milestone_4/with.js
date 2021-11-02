/* 
   Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/
//Before-with
let a, x, y;
const r = 10;


a = Math.PI * r * r;
x = r * Math.cos(Math.PI);
y = r * Math.sin(Math.PI/ 2);

console.log(a,x,y)

//After-with
let a, x, y;
const r = 10;

with (Math)
{
  a = PI * r * r; //no-need of Math.PI => PI it self enough
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
console.log(a,x,y)