import React from 'react'
import './experience.css'
import { experience } from './data'

const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <div className='d-flex justify-content-center my-5'>
        <h2>Work Experience</h2>
      </div>
      <div className='container experience-wrapper'>
        {experience.map((item, key) => {
          if (item.id % 2 != 1) {
            return (
              <div className='timeline-block timeline-block-right' key={key}>
                <div className='marker'></div>
                <div className='timeline-content'>
                  <h3>{item.title}</h3>
                  <h4>{item.workplace}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          } else {
            return (
              <div className='timeline-block timeline-block-left' key={key}>
                <div className='marker'></div>
                <div className='timeline-content'>
                  <h3>{item.title}</h3>
                  <h4>{item.workplace}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Experience