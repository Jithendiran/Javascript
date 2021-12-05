/**
 * Documenter : Jithendiran
 * Date       : 22-11-2021
 */
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sampleNodeDatabase", "", "", {
  host: "localhost",
  storage: "./database.sqlite",
  dialect: "sqlite" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  port: 3306,
});

const user = sequelize.define(
  "User",
  {
    email: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: "public",
    },
  },
  {
    indexes: [
      // Create a unique index on email
      {
        unique: true,
        fields: ["email"],
      },

      // By default index name will be [table]_[fields]
      // Creates a multi column partial index
      {
        name: "public_by_author",
        fields: ["author", "status"],
        where: {
          status: "public",
        },
      },
    ],
  }
);

(async () => {
  try {
    await sequelize.sync();
    await user.bulkCreate([
      { email: "abc@gmail.com", author: "aa", status: "private" },
      { email: "bca@gmail.com", author: "bb", status: "public" },
      { email: "rty@gmail.com", author: "cc", status: "private" },
      { email: "abd@gmail.com", author: "aa", status: "public" },
    ]);
    console.log(await user.findAll());
  } catch (err) {
    console.log(err);
  }
})()
