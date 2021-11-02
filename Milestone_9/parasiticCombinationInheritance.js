/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Parasitic Combination Inheritance
 * Parasitic combined inheritance, is a bit of integration of parasitic inheritance and combination inheritance,
 * mainly by borrowing constructor to inherit attributes, inheriting the method through the mixed form of the prototype chain.
 * 
 */
//eg 1
const inheritPrototype = function (SuperType, SubType) {
    const prototype = Object.create(SuperType.prototype);
    
    prototype.constructor = SubType;
    SubType.prototype = prototype;
}
const SuperType = function (name) {
    this.name = name;
    this.colors = ["red", "blue", "yellow"];
}
function SubType(name) {
    SuperType.call(this, name);
}
inheritPrototype(SuperType, SubType);
const s1 = new SubType("ji");

console.log(s1.name);//ji

//eg 2
Object.inherit = function(subType, superType){
    //creates a new empty object with the superType's prototype
    var prototype = Object.create(superType.prototype);
    //preserving the reverse chain from the prototype back to the constructor, in this case subType
    prototype.constructor = subType;
    //finally assigns the prototype to subType
    subType.prototype = prototype;
};

const Animal = function(weight = '100 kg'){
    this.weight = weight; //this is going to be added to the child instance
};

Animal.prototype.getWeight = function(){
    return this.weight;
};

const Pig = function(colour = 'Pink'){
    //executes the Animal constructor function, bringing in it's unique instance variables to the Pig's scope
    Animal.apply(this, ['1000 kg']);
    this.colour = colour;
};

//assigns Animal's prototype to Pig's prototype
Object.inherit(Pig, Animal);

//augment the prototype for Pig, but not for other animals (if any)
Pig.prototype.getColour = function(){
    return this.colour;
};

const pig = new Pig('Yellow');

console.log(pig.getColour());//Yellow
console.log(pig.getWeight());//1000 kg