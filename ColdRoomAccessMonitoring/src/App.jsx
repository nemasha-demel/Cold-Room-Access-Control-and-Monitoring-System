import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logbook from './Components/Logbook.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Logbook/> 
    </>
  )
}

export default App
