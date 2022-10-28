import React from 'react'
import './socials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <section id='socials' className='socials-wrapper'>
      <h2 className='py-5 text-center'>Socials</h2>
      <div>
          <div>
          <a><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
          <div>
          <a><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
      </div>
    </section>
  )
}

export default Socials

