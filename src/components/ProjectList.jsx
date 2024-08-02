import React from 'react'
import './styles/ProjectList.css'
const ProjectList = ({image,tittle,desc,key}) => {
  return (
    <>
      <div className='project-container' key={key}>
        <div className='project-images' >
          <img src={image} alt="" className='img-pro' />
          {/* <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" /> */}
        </div>
        <div className='project-info'>
          <div className='tittle'>{tittle}</div>
          <div className='description'>{desc}</div>
        </div>
      </div>
    </>
  )
}

export default ProjectList
