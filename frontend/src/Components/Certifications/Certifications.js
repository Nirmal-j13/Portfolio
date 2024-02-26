import React from 'react'
import './Certifications.css'
export const Certifications = ({number,title,desc,style}) => {
  return (
    <div className="certifications" id={"c"+number}>
        <h1>{title}</h1>
        <p>{desc}</p> 
    </div>
  )
}
