import React, { useContext, useEffect } from 'react'
import HomeContext from '../../Context/Home/HomeContext'
import './CurrentItemDetails.css'
const CurrentItemDetails = () => {
  const homeContext = useContext(HomeContext)
  const {getLenderDetails,lenderDetails}=homeContext

  useEffect(() => {
    getLenderDetails("62580a7fb66576177c25da31");
  }, [])
  
  return (
      <>
      <div className="container-lender-details">
      <div className="lender-bio">
          <p className="lender-bioItem">Name: {lenderDetails.name}</p>
          <p className="lender-bioItem">Phone No.: {lenderDetails.phone_no}</p>
          <p className="lender-bioItem">Email: {lenderDetails.email}</p>
          <p className="lender-bioItem">Address: {lenderDetails.address}</p>
          <p className="lender-bioItem">Profession: {lenderDetails.profession}</p>
        </div>

        <div className="contract-details">
          <p className="contract-details-item">Name: {lenderDetails.name}</p>
          <p className="contract-details-item">Phone No.: {lenderDetails.phone_no}</p>
          <p className="contract-details-item">Email: {lenderDetails.email}</p>
          <p className="contract-details-item">Address: {lenderDetails.address}</p>
          <p className="contract-details-item">Profession: {lenderDetails.profession}</p>
        </div>
      </div>
      </>
  )
}

export default CurrentItemDetails