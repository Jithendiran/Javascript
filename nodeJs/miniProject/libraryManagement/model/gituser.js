const { Sequelize } = require("sequelize");
const { sequelize } = require("./dataBase");

const gitUser = sequelize.define('gituser',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING,

    }
},
{
  timestamps: false,
  createdAt: false,
  hooks:{
    afterCreate:async (value)=>{
        //insert new record's id into users table's typeid and type as normal
        console.log("After "+JSON.stringify(value)+" Userid : "+value.userId);
        await users.create({typeId:value.id,type:"gitHub"})
      }
  }
})

module.exports = gitUser