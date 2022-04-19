import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
     <Router>
       <Routes>
       <Route path="login" element={<Login/>} />
       <Route path="signup" element={<Signup/>} />
       <Route path="/" element={<Home/>} />
       </Routes>
     </Router>
    </>
  )
}

export default App