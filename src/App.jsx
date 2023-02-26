import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './app.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
    <Navbar />
   </div>
  )
}

export default App
