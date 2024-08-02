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
            <Button text={'Click Here'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
