const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("libraryManagement", "jidesh", "", {
  host: "localhost",
  dialect: "sqlite",
  storage: "../libraryManagement.sqlite",
  port: 3306,
  logging: false,
});



exports.sequelize = sequelize;
