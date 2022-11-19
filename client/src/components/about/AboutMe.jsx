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
              alt='Picture of Author'
            />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h2 className='text-uppercase about-heading'>About Me</h2>
          <p className='about-info'>
          Hello, I am Bryce. I am a dedicated IT professional with a passion for programming. I recently worked as a Level 2 IT Support Engineer for an autonomous car company while also attending a Full Stack Software Development Bootcamp in the evenings. I possess over 3 years of IT support experience and 5 years of customer service experience. My technical knowledge combined with my strong interpersonal skills have allowed me to adapt to any situation. I hope to leverage these skills and provide you with quality service.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe