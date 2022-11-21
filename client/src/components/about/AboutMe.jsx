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
          Hello, I am Bryce. I am a dedicated IT professional with a passion for programming. I recently worked as a Level 2 IT Support Engineer for an autonomous car company while also attending a Full Stack Software Development Bootcamp in the evenings. I possess over 3 years of IT support experience and 5 years of customer service experience. I am recognized for my ability to work in fast-paced environments, as well as my ability to collaborate effectively with a team. Additionally, I have a proven track record in developing innovative solutions to complex problems. I am always seeking out opportunities to maximize profitability and performance. I hope to leverage these skills to make an immediate contribution to your team.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe