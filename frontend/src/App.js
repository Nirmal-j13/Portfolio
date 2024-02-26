import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { TopContainer } from './Components/TopContainer/TopContainer';
import { Skill } from './Components/Skill/Skill';
import { ProjectsContainer } from './Components/ProjectsContainer/ProjectsContainer';
import { CertificationContainer } from './Components/CertificationContainer/CertificationContainer';
import { Contacts } from './Components/Contacts/Contacts';
import { Popup } from './Components/Popup/Popup';
function App() {
  return (
     <>
      <Header/>
      <TopContainer/>
      <Skill/>
      <ProjectsContainer/>
      <CertificationContainer/>
      <Contacts/>
      <Popup/>
     </>
  );
}

export default App;
