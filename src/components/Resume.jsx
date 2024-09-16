import React from 'react'
import './styles/Resume.css'
import Button from './Button.jsx'
const Resume = () => {
  return (
    <div className='resume'>
      <div className="text-center">
        <div className="card-header">
          My Resume
        </div>
        <div className="card-body">
          <p className="card-text">Checkout my resume for additional details.</p>
          <div className="resume-button">
          <a className="resume-link" target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/12F2MIYhd7JA7lg41e09ehEKcWgypTJar/view?usp=drive_link">
            <Button text={'Click Here'} />
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
