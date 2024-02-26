import React from 'react'
import { Element } from 'react-scroll'
import "./Skill.css"
import {LinearProgress} from '@mui/material'
export const Skill = () => {
  return (
    <Element className='skill' id='skills'>
       <div className='skill_image'>
         <img src='/images/cse.svg' alt='' height={250}/>
       </div>
       <div className='skill_text'>
         <h2>Skill Set</h2>
         <div className='skill_set'>
                <h5>Java</h5>
                <div className='skill_slider'>
                 <LinearProgress variant='determinate'value={85}/>
                </div>
         </div>
         <div className='skill_set'>
                <h5>JavaScript</h5>
                <div className='skill_slider'>
                 <LinearProgress variant='determinate'value={85}/>
                </div>
         </div>
         <div className='skill_set'>
                <h5>Html5 and Css3</h5>
                <div className='skill_slider'>
                 <LinearProgress variant='determinate'value={75}/>
                </div>
         </div>
         <div className='skill_set'>
                <h5>React.js</h5>
                <div className='skill_slider'>
                 <LinearProgress variant='determinate'value={80}/>
                </div>
         </div>
         <div className='skill_set'>
                <h5>MongoDB</h5>
                <div className='skill_slider'>
                 <LinearProgress variant='determinate'value={70}/>
                </div>
         </div>
         <div className='skill_set'>
                <h5>Node.js</h5>
                <div className='skill_slider'>
                 <LinearProgress variant='determinate'value={70}/>
                </div>
         </div>

       </div>
    </Element>
  )
}  
