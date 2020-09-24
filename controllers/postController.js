const Post = require("../models/post");
const validationHandler = require("../validations/validationHandler")

exports.index = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    next(error);
  }
};
exports.show = async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.send(post);
  } catch (error) {
    next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = new Post();
    post.description = req.body.description
    post = await post.save();
    res.send(post)
  } catch (error) {
    next(error)
  }
}
