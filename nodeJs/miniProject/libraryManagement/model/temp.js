const { Sequelize } = require("sequelize");
const {sequelize} = require("./dataBase")
const author  = require("./author");
const {book} = require("./book");
const users = require("./users")
const {gitUser} = require("./gituser");
const { addAuthor } = require("./model");


users.hasMany(book, {
    onDelete: "CASCADE",
  });

const a = async ()=>{
    try {
      await sequelize.sync()
    } catch (error) {
      console.log("ERRor : "+error);
    }
  }
a()

const add = async()=>{
    console.log(await addAuthor({name:"jidesh",email:"jidesh54@gmail.com",password:"jiJI27@@"}))

}
add()
//if user added to git it's id is added to typeid in users table and type is github

// if user is added to author it's id is added to typeid in users table and type is normal