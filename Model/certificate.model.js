const {DataTypes} = require("sequelize")
const db = require("../Config/db.config")

module.exports = db.define("Test", {
     
  completionDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },},
{timestamp: true})

db.sync({alter: true})


