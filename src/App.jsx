import React from 'react'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import StickyLinks from './components/StickyLinks'
import Work from './components/Work'

function App() {

  return (
   <div className='app bg-colBasic'>
    <Navbar />
    <StickyLinks/>
    <Home/>
    <About />
    <Skills />
    <Work />
   </div>
  )
}

export default App
