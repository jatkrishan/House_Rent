const {DataTypes} = require("sequelize")
const db = require("../Config/db.config")


module.exports  = db.define("User", {
     id: {
         type: DataTypes.BIGINT,
          notNull: true,
          autoIncrement: true,
          primaryKey: true
     },
     name:{
          type: DataTypes.STRING,
          notNull: true
     },
     username:{
          type: DataTypes.STRING,
          notNull: true
          
     },
     role: {
          type: DataTypes.STRING,
          notNull: true,
          defaultValue:"STUDENT",
          isIn:[["ACADEMY", "ADMIN", "STUDENT"]]
     },
     email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true, // Ensure uniqueness of email addresses
     },

     password:{
          type: DataTypes.STRING,
          notNull: true
     }

}, { 
     timestamps:true,
})

 db.sync({alter: true})
