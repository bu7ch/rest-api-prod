const Post = require("../models/post");
const validationHandler = require("../validations/validationHandler");

exports.index = async (req, res, next) => {
  try {
    const posts = await Post.find({
      user: { $in: [...req.user.following, req.user.id] },
    })
      .populate("user")
      .sort({ createAt: -1 });

    res.send(posts);
  } catch (error) {
    next(error);
  }
};
exports.show = async (req, res, next) => {
  try {
    const post = await (
      await Post.findOne({
        _id: req.params.id,
        user: { $in: [...req.user.following, req.user.id] },
      })
    ).populated("user");
    res.send(post);
  } catch (error) {
    next(error);
  }
};

exports.store = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = new Post();
    post.description = req.body.description;
    post.image = req.file.filename;
    post.user = req.user;
    post = await post.save();
    res.send(post);
  } catch (error) {
    next(error);
  }
};
