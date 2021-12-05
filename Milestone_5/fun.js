/*
Run the file in vscode with node
and check with break point
*/
const f = () => {
    {//'this' points to object ,__proto__ is object's proto
        var a = 2;//local scope to function
        let i = 4;// it is block scope
        const j = 5;// it is block scope
        this.x = 6; //this object's property u can use any where inside this function
    }
    this.y = 3;
    this.__proto__.ji = 'jidesh' // this is object prototype property
    console.log(a);
}

function fun() {

    {//'this' points to global ,__proto__ is object's proto
        var a = 2;//local scope to function
        let i = 4;// it is block scope
        const j = 5;// it is block scope
        this.c = 6; //it global property
    }
    this.b = 3;
    console.log(a);

}

function fun3() {

    {// 'this' points to fun3 , __proto__ is object ,this.constructor.__proto__ is function prototype
        var a = 2;//local scope to function
        let i = 4;// it is block scope
        const j = 5;// it is block scope
        this.ca = 6;//it is fun3 property
    }
    this.ba = 3;
    console.log(a);


}

const fun2 = function () {

    {//'this' points to global,__proro__ is object
        var a = 2;//local scope to function
        let i = 4;// it is block scope
        const j = 5;// it is block scope
        this.cc = 6;//it is global property
    }
    this.bb = 3;
    console.log(a);

}

const fun4 = function (){

    {//'this' points to fun4,__proto__ is object __proto__ has two property 1.constructor,2__proto__
        var a = 2;//local scope to function
        let i = 4;// it is block scope
        const j = 5;// it is block scope
        this.ccc = 6;//
    }
    this.bbb = 3;
    console.log(a);


}

f()
//console.log(x,y); will not work
console.log(ji);//will work
fun()
console.log(c, b);//will work bcz it inside global

new fun3()
//console.log(ca, ba);//error becz it is inside fun3 it not go inside function prototype
new fun3()

fun2()
console.log(cc, bb);

new fun4()
//console.log(ccc,bbb); also give error