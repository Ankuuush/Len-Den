import React from 'react'
import Profile from './Profile'
import Stats from './Stats'
import Current from './Current'
const Home = () => {
  return (
    <div style={{marginLeft:"5em",marginRight:"5em"}}>
    <Profile/>
    <Stats/>
    <Current/>
    </div>
  )
}

export default Home 