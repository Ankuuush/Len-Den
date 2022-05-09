import React, { useContext,useEffect } from 'react'
import Profile from './Profile'
import Stats from './Stats'
import Current from './Current'
import HomeContext from '../../Context/Home/HomeContext'

const Home = () => {
  const homecontext = useContext(HomeContext)
    const {getLoan,totalBorrowed,totalLent,onTime,defaulted,noBorrowed,noLent,currentLoans}=homecontext
    useEffect( () => {
      getLoan();
    }, [])
  return (
    <div style={{marginLeft:"5em",marginRight:"5em"}}>
    <Profile/>
    <Stats totalBorrowed={totalBorrowed} totalLent={totalLent} onTime={onTime} defaulted={defaulted} noBorrowed={noBorrowed} noLent={noLent} />
    <Current currentLoans={currentLoans}/>
    </div>
  )
}

export default Home 