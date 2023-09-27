const verifyTokenAndValidRole = require("../Middleware/userVerification")
const testController = require("../Controller/Test.controller")

module.exports = function (app){

   app.post("/Course/api/v1/test/:testId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdminAndAcademy], testController.createTest)
   app.get("/Course/api/v1/test/admin", [verifyTokenAndValidRole.isValidUser], testController.getAllTest)
   app.get("/Course/api/v1/test/admin/:testId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], testController.getTesttById )
   app.put("/Course/api/v1/test/admin/:testId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], testController.updateTestById)
   app.delete("/Course/api/v1/test/admin/:testId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], testController.destroyTestById)

}