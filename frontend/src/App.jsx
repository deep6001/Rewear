import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './AuthPages/Login'
import Register from './AuthPages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Register />
    </div>
     )
}

export default App
