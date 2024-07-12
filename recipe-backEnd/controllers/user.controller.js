const { createToken } = require("../middleware/auth");
const { userService } = require("../services");
const bcrypt = require("bcryptjs");

let getUser = async (req, res) => {
  try {
    let result = await userService.getUser();
    res.status(200).json({
      status: "user get succefully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to get user",
      error: error.message,
    });
  }
};

let register = async (req, res) => {
  try {
    let body = req.body;
    console.log("🚀 ~ register ~ body:", body);

    let duplicate = await userService.duplicateUser(body.email);

    if (duplicate) {
      throw new Error(`this email "${duplicate.email}" already exist`);
    }

    let result = await userService.register(body);

    if (!result) {
      throw new Error("something wents wrong");
    }

    res.status(201).json({
      status: "user created succefully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed to create user",
      error: error.message,
    });
  }
};

let login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("🚀 ~ login ~ password:", password);
    const user = await userService.duplicateUser(email);
    if (!user) {
      throw new Error("pls check email");
    }
    let result = await bcrypt.compare(password, user.password);
    if (!result) {
      throw new Error("Invalid Password");
    }
    let token = createToken({ user });
    res.cookie("token", token);

    res.status(201).json({
      status: "login succefully",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      status: "Failed to login",
      error: error.message,
    });
  }
};

module.exports = { getUser, login, register };
