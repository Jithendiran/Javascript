/**
 * Documenter : Jithendiran
 * Date       : 22-11-2021
 */
const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = new Sequelize("sampleNodeDatabase", "", "", {
  host: "localhost",
  storage: "./database.sqlite",
  dialect: "sqlite" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  port: 3306,
});

const user = sequelize.define(
  "userHook",
  {
    name: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      validate: () => {
        console.log("During validation");
      },
    },
  },
  {
    hooks: {
      beforeValidate(option) {
        console.log("Before validate");
        console.log(option.password);
      },
      afterValidate(option) {
        console.log("Before validate");
        console.log(option.password);
      },
      beforeCreate(option) {
        console.log("Before Insert");
        option.password = bcrypt.hashSync(option.password, 10);
      },
      afterCreate(option) {
        console.log("After create");
      },
    },
  }
);

(async () => {
  try {
    await sequelize.sync();
    await user.create({ name: "ji", password: "abc" });
    console.log(await user.findAll());
  } catch (err) {
    console.log(err);
  }
})();
/*
O/p
Before validate
abc
Before validate
abc
Before Insert
Executing (default): INSERT INTO `userHooks` (`id`,`name`,`password`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4);
After create
*/
