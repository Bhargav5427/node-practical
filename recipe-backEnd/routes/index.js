let express = require("express");
let userRoute = require("./user.route");
let recipeRoute = require("./recipe.route");
let commentsRoute = require("./comments.route");
let routes = express.Router();

routes.use("/user", userRoute);
routes.use("/recipe", recipeRoute);
routes.use("/comments", commentsRoute);

module.exports = routes;
