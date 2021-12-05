const model = require("../model/model");
const { sequelize } = require("../model/dataBase");
require("dotenv").config({ path: "../.env" });

beforeAll(async () => {
  try {
    await sequelize.sync();
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error in connection DB:" + error);
  }
});
test("Add User ", async () => {
  const res = await model.addAuthor({
    name: "jidesh",
    email: "jidesh0410@gmail.com",
    password: "aaAA#$12",
  });
  console.log(res);
  expect(res.success).toBeTruthy();
});
