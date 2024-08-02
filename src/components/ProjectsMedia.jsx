import React from 'react'
import './styles/ProjectMedia.css'
import img from './images/mockups/macbook 3.png'

const ProjectsMedia = () => {
  return (
    <div className='projectCards'>
    <div className='card-container'>
      <div className="card">
        <img src={img} alt="project4" className="card-img-top"/>
        <div className="card-body">
          <div className="description-media">
            <div className="tittle-media"> <b>iNoteBook</b> </div>          

            <ul className="skills-media">
              <li>Reactjs</li>
              <li>Expressjs</li>
              <li>Node.js</li>
              <li>MongoDb</li>
              <li>MERN </li>
            </ul>

            <div className="info-media">A website in which User can store his Notes and access it anytime and also User can add Events ,Update and Delete his Notes,Every
              user should login with credentials to access their notes </div>
          </div>
         </div>
      </div>

      <div className="card"   >
        <img src={img} alt="project4" className="card-img-top" />
        <div className="card-body">
          <div className="description-media">
          <div className="tittle-media"> DailyNews</div>
 
            <ul className="skills-media">
              <li>React.js</li>
              <li>Express.js</li>
              <li> Node.js</li>
              <li>Real-Time API</li>
            </ul>

            <div className="info-media">Daily News is an Website Where one can get access to daily updated News, can read News Category Wise, Can Search for desired
              News and also Designed a user-friendly interface</div>
          </div>
         </div>
      </div>
      <div className="card"   >
        <img src={img} alt="project4" className="card-img-top" />
        <div className="card-body">
          <div className="description-media">
            <div className="tittle-media"> Spotify Data Analysis - DBMS</div>
            <ul className="skills-media">
              <li>Numpy</li>
              <li>MatPlot</li>
              <li>Pandas</li>
              <li>Seaborn</li>
            </ul>
            <div className="info-media">The spotify data was taken from kaggle and used to analyze/visualize in different ways using python libraries</div>
          </div>
         </div>
      </div>
      <div className="card"   >
        <img src={img} alt="project4" className="card-img-top" />
        <div className="card-body">
          <div className="description-media">
            <div className="tittle-media"> Complete Dynamic Weather Website</div>
            <ul className="skills-media">
              <li>Javascript</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Real-Time API</li>
            </ul>
            <div className="info-media"> This will provide the weather of any city and its behaviour using Real-Time API</div>
          </div>
         </div>
      </div>
    </div>
</div>
  )
}

export default ProjectsMedia
