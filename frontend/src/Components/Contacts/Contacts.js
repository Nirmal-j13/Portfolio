import React from 'react'
import { Element } from 'react-scroll'
import './Contacts.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export const Contacts = () => {
  return (
    <Element className='contact' id='contact'>
       <h1>Contact</h1>
       <div className='contact_container'>
           <p>
              Email:<span>&nbsp;nirmalnj2003@gmail.com</span>
           </p>
           <p>
              Collegemailid:<span>&nbsp;nirmalj.20cse@sonatech.ac.in</span>
           </p>
           <p>
              Mobile No:<span>&nbsp;9360676438</span>
           </p>
           <div className='contact_icons'>
           <a href='https://www.linkedin.com/in/nirmal-j-9774271b9/'>
                <FaLinkedin/>
            </a>
            <a href='https://github.com/Nirmal-j13'>
                <FaGithub/>
            </a>
           </div>
       </div>
    </Element>
  )
}
