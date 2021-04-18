const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema ({
    title: String,
    date: String,
    postBody: String
});

const Posts = mongoose.model("Posts", PostsSchema)
module.exports = Posts;