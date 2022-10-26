import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <section id='contact' className='contact-wrapper'>
      <h2 className='py-5 text-center'>Contact</h2>
      <div className='container'>
        <div className='text-center'>
            <h3>Email</h3>
            <a href="mailto: brycealvir@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        <div className='text-center'>
            <h3>GitHub</h3> 
            <a href="https://github.com/brycedtea" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact

