const { Sequelize } = require("sequelize");
const { sequelize } = require("./dataBase");

const users = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
       primaryKey:true,
       autoIncrement:true
    },
    typeId:{
        type: Sequelize.INTEGER,

    },
    type:{
        type: Sequelize.STRING,
    }
},
{
  timestamps: false,
  createdAt: false,
})

module.exports = users