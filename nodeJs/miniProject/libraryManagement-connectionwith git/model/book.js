const { Sequelize } = require("sequelize");
const { sequelize } = require("./dataBase");

const book = sequelize.define(
  "book",
  {
    bookId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bookName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
  }
);

exports.book = book;
