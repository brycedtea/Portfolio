const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const CommentModel = require("./models/Comment")

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://newuser:a1Buqr8ws0uuCLng@crud.fnkrnu4.mongodb.net/comments?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.post('/insert', async (req, res)=> {
    const userName = req.body.userName
    const userComment = req.body.userComment

    const comment = new CommentModel({userName: userName, userComment: userComment})

    try {
        await comment.save();
        res.send("inserted data");
    } catch(err) {
        console.log(err);
    }
});


app.listen(3001, ()=> {
    console.log('Server running on port 3001')
});