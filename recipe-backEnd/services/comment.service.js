const { commentSchema } = require("../models");

let getComments = () => {
  return commentSchema
    .find()
    .populate([{ path: "createdBy", select:"email" }, { path: "recipe" , select:"title" }]);
};

let addComments = (body) => {
  return commentSchema.create(body);
};

module.exports = { getComments, addComments };
