const {DataTypes} = require("sequelize")
const db = require("../Config/db.config")

module.exports = db.define("Docoment", {
    id: {
        type: DataTypes.BIGINT,
        autoincrement: true,
        notNull: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.BIGINT,
        nitNull: true
    },
    docomentUrl: {
        type: DataTypes.STRING,
        notNull: true
    }


}, {timestamps: true})

db.sync({alter})



