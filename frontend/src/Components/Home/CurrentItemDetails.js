import React, { useContext, useEffect } from 'react'
import HomeContext from '../../Context/Home/HomeContext'
import './CurrentItemDetails.css'
const CurrentItemDetails = () => {
  const homeContext = useContext(HomeContext)
  const {lenderDetails,currLoanItem}=homeContext

  
  return (
      <>
      {/* <div className="container-lender-details"> */}
      <div className="lender-bio">
          <p className="lender-bioItem">Name: {lenderDetails.name}</p>
          <p className="lender-bioItem">Phone No.: {lenderDetails.phone_no}</p>
          <p className="lender-bioItem">Email: {lenderDetails.email}</p>
          <p className="lender-bioItem">Address: {lenderDetails.address}</p>
          <p className="lender-bioItem">Profession: {lenderDetails.profession}</p>
        </div>

        <div className="contract-details">
          <p className="contract-details-item">Loan Type: {currLoanItem.loanType}</p>
          <p className="contract-details-item">Amount: Rs.{currLoanItem.amount}</p>
          <p className="contract-details-item">Interest Rate: {currLoanItem.interest}%</p>
          <p className="contract-details-item">Date Borrowed: {currLoanItem.dateBorrowed}</p>
          <p className="contract-details-item">Period: {currLoanItem.period} years</p>
          <p className="contract-details-item">Due Date: 78/13/23</p>
        </div>
      {/* </div> */}
      </>
  )
}

export default CurrentItemDetails