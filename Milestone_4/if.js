/* 
   Documentor Name : E.K.Jithendiran
   Date            : 20-10-2021
*/

//if
var a = 5;
if(a)// true
{
    console.log('True');
    
}


if(true) //outer if
{
    if (false) //innerif
    //nested if
    {
        console.log("Not Reach") //not reach
    }
    else
    {
        console.log("It reachable")
    }
}
