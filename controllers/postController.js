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

exports.save = async (req, res, next) => {
  try {
    validationHandler(req);
    // let post = new Post(req.body);
    // post = await post.save();
    res.send({message: ` my name is ${req.body.name}`})
  } catch (error) {
    next(error)
  }
}
