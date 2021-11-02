/**
 * Documenter   : Jithendiran
 * Date         : 01-11-2021
 * 
 * Prototypal Inheritance
 * 
 */

//base class
const Job = function () {
    this.pays = true;
}

//prototype
Job.prototype.print = function () {
    console.log(this.pays ? "Hier me" : "no thabk");
}

//subclass
const TechJob = function (title, pays) {
    Job.call(this); // it access Job but not it's proto
    this.title = title;
    this.pays = pays
}

TechJob.prototype = Object.create(Job.prototype);
//TechJob.prototype.constructor = TechJob;

Object.prototype.print = function () {
    console.log("execute from Master object");
}

//it like override
TechJob.prototype.print = function () {
    console.log(this.pays ? this.title + ' Job is great hier me' : 'i would rather learn javascript');
}
//1st that's proto. then it's immediate proto chain. last master object's proto

const x1 = new TechJob("Javascript", true)
x1.print()//Javascript Job is great hier me



//Reference
//https://www.youtube.com/watch?v=7oNWNlMrkpc
//https://www.youtube.com/watch?v=uIlj6_z_wL8
//https://javascript.info/prototype-inheritance