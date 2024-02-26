import React from 'react'
import { Element } from 'react-scroll'
import "./TopContainer.css"
import { TopContent } from '../TopContent/TopContent'
import { Popup } from '../Popup/Popup'
export const  TopContainer = () => 
{
  return (
     <Element name='about' className='topcontainer'>
         <TopContent/>
     </Element>
  )
}
