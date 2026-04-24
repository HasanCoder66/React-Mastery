import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'


function App() {
  

  return (
  <>
  <Routes>

<Route path='/' element={<HomePage />}/>

<Route path='/signup' element={<SignupPage />}/>
<Route path='/login' element={<LoginPage />}/>

{/* Protected Routes ==> */}

  </Routes>
  </>
  )
}

export default App
