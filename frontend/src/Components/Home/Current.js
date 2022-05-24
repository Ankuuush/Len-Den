import React from 'react'
import './Current.css'
import CurrentItem from './CurrentItem'
const Current = (props) => {
    const {currentLoans}=props
    
    return (
        <div className="currentBody">
            <h1> Current Loans</h1>
            <div className="loancard-current">
                <div className="card-current-title">
                    <p>Type</p>
                    <p>Amount</p>
                    <p>Interest</p>
                    <p>Date Borrowed</p>
                </div>
                {currentLoans.map((item)=>{
                    return <CurrentItem item={item} key={item._id}/>
                })}
            </div>
        </div>
    )
}

export default Current