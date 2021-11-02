/* 
   Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/

a = [1,2,3,4,'1','a','B','z','b']

for (const iterator of a) 
{
    switch(iterator)
    {
        case 1:console.log('low');break;
        case 2:console.log('2');
        case 3 :console.log('3');
        case 4: console.log("ok");break
        case 'a':console.log('a');break
        case 'b'||'B':console.log('B');
        default:console.log('default');break;
    }
}

/*
o/p

low
2
3
ok
3
ok
ok
default
a
default
default
B
default

*/
