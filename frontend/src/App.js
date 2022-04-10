import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Application from './components/Application'
import Profile from './components/Profile'
import LendMoney from './components/LendMoney'
import YashTarun from './components/YashTarun'
import User2 from './components/User2'
import User3 from './components/User3'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
     <Router>
       <Routes>
       <Route path="login" element={<Login/>} />
       <Route path="signup" element={<Signup/>} />
       <Route path="/" element={<Home/>} />
       <Route path="profile" element={<Profile/>} />
       <Route path="application" element={<Application/>} />
       <Route path="lendmoney" element={<LendMoney/>} />
       <Route path="yashtarun" element={<YashTarun/>} />
       <Route path="user2" element={<User2/>} />
       <Route path="user3" element={<User3/>} />
       </Routes>
     </Router>
    </>
  )
}

export default App