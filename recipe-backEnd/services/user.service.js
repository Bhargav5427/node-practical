const { userSchema } = require("../models");

let getUser = () => {
  return userSchema.find();
};
let login = (email) => {
  return userSchema.findOne({ email });
};
let register = (body) => {
  return userSchema.create(body);
};

let duplicateUser = (email) => {
  return userSchema.findOne({ email });
};

module.exports = { getUser, login, register, duplicateUser };
