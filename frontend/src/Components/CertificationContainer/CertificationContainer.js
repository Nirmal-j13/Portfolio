import React from 'react'
import { Element } from 'react-scroll'
import './CertificationContainer.css'
import { Certifications } from '../Certifications/Certifications'
export const CertificationContainer = () => {
    const certfify=[
        {
          number:1,
          title:"Programming in Java",
          desc:"Cerified from NPTEL platform",
        },
        {
          number:2,
          title:"HTML5 and CSS3 in Advance",
          desc:"Certified from infosysspringboard"
        },
        {
          number:3,
          title:"React.js Web Developer",
          desc:"Certified from infosysspringboard"
        },
        {
          number:4,
          title:"TechA Javascript Certification",
          desc:"Certified from infosysspringboard"
        },
        {
          number:5,
          title:"Problem Solving Skills",
          desc:"Certified from Hackerrank"
        },
        {
          number:6,
          title:"MERN Stack Web Development",
          desc:"Certified from Udemy"
        }
      ]
  return (
    <Element className='certification' id='certifications'>
    <h1>Certifications</h1>
    <div className='certification_content'>
        {
            certfify.map((x,i)=>{
                return(
                <Certifications 
                        key={i} 
                        number={x.number}
                        title={x.title} 
                        desc={x.desc} 
                    />     
            )})
        }
    </div>
    </Element>
  )
}
