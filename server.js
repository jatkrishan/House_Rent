//require files another folder
const dbConfig = require("./Config/server")
const sequlizeIncetance = require("./Config/db.config")


//Require Steps
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false})); 

app.use(express.json());


require("./Routes/user.route")(app)
require("./Routes/auth.route")(app)


app.listen(dbConfig.PORT, () => {
    console.log("Application is started " , dbConfig.PORT)
})