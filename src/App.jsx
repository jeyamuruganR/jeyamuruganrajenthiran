import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Euduction from './pages/Euduction'
import Home from './pages/Home'
import Navication from './pages/Navication'
import Project from './pages/project'
import Skils from './pages/Skils'
import './App.css'
import Error from './pages/Error'
import  './styles/About.css'
import './styles/Project.css'
import './styles/Education.css'
import './styles/Skil.css'

function App() {


  return (
  
    <>
    <Navication/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/education' element={<Euduction/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/skils' element={<Skils/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>

    </>
  )
}

export default App
