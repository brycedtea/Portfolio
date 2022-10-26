import React, { useState } from 'react';
import Axios from 'axios';


const Reviews = () => {

  const [userName, setUserName] = useState('')
  const [userComment, setUserComment] = useState('')

  const addToList = () => {
    Axios.post('http://localhost:3001/insert', {
      userName: userName, 
      userComment: userComment,
    });
  };



  return (
    <section id='reviews' className='reviews-wrapper text-center'>
      <h2>Reviews</h2>
      <div>
        Text
      </div>
      <div>
        <label>Name:</label>
        <input type="text" onChange={(event) => {setUserName(event.target.value)}}/>
        <label>Review:</label>
        <input type="text" onChange={(event) => {setUserComment(event.target.value)}}/>
        <button type="button" class="btn btn-primary" onClick={addToList}>Leave a Review</button>
      </div>
      
    </section>
  )
}

export default Reviews
