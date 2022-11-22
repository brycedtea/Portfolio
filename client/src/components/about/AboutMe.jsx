import React from 'react';
import './about.css'
import PicOfMe from './chihuaha.png';

const AboutMe = () => {
  return (
    <section id='about' className='container py-5 about-wrapper'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap'>
            <img
              className='profile-img'
              src={PicOfMe}
              alt='Author'
            />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h2 className='text-uppercase about-heading'>About Me</h2>
          <p className='about-info'>
          I am an established IT professional with a passion for programming. I previously worked as a Level 2 IT Support Engineer for an autonomous car company while attending a coding bootcamp in the evenings. I recently earned a professional certificate in Full-Stack Software Development from Kansas State University. I am recognized for my ability to work in fast-paced environments, as well as my ability to collaborate effectively with a team. Additionally, I have a proven track record in developing innovative solutions to complex problems. I am looking forward to leveraging my skills to make an immediate contribution to your team. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe