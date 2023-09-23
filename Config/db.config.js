
let sequelize = require("sequelize");

let sequelizeInstance =  new sequelize(
    "ecomm_db",
    'root',
    'krishan@8432',
    {
    host:"localhost",
    dialect: 'mysql',
    operatorAliases: false,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})


try{
    sequelizeInstance.authenticate();
    console.log("db connection sucessfull")
} catch(err){
    console.log(`ther is error : ${err}`)
}

module.exports = sequelizeInstance;