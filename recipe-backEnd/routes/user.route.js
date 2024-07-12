let express = require("express");
const { isLogin, isRestrict } = require("../middleware/auth");
const { userController } = require("../controllers");
let route = express.Router();

route.get(
  "/get",
  isLogin,
  isRestrict(["admin", "user"]),
  userController.getUser
);
route.post("/login", userController.login);
route.post("/register", userController.register);

module.exports = route;
