 const verifyToken = require("../Middleware/userVerification")
 const userController = require("../Controller/user.controller")

module.exports = function (app){

    app.get("/Course/api/v1/user/:emailId", [verifyToken.isValidUser], userController.getByIdUser)
    app.get("/Course/api/v1/users/admin", [verifyToken.isValidUser, verifyToken.isAdmin], userController.getAllUser)
    app.get("/Course/api/v1/user/admin/:emailId", [verifyToken.isValidUser, verifyToken.isAdmin], userController.getByIdAdmin)
    app.put("/Course/api/v1/user/admin/:emailId", [verifyToken.isValidUser, verifyToken.isAdmin], userController.updateByIdAdmin)
   app.delete("/Course/api/v1/user/admin/:emailId", [verifyToken.isValidUser, verifyToken.isAdmin], userController.deleteByIdAdmin)

}