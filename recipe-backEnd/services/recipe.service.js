const { recipeSchema } = require("../models");

let getRecipe = () => {
  return recipeSchema.find().populate([
    {
      path: "createdBy",
      select: "email",
    },
    {
      path: "comments",
    },
  ]);
};

let addRecipe = (body) => {
  return recipeSchema.create(body);
};
let getmyRecipe = (id) => {
  return recipeSchema.find({ createdBy: id }).populate([
    {
      path: "createdBy",
      select: "email",
    },
    {
      path: "comments",
    },
  ]);
};

module.exports = { getRecipe, addRecipe, getmyRecipe };
