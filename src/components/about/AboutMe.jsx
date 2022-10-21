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
          <h2 className='text-uppercase about-heading'>about me</h2>
          <p>
            Hello, I am Bryce. I recently worked as a Level 2 IT Support Engineer for an autonomous car company while also attending a Full Stack Software Development Bootcamp in the evenings. I am an IT professional with over 3 years of IT Support and Helpdesk experience with a passion for programming. Additionally, I possess over 5 years of customer service experience. My technical knowledge along with my strong interpersonal skills have allowed me to thrive in any setting. I hope to leverage these skills and provide you with excellent service.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe