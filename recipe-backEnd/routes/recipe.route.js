let express = require("express");
const { recipeController } = require("../controllers");
const { isLogin, isRestrict } = require("../middleware/auth");
let route = express.Router();

route.post("/addrecipe", recipeController.createRecipe);
route.get("/getrecipe", recipeController.getRecipe);
route.get("/myrecipes/:id", recipeController.getmyRecipes);

module.exports = route;
