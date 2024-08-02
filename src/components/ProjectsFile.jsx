import React, { useEffect, useState } from 'react'
import Projects from './Projects'
import ProjectsMedia from './ProjectsMedia'
import UseMediaQuery from './UseMediaQuery'
const ProjectsFile = () => {
  const [size, setSize] = useState(false)
  const isTablet = UseMediaQuery('(max-width: 1024px)');
  const isDesktop = UseMediaQuery('(min-width: 1024px)');
 
  useEffect(()=>{
    document.addEventListener("resize",()=>{
      if(window.innerWidth > 1024){
        setSize(!size)     
      }
      else{
        setSize(!setSize)
      }
    })
  })
  return (
    <div>
     {/* { window.innerWidth < 1024 ?<ProjectsMedia/> :<Projects/> }
      */}
      {isDesktop && <Projects/>}
      {isTablet && <ProjectsMedia/>  }
    </div>
  )
}

export default ProjectsFile
