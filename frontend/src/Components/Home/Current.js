import React from 'react'
import './Current.css'
import CurrentItem from './CurrentItem'
const Current = (props) => {
    const {currentLoans}=props
    // console.log(currentLoans)
    const CI=[
        {
            Type:"Home Loan",
            Amount:130230,
            Interest:5,
            DateBorrowed:"25-02-2019",
            _id:1
        },
        {
            Type:"Education Loan",
            Amount:130230,
            Interest:5,
            DateBorrowed:"25-02-2019",
            _id:2
        },
        {
            Type:"Faxx Loan",
            Amount:130230,
            Interest:5,
            DateBorrowed:"25-02-2019",
            _id:3
        }
    ]
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