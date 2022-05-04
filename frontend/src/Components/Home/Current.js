import React from 'react'
import './Current.css'
const Current = () => {
    return (
        <div className="currentBody">
            <h1> Current Loans</h1>
            <div className="loancard-current">
                <div className="card-current-title">
                    <p>Type</p>
                    <p>Amount</p>
                    <p>Interest</p>
                    <p>Period</p>
                </div>
                <div className="card-current">
                    <p>Education Loan</p>
                    <p>Rs. 100000</p>
                    <p>5%</p>
                    <p>3years</p>
                </div>
                <div className="card-current">
                    <p>Education Loan</p>
                    <p>Rs. 100000</p>
                    <p>5%</p>
                    <p>3years</p>
                </div>
                <div className="card-current">
                    <p>Education Loan</p>
                    <p>Rs. 100000</p>
                    <p>5%</p>
                    <p>3years</p>
                </div>
            </div>
        </div>
    )
}

export default Current