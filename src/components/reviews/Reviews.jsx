import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './reviews.css'


const Reviews = () => {

  const [userName, setUserName] = useState('')
  const [userComment, setUserComment] = useState('')
  const [newUserComment, setNewUserComment] = useState('')
  const [commentList, setCommentList] = useState([])

  useEffect(()=> {
    Axios.get('http://localhost:3001/read').then((response)=> {
      setCommentList(response.data)
      console.log(response)
    })
  }, []);

  const addToList = () => {
    Axios.post('http://localhost:3001/insert', {
      userName: userName, 
      userComment: userComment,
    });
  };

  const updateComment = (id)=> {
    Axios.put('http://localhost:3001/update', {
      id: id, 
      newUserComment: newUserComment
    });
  };

  const deleteComment = (id)=> {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };


  return (
    <section id='reviews' className='reviews-wrapper text-center'>
      <h2 className='py-5'>Reviews</h2>
      <h3>Leave a Review</h3>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" onChange={(event) => {setUserName(event.target.value)}}/>
        </div>
        <div className="form-group">
          <label>Review:</label>
          <input type="text" onChange={(event) => {setUserComment(event.target.value)}}/>
        </div>
          <button type="button" class="btn btn-primary" onClick={addToList}>Leave a Review</button>
      </form>

    
      {commentList.map((val, key)=> {
        return (
          <div key={key} className="card" id='card'>
          <img></img>
            <div className="card-body">
            <h5 className="card-title">{val.userName}</h5>
            <p className="card-text">{val.userComment}</p>
            <input type="text" placeholder="Edit Comment" onChange={(event) => {setNewUserComment(event.target.value)}}/>
            <button class="btn btn-secondary" onClick={()=> updateComment(val._id)}>Update</button>
            <button class="btn btn-danger" onClick={()=> deleteComment(val._id)}>Delete</button>
            </div>
          </div>
        );
      })}
      
    </section>
  )
}

export default Reviews



