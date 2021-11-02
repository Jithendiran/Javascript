/**
 * Documenter   : Jithendiran
 * Date         : 29-10-2021
 * 
 * Factory pattern
 *  It is a single code that create different object that is Factory pattern.
 * 
 */



const tab = function ({ name, ram }) {
    this.name = name || ""
    this.ram = ram || ""
    this.type = "Tablet"
}

const lap = function ({ name, ram }) {
    this.name = name || ""
    this.ram = ram || ""
    this.type = "Lap"
}

const createFactory = function () {
    this.create = function (arg, type) {

        return (type == "lap" ? new lap(arg) : new tab(arg))
    }
}

const empList = []
const c = new createFactory()
empList.push(c.create({ name: "aa", ram: 8 }, "lap"))
empList.push(c.create({ name: "bb", ram: 4 }, "tab"))

empList.forEach(i => console.log(i))//lap { name: 'aa', ram: 8, type: 'Lap' } ,tab { name: 'bb', ram: 4, type: 'Tablet' }

//Reference
//https://refactoring.guru/design-patterns/factory-method
//https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192