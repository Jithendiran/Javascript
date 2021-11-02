/* 
   Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/

/*
The labeled statement can be used with break or continue statements. 
It is prefixing a statement with an identifier which you can refer to.
JavaScript has no goto statement, you can only use labels with break or continue.

The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.

The continue statement (with or without a label reference) can only be used to skip one loop iteration.

The break statement, without a label reference, can only be used to jump out of a loop or a switch.

With a label reference, the break statement can be used to jump out of any code block:
*/
loop:
for (let index = 0; index < 5; index++)
{
    if(index == 3)
    {
        continue loop;                  //it not again start from 0 
    }
    console.log('index : ',index);
    
    
}
/*
o/p
    index :  0
    index :  1
    index :  2
    index :  4

*/

loop1:
for (let index = 0; index < 5; index++)
{
    if(index == 3)
    {
        break loop1;                  //it comes out of the loop 
    }
    console.log('index : ',index);
    
    
}
loop2:
for (let index = 0; index <5; index++)
{
    for (let index1 = 0; index1 < 3; index1++)
    {
        if(index == 2)
        {
            break loop2;  // it not break the last loop it will break the control from where the label is there
        }
        console.log(index,"  : ",index1)
        
    }
    
}

/*
o/p
0   :  0
0   :  1
0   :  2
1   :  0
1   :  1
1   :  2

*/
console.log('in in');
loop3:
for (let index = 0; index <5; index++)
{
    for (let index1 = 0; index1 < 3; index1++)
    {
        if(index == 2)
        {
           continue loop3; // it contine from where the loop label is there
        }
        console.log(index,"  : ",index1)
        
    }
    
}
console.log('in in');

/*
o/p
0   :  0
0   :  1
0   :  2
1   :  0
1   :  1
1   :  2
3   :  0
3   :  1
3   :  2
4   :  0
4   :  1
4   :  2
*/

// for (let index = 0; index <5; index++)
// {
//     for (let index1 = 0; index1 < 3; index1++)
//     {
//         if(index == 2)
//         {
//             break loop2; //SyntaxError: Undefined label 'loop2'
//         }
//         console.log(index,"  : ",index1)
        
//     }
    
// }

