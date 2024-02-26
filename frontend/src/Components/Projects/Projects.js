import React, { useState } from 'react'
import './Projects.css'
export const Projects = ({img,title,link}) => {
    const [show,setshow]=useState(false);
  return (
    <a href={link} target='_blank'>
      <div className='project' 
           onMouseEnter={()=>{setshow(true)}} 
           onMouseLeave={()=>{setshow(false)}}
      >
          {show ? (
            <div className='project_content'>
                <h4>{title}</h4>
            </div>
          ):(
            <img src={img} alt=''/>
          )}
      </div>
    </a>
  )
}
