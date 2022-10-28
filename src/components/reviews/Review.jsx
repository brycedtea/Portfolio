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
        Text
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
            <section style="background-color: #e7effd;">
  <div class="container my-5 py-5 text-dark">
    <div class="row d-flex justify-content-center">
      <div class="col-md-11 col-lg-9 col-xl-7">
        <div class="d-flex flex-start mb-4">
          <img class="rounded-circle shadow-1-strong me-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" width="65"
            height="65" />
          <div class="card w-100">
            <div class="card-body p-4">
              <div class="">
                <h5>{val.userName}</h5>
                <p class="small">3 hours ago</p>
                <p>
                {val.userComment}
                </p>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <a href="#!" class="link-muted me-2"><i class="fas fa-thumbs-up me-1"></i>132</a>
                    <a href="#!" class="link-muted"><i class="fas fa-thumbs-down me-1"></i>15</a>
                  </div>
                  <a href="#!" class="link-muted"><i class="fas fa-reply me-1"></i> Reply</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-start">
          <img class="rounded-circle shadow-1-strong me-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" alt="avatar" width="65"
            height="65" />
          <div class="card w-100">
            <div class="card-body p-4">
              <div class="">
                <h5>Mindy Campbell</h5>
                <p class="small">5 hours ago</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                  cumque doloribus dolorum dolor repellat nemo animi at iure autem fuga
                  cupiditate architecto ut quam provident neque, inventore nisi eos quas?
                </p>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <a href="#!" class="link-muted me-2"><i class="fas fa-thumbs-up me-1"></i>158</a>
                    <a href="#!" class="link-muted"><i class="fas fa-thumbs-down me-1"></i>13</a>
                  </div>
                  <a href="#!" class="link-muted"><i class="fas fa-reply me-1"></i> Reply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
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


