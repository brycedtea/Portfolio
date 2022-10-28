import React, { useState, useEffect } from 'react';
import Axios from 'axios';


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
      <div>
        Leave a review!
      </div>
      <div>
        <label>Name:</label>
        <input type="text" onChange={(event) => {setUserName(event.target.value)}}/>
        <label>Review:</label>
        <input type="text" onChange={(event) => {setUserComment(event.target.value)}}/>
        <button type="button" class="btn btn-primary" onClick={addToList}>Leave a Review</button>
      </div>

      <h2>User Reviews</h2>
      {commentList.map((val, key)=> {
        return (
          <div key={key} className="comments">
            <h5>{val.userName}</h5>
            <h5>{val.userComment}</h5>
            <input type="text" placeholder="Edit Comment" onChange={(event) => {setNewUserComment(event.target.value)}}/>
            <button onClick={()=> updateComment(val._id)}>Update</button>
            <button onClick={()=> deleteComment(val._id)}>Delete</button>
          </div>
        );
      })}
      
    </section>
  )
}

export default Reviews



