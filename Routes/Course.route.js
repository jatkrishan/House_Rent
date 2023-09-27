const verifyTokenAndValidRole = require("../Middleware/userVerification")
const userController = require("../Controller/Course.controller")

module.exports = function (app){

   app.post("/Course/api/v1/course/:videoId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdminAndAcademy], userController.createCourse)
   app.get("/Course/api/v1/users/admin", [verifyTokenAndValidRole.isValidUser], userController.getAllCourse)
   app.get("/Course/api/v1/course/admin/:videoId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], userController.getCourseById)
   app.put("/Course/api/v1/course/admin/:videoId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], userController.updateCourseById)
   app.delete("/Course/api/v1/course/admin/:videoId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], userController.destroyCourseById)

}