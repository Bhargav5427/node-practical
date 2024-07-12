let express = require("express");
const { commentsController } = require("../controllers");
let route = express.Router();

route.post("/addcomment", commentsController.addComments);
route.get("/getcomment", commentsController.getComments);

module.exports = route;
