import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"
export const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>       
            <h1>Mr.Nirmal J</h1>       
           <p>A Professional Web Developer</p>
           <a href='/resume/Nirmal J-Resume.pdf' download="Nirmal J-Resume.pdf">
            <button className='topcontent__downloadbutton'>Download Resume</button>
           </a>
           <Link to="projects" smooth={true} duration={500}>
            <button className='topcontent__workbutton'>My Work</button>
           </Link>
        </div>
    </div>
  )
}
