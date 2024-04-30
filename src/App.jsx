import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Home/>
    <Signup/>
    <Signin/>
      <h1>this app </h1>
    </>
  )
}

export default App
