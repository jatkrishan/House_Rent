const validactionVerify = require("../Middleware/verifactionValidaction")
const authController = require("../Controller/auth.controller")

module.exports = function(app){
    app.post("/auth/api/v1/signup", [validactionVerify.validactionVerify], authController.signup)
    app.post("/auth/api/v1/signin", authController.signin)
}