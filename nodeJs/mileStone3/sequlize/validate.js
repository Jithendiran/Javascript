/**
 * Documenter : Jithendiran
 * Date       : 22-11-2021
 */
const Sequelize = require("sequelize");

const sequelize = new Sequelize("sampleNodeDatabase", "", "", {
  host: "localhost",
  storage: "./databaseValidate.sqlite",
  dialect: "sqlite" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  port: 3306,
});

const customer = sequelize.define(
  "customerValidate",
  {
    name: {
      type: Sequelize.STRING,
      validate: {
        is: /^[0-9a-f]{6,10}$/i //name with 0-9 ,a-f with lemgth of from 6 to 10
      }
    },
    age:{
        type:Sequelize.INTEGER,
        validate:{
            greaterAge(value){
                if(value <  18){
                    throw new Error("Age low")
                }
            }
        }
    }
  },
  { createdAt: false , timestamps: false}
);

const fun = async ()=>{
    try {
        await sequelize.sync({ force: true })
        const data = await customer.create({name:'abcd02',age:21})
        console.log("created");
        console.log(await customer.findAll());
        //await customer.create({name:'a'})//error
        //await customer.create({name:'abcd02',age:2}) //Age low error
        
    } catch (err) {
        console.log(err);
    }
}
fun()

//Reference
//https://sequelize.org/master/manual/validations-and-constraints.html