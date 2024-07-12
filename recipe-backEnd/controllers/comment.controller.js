const { commentService } = require("../services");

let addComments = async (req, res) => {
  try {
    let body = req.body;
    let result = await commentService.addComments(body);
    if (!result) {
      throw new Error("Somthings went wrong");
    }
    res.status(201).json({
      message: "Comment added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

let getComments = async (req, res) => {
  try {
    let result = await commentService.getComments();
    if (!result) {
      throw new Error("Somthings went wrong");
    }
    res.status(201).json({
      message: "Comment added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = { addComments ,getComments };
