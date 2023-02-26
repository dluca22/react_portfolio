import React, { useState } from 'react'
import './app.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import StickyLinks from './components/StickyLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
    <Navbar />
    <StickyLinks/>
    <Home/>
    <About />
   </div>
  )
}

export default App
