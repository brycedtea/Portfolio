const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userComment: {
        type: String,
        required: true,
    },
});

const Comment = mongoose.model("Comment", CommentSchema)

module.exports = Comment;