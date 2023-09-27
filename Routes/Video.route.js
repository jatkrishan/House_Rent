const verifyTokenAndValidRole = require("../Middleware/userVerification")
const videoController = require("../Controller/Video.controller")

module.exports = function (app){

   app.post("/Course/api/v1/video/:videoId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdminAndAcademy], videoController.createVideo)
   app.get("/Course/api/v1/video/admin", [verifyTokenAndValidRole.isValidUser], videoController.getAllVideo )
   app.get("/Course/api/v1/video/admin/:videoId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], videoController.getVideoById)
   app.put("/Course/api/v1/video/admin/:videoId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], videoController.updateVideoById)
   app.delete("/Course/api/v1/video/admin/:videoId", [verifyTokenAndValidRole.isValidUser, verifyTokenAndValidRole.isAdmin], videoController.destroyVideoById)

}