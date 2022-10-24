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
            <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className='text-center'>
            <h3>GitHub</h3> 
            <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
    </section>
  )
}

export default Contact

