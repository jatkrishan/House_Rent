const verifyToken = require("../Middleware/userVerification");
const userController = require("../Controller/User.controller");

module.exports = function (app) {
    app.get(
        "/Course/api/v1/user/:userId",
        [verifyToken.isValidUser],
        userController.getUsrById
    );
    app.get(
        "/Course/api/v1/users/admin",
        [verifyToken.isValidUser, verifyToken.isAdmin],
        userController.getAllUser
    );
    app.get(
        "/Course/api/v1/user/admin/:userId",
        [verifyToken.isValidUser, verifyToken.isAdmin],
        userController.getUserById 
    );
    app.put(
        "/Course/api/v1/user/admin/:userId",
        [verifyToken.isValidUser, verifyToken.isAdmin],
        userController.updateUserById
    );
    app.delete(
        "/Course/api/v1/user/admin/:userId",
        [verifyToken.isValidUser, verifyToken.isAdmin],
        userController.destroyUserById
    );
};
