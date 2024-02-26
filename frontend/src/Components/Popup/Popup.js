import React, { useState } from 'react'
import './Popup.css'
import { Element } from 'react-scroll';
export const Popup = () => 
{
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [mobno,setmobno]=useState();
  return(
    <Element className='' id='joinme'> 
    <div className='popup'>
    <div className='popup-inner'>
        <div className='join-me'>Join Me</div>
         <form className='popup_form'>
            <div className='inputs'>
                <div>
            <input type='text'
                   value={name}
                   placeholder='Name'
                   onChange={(e)=>{setname(e.target.value)}}/>
                   </div>
                <div>
            <input type='email'
                   value={email}
                   placeholder='Email Id'
                   onChange={(e)=>{setemail(e.target.value)}}/> 
                </div>
                <div>
            <input type='number'
                   value={mobno}
                   placeholder='Mobile No'
                   onChange={(e)=>{setmobno(e.target.value)}}/> 
                </div>
            </div>  
            <div className='buttons'>
            <button className='btn-1' onSubmit={()=>{alert("Joined")}}>Submit</button> 
            </div>    
         </form>
    </div>
</div>
</Element>
  )
}
