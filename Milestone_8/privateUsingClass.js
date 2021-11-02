/**
 * Documentor : Jithendiran
 * Date       : 27-10-21
 * 
 * Private
 * srating with '#' is private
 * private it access with in class only
 */

class Rectangle {
    #height = 0;
    #width;
    name = "rect" //public
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
    #privateMethod() {
        console.log("INside Private method");
    }

    execPrivateMethod() {
        this.#privateMethod()
    }
}

const c = new Rectangle(2, 2)

//console.log(c.#height);//SyntaxError: Private field '#height' must be declared in an enclosing class

//console.log(c.privateMethod());//TypeError: c.privateMethod is not a function

c.execPrivateMethod()//INside Private method

console.log(c.name);//rect

c.name = "Rect"
console.log(c.name);//Rect

const c1 = new Rectangle(2, 2)

console.log(c1.name);//rect

