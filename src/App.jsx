import React from 'react'
import './app.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import StickyLinks from './components/StickyLinks'

function App() {

  return (
   <div className='app bg-[#293241]'>
    <Navbar />
    <StickyLinks/>
    <Home/>
    <About />
    <Skills />
   </div>
  )
}

export default App
