/**
 * Documenter : Jithendiran
 * Date       : 23-10-21
 */
//using function methods we can cange the context 

//apply,bind,call
const obj1 = {
    name : 'aa',
    print : ()=>console.log(this),
    getName : function(value,n){
        console.log(`${this.name} is a ${value} has Exp of ${n}`);
    }
}


obj1.getName('Engineer','16')// aa is a Engineer has Exp of 16


// now i want to use same getName method with the context of obj2 
const obj2 = {
    name : 'bb'
}

//call
//syntax => Object.method.call(context,arg1,arg2,....argn)
obj1.getName.call(obj2,"Doctor",10)//bb is a Doctor has Exp of 10

//apply
//syntax => Object.method.apply(context,[arg1,arg2,....argn])
//the second argument is array then all are same

obj1.getName.apply(obj2,["Doctor",10])//bb is a Doctor has Exp of 10

//bind
//bind returns a function
const fun = obj1.getName.bind(obj2)
fun("Actor",50)//bb is a Actor has Exp of 50




obj1.print.call(obj2)//{}