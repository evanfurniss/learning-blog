const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema ({
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    github: String,
    linkedIn: String
});

const Author = mongoose.model("Author", authorSchema)
module.exports = Author;