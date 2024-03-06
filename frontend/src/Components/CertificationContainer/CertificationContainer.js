import React from 'react'
import { Element } from 'react-scroll'
import './CertificationContainer.css'
import { Certifications } from '../Certifications/Certifications'
import { Link } from '@mui/material'
export const CertificationContainer = () => {
    const certfify=[
        {
          number:1,
          title:"Programming in Java",
          desc:"Cerified from NPTEL platform",
          link:'https://drive.google.com/file/d/1MbbFgwvRswSd3fusNjfonA9p-1rgqfBU/view?usp=drive_link',
        },
        {
          number:2,
          title:"HTML5 - The Language",
          desc:"Certified from infosysspringboard",
          link:'https://drive.google.com/file/d/1fU67864FdTYeVf7t8ZdAs8_qibh2rdmX/view?usp=drive_link'
        },
        {
          number:3,
          title:"CSS3 - Cascading Style Sheet",
          desc:"Certified from infosysspringboard",
          link:'https://drive.google.com/file/d/1UyrkzwKmdeWG4xHxnN8LpLgWrRJNxqfv/view?usp=drive_link'
        },
        {
          number:4,
          title:"React.js Web Developer",
          desc:"Certified from infosysspringboard",
          link:'https://drive.google.com/file/d/1gO_JjsnugLs_geKIdjjMobXpXr7rkwJ8/view?usp=drive_link'
        },
        {
          number:5,
          title:"TechA Javascript Certification",
          desc:"Certified from infosysspringboard",
          link:'https://drive.google.com/file/d/1JohMHRBB5q-RKgwjpWNVXoKYmt0RLDp4/view?usp=drive_link'
        },
        {
          number:6,
          title:"Problem Solving Skills",
          desc:"Certified from Hackerrank",
          link:'https://drive.google.com/file/d/1gmDhoBPjx3lsuSEu7FwlU_Hw5z0FGwXP/view?usp=drive_link'
        },
        {
          number:7,
          title:"MERN Stack Web Development",
          desc:"Certified from Udemy",
          link:'https://drive.google.com/file/d/1sUMlnlmW1AGC5GCDTcJKdYoyLJa50V-E/view?usp=drive_link'
        }
      ]
  return (
    <Element className='certification' id='certifications'>
    <h1>Certifications</h1>
    <div className='certification_content'>
        {
            certfify.map((x,i)=>{
                return(
                <a  href={x.link} className='links'>
                  <Certifications 
                        key={i} 
                        number={x.number}
                        title={x.title} 
                        desc={x.desc}
                    />     
                </a>
            )})
        }
    </div>
    </Element>
  )
}
