const { DataTypes } = require("sequelize")
const db = require("../Config/db.config")

module.exports = db.define("Course", {
    id: {
        type: DataTypes.BIGINT,
        notNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        notNull: true
    },
    courseurl: {
        type: DataTypes.STRING,
        notNull: true,
    }
}, {timesatmps: true})

db.sync({alter: true})


