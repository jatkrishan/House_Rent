const validactionVerify = require("../Middleware/authVerifactionValidaction")
const authController = require("../Controller/Auth.controller")

module.exports = function(app){
    app.post("/auth/api/v1/signup", [validactionVerify.validactionVerify], authController.signup)
    app.post("/auth/api/v1/signin", authController.signin)
}