/**
 * Documenter : Jithendiran
 * Date       : 20-11-2021
 */
const { Sequelize, QueryTypes } = require("sequelize");

const sequelize = new Sequelize("sampleNodeDatabase", "", "", {
  host: "localhost",
  storage: "./databaseValidate.sqlite",
  dialect: "sqlite" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  port: 3306,
});

(async () => {
  try {
    let data = await sequelize.query("select * from 'customerValidates'");
    console.log(data);
    data = await sequelize.query(
      "select name from customerValidates where age > 19",
      {
        // If plain is true, then sequelize will only return the first
        // record of the result set. In case of false it will return all records.
        plain: false,

        // Set this to true if you don't have a model definition for your query.
        raw: false,

        // The type of query you are executing. The query type affects how results are formatted before they are passed back.
        type: QueryTypes.SELECT,
      }
    );
    console.log(data);

   
  } catch (err) {
    console.log(err);
  }
})();

const replacement = async ()=>{
    try {
        data = await sequelize.query(
            "select name from customerValidates where age > ?",
            {
                replacements: [21,19,20],
              // The type of query you are executing. The query type affects how results are formatted before they are passed back.
              type: QueryTypes.SELECT,
            }
          );
          console.log("replacement : ",data);
    } catch (err) {
        console.log(err);
    }
}
replacement()
