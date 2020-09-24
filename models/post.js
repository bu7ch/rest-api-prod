const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
  user: {type: Schema.Types.ObjectId, ref:"user"},
  createdAt: { type: Date, default: Date.now() },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
