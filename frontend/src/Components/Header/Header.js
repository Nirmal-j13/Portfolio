import React, { useState } from 'react'
import {Link} from 'react-scroll'
import './Header.css'
export const Header  = () => {
  const [mobile,setmobile]=useState(false);
  const mobilemenubtn=()=>{
     if(mobile==false)
     {
      setmobile(true);
     }
     else 
     {
      setmobile(false);
     }
  }
  return (
    <>
    <div className='Header'> 
         <div className='header__left'>
            <h1><span>C</span>omputer <span>S</span>cience <span>E</span>ngineer</h1>
         </div>
         <div className='header__right'>
           <Link to='about' smooth={true} duration={500}>
            <h4>
                About Me
            </h4>
           </Link>
           <Link to='skills' smooth={true} duration={500}>
            <h4>
                Skills
            </h4>
           </Link>
           <Link to='projects' smooth={true} duration={500}>
            <h4>
                Projects
            </h4>
           </Link>
           <Link to='certifications' smooth={true} duration={500}>
            <h4>
                Certifications
            </h4>
           </Link>
           <Link to='contact' smooth={true} duration={500}>
            <h4>
                Contact
            </h4>
           </Link>
           <Link to='joinme' smooth={true} duration={500} >
            <h4>
                Join me
            </h4>
           </Link>
         </div>

         {mobile?
            <div className='mobile-menu'>
                    <Link to='about' smooth={true} duration={500}>
            <h4>
                About Me
            </h4>
           </Link>
           <Link to='skills' smooth={true} duration={500}>
            <h4>
                Skills
            </h4>
           </Link>
           <Link to='projects' smooth={true} duration={500}>
            <h4>
                Projects
            </h4>
           </Link>
           <Link to='certifications' smooth={true} duration={500}>
            <h4>
                Certifications
            </h4>
           </Link>
           <Link to='contact' smooth={true} duration={500}>
            <h4>
                Contact
            </h4>
           </Link>
           <Link to='joinme' smooth={true} duration={500} >
            <h4>
                Join me
            </h4>
           </Link>
            </div>:""}
         <div className='mobile-header' onClick={mobilemenubtn}> 
                <div className="menu"></div>
                <div className="menu"></div>
                <div className="menu"></div>
         </div>
    </div>
    </>
  )
}
