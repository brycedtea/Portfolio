import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './reviews.css'


const Reviews = () => {

  const [userName, setUserName] = useState('')
  const [userComment, setUserComment] = useState('')
  const [newUserComment, setNewUserComment] = useState('')
  const [commentList, setCommentList] = useState([])

  useEffect(()=> {
    Axios.get('https://brycedtea-portfolio.herokuapp.com/read').then((response)=> {
      setCommentList(response.data)
      console.log(response)
    })
  }, []);

  const addToList = () => {
    Axios.post('https://brycedtea-portfolio.herokuapp.com/insert', {
      userName: userName, 
      userComment: userComment,
    }).then(()=> {
      setCommentList([...commentList, { userName: userName, userComment: userComment}]);
    });
  };

  const updateComment = (id)=> {
    Axios.put('https://brycedtea-portfolio.herokuapp.com/update', {
      id: id, 
      newUserComment: newUserComment,
    }).then(()=> {
      setCommentList(commentList.map((val)=> {
        return val._id == id ? {_id: id, userName: val.userName, userComment: newUserComment} : val;
      }))
    });
  };

  const deleteComment = (id)=> {
    Axios.delete(`https://brycedtea-portfolio.herokuapp.com/delete/${id}`).then(()=> {
      setCommentList(
        commentList.filter((val)=> {
          return val._id != id;
        })
      );
    });
  };



  return (
    <section id='reviews' className='reviews-wrapper text-center'>
      <h2 className='review-title py-5'>Reviews</h2>
      <h3>Leave a Review</h3>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input id="name-field" type="text" placeholder="First name" onChange={(event) => {setUserName(event.target.value)}}/>
        </div>
        <div className="form-group">
          <label>Review:</label>
          <textarea id="review-field" type="text" placeholder="Leave your comment here" onChange={(event) => {setUserComment(event.target.value)}}></textarea>
        </div>
          <button id='review-button' type="button" class="btn btn-primary" onClick={addToList}>Leave a Review</button>
      </form>

    
      {commentList.map((val, key)=> {
        return (
          <div key={key} className="card" id='card'>
          <img></img>
            <div className="card-body">
            <h5 className="card-title">{val.userName}</h5>
            <p className="card-text">{val.userComment}</p>
            <input type="text" placeholder="Edit Comment" onChange={(event) => {setNewUserComment(event.target.value)}}/>
            <button id="update-button" class="btn btn-secondary" onClick={()=> updateComment(val._id)}>Update</button>
            <button id="delete-button" class="btn btn-danger" onClick={()=> deleteComment(val._id)}>Delete</button>
            </div>
          </div>
        );
      })}
      
    </section>
  )
}

export default Reviews



