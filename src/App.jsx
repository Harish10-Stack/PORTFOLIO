import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headpage from './Components/Headpage'
import emailjs from 'emailjs-com';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headpage/>
       
    </>
  )
}

export default App
