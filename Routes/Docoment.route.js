const verifyTokenAndValidRole = require("../Middleware/userVerification")
const docomentController = require("../Controller/Docoment.controller")

module.exports = function (app){

   app.post("/Course/api/v1/docoment/:docomentId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdminAndAcademy], docomentController.createDocoment)
   app.get("/Course/api/v1/docoment/admin", [verifyTokenAndValidRole.isValidUser], docomentController.getAllDocoment)
   app.get("/Course/api/v1/docoment/admin/:docomentId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], docomentController.getDocomentById)
   app.put("/Course/api/v1/docoment/admin/:docomentId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], docomentController.updateDocomentById)
   app.delete("/Course/api/v1/docoment/admin/:docomentId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], docomentController.destroyDocomentById)

}