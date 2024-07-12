const { recipeSchema } = require("../models");
const { recipeService } = require("../services");

exports.createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions } = req.body;
    const body = req.body;
    const user = await recipeService.addRecipe(body);
    res.status(201).json({
      message: "Recipe created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

exports.getmyRecipes = async (req, res) => {
  try {
    const result = await recipeService.getmyRecipe(req.params.id);
    res.status(200).json({
      message: "Recipe fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

exports.getRecipe = async (req, res) => {
  try {
    let result = await recipeService.getRecipe();
    res.status(200).json({
      message: "Recipe fetched successfully",
      data: result,
    });
  } catch (error) {}
};

exports.deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndRemove(req.params.id);
    res.send("Recipe deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};
