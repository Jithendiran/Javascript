/**
 * Documenter : Jithendiran
 * Date       : 20-11-2021
 */
const { where } = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("sampleNodeDatabase", "jidesh", "", {
  host: "localhost",
  storage: "./database.sqlite",
  dialect: "sqlite" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  port: 3306,
});

const customer = sequelize.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

const fun = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ froce: true });
    console.log("All models were synchronized successfully.");
    const data = await customer.create({ name: "Doe" });
    //create is an short hand command of build and save
    console.log("user created");
    //to update
    data.name = "Ji";
    await data.save();
    console.log("Updated");
    //to update method 2
    data.set({
      name: "Hello",
    });
    await data.save();
    console.log("Updated");

    console.log("Name : " + data.name);
    //to delete
    await data.destroy();
    console.log("Last created name deteted");

    // if we update the column and not save it means we can able to reload it by data.reload()
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const select = async () => {
  try {
    let user = await customer.findAll(); //SELECT * FROM customer;
    console.log(user); // it will print in json
    user = await customer.findAll({
      attributes: ["name"],
    });
    //SELECT name FROM customer;
    console.log(user);
    //with where class
    user = await customer.findAll({ where: { name: "Ji" } }); //SELECT name FROM customer WHERE name = Ji;
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

const update = async () => {
  try {
    await customer.update({ name: "Hiii" }, { where: { name: "Ji" } });
    console.log(await customer.findAll());
  } catch (err) {
    console.log(err);
  }
};

const delt = async () => {
  try {
    await customer.destroy({ where: { id: 1 } }); //DELETE FROM `customers` WHERE `id` = 1
  } catch (err) {}
};
//Reference
//https://sequelize.org/v3/docs/models-definition/
const trunckate = async () => {
  try {
    await customer.destroy({
      truncate: true,
    });
    console.log(await customer.findAll());
  } catch (err) {
    console.log(err);
  }
};

//drop particular table
const drop = async () => {
  await customer.drop();
  console.log("Dropped customer table");
};
//drop all table
const dropAll = async () => {
  await sequelize.drop();
  console.log("Dropped all table in databasetable");
};

(() => {
  fun();

  select();

  update();

  delt();

  trunckate();

  drop();

  dropAll();
})();
//query
//https://sequelize.org/master/manual/model-querying-basics.html
