import React from 'react'

const CurrentItem = (props) => {
    const {item}=props
  return (
    <div className="card-current">
                    <p>{item.loanType}</p>
                    <p>{item.amount}</p>
                    <p>{item.interest}</p>
                    <p>{item.dateBorrowed}</p>
                </div>
  )
}

export default CurrentItem