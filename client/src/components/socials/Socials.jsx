import React from 'react'
import './socials.css'
import instagram from './Instagram-Logo.png'
import linkedin from './LinkedIn-Logo.png'
import discord from './Discord.png'

const Socials = () => {
  return (
    <>
    <section id='socials' className='socials-wrapper'>
      <h2 className='socials-title text-center'>Socials</h2>
      <div className='socials'>
          <div>
          <a href='https://www.instagram.com/brycedtea/?hl=en' target='_blank' rel="noreferrer">
          <img className='icon1' src={instagram} alt='instagram icon'/>
          </a>
          <a href='https://www.linkedin.com/in/bryce-alvir-11b131184/' target='_blank' rel="noreferrer">
          <img className='icon2' src={linkedin} alt='linkedin icon' />
          </a>
          <a href='https://discord.com/users/brycedtea#0054' target='_blank' rel="noreferrer">
          <img className='icon3' src={discord} alt='discord icon' />
          </a>
          </div>
      </div>
    </section>
    </>
  )
}

export default Socials

