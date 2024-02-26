import React from 'react'
import { Projects } from '../Projects/Projects'
import { Element } from 'react-scroll'
import './ProjectsContainer.css'
export const ProjectsContainer = () => {
  const prj = [
    {
      img:'./images/merncrud.png',
      link:'https://mern-crud-vercel-frontend.vercel.app/',
      title:"Library and Admin Management App"
    },
    {
        img:'./images/incomeandexpress.png',
        link:'https://expense-tracker-vercel-frontend.vercel.app/',
        title:"Income and Expense Tracker App"
    }
  ]
  return (
   <Element className='projects' id='projects'>
      <h1>Projects</h1>
      <p>Here are some projects </p>
      <div className='projects__detail'>
        {
          prj.map((p,i)=>{
            return(
              <Projects key={i} img={p.img} title={p.title} link={p.link}/>
            )
          })
        }      
      </div>
   </Element>
  )
}
