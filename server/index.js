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

app.get('/read', async (req, res)=> {
   CommentModel.find({}, (err,result)=> {
    if (err) {
        res.send(err)
    } 
    res.send(result)
   })
});

app.put('/update', async (req, res)=> {
    const newUserComment = req.body.newUserComment;
    const id = req.body.id;

    try {
        await CommentModel.findById(id, (err, updatedComment)=> {
            updatedComment.userComment = newUserComment;
            updatedComment.save();
            
        })
    } catch(err) {
        console.log(err);
    }
    
    res.send('updated');
});

app.delete("/delete/:id", async (req, res)=> {
    const id = req.params.id;
    
    await CommentModel.findByIdAndRemove(id).exec();
    res.send('deleted');
});

app.listen(3001, ()=> {
    console.log('Server running on port 3001')
});