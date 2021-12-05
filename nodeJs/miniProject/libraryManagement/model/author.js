const { Sequelize } = require("sequelize");
const { sequelize } = require("./dataBase");
const crypto = require("crypto");
const users = require("./users");

const author = sequelize.define(
  "author",
  {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        // is:/(^[a-z]+)([0-9]+)@((gmail)|(mail)).((com)|(in))$/;
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        isPassword(value) {
          if (
            !(
              /[a-z]/.test(value) &&
              /[A-Z]/.test(value) &&
              /[0-9]/.test(value) &&
              /^[0-9A-Za-z]/.test(value) &&
              value.length >= 8
            )
          ) {
            throw new Error(
              "Password Must contain atleast one (small,caps,number,symbol) and length of 8 or more"
            );
          }
        },
      },
    },
  },
  {
    // classMethods: {
    //   getHash: function (input) {
    // return crypto
    //   .createHash("sha256")
    //   .update(JSON.stringify(input))
    //   .digest("hex");
    //   },
    //   hi: function () {
    //     console.log("HI");
    //   },
    // },
    hooks: {
      beforeCreate(value) {
        value.password = crypto
          .createHash("sha256")
          .update(JSON.stringify(value.password))
          .digest("hex");
      },
      // beforeUpdate(value){
      //   value.password = bcrypt.hashSync(value.password, 10);
      //   console.log("\x1b[32m"+ "Update"+"\x1b[37m");
      //  },
      afterCreate:async (value)=>{
        //insert new record's id into users table's typeid and type as normal
        console.log("After "+JSON.stringify(value)+" Userid : "+value.userId);
        await users.create({typeId:value.userId,type:"normal"})
      }
    },
    
    timestamps: false,
    createdAt: false,
  }
);

// author.addHook("beforeUpdate", (author,data) => {
//   console.log("\x1b[32m"+ "Update"+"\x1b[37m");
//  // value.password = bcrypt.hashSync(value.password, 10);
// });
// author.hi();
exports.author = author;
