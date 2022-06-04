import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeContext from "../../Context/Home/HomeContext";

const OfferItem = (props) => {
  const { item,getLoans } = props;
  let navigate=useNavigate();
  const context = useContext(HomeContext)
  const {getLenderDetails,lenderDetails}=context;
  const handleAccept=async ()=>{
    const response=await fetch(`http://localhost:5000/api/application/offeraccepted/${item._id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MTg2MTUyMDE5NTZkYzQ5Y2VlZTEyIn0sImlhdCI6MTY0OTUwOTkwOX0.v3vDVeEvSoximC-CF7j8GkBvV81TAW-dv8NeQcTZwM8'
      },
      body:JSON.stringify({interest:item.interest})
    });
    getLoans(item.loanApp)
    alert('Offer Accepted!!');
    navigate('/applications')
  }
  const handleReject=async ()=>{
    const response=await fetch(`http://localhost:5000/api/loanoffer/deleteOffer/${item._id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MTg2MTUyMDE5NTZkYzQ5Y2VlZTEyIn0sImlhdCI6MTY0OTUwOTkwOX0.v3vDVeEvSoximC-CF7j8GkBvV81TAW-dv8NeQcTZwM8'
      }
    });
    getLoans(item.loanApp)
    alert('Offer Rejected!!');
}
  useEffect(() => {
    getLenderDetails(item.loanApp,0);
    
  }, [])
  
  return (
    <div className="lender-bio">
        <p className="lender-bioItem">Name: {lenderDetails.name}</p>
        <p className="lender-bioItem">Phone No.: {lenderDetails.phone_no}</p>
        <p className="lender-bioItem">Email: {lenderDetails.email}</p>
        <p className="lender-bioItem">Address: {lenderDetails.address}</p>
        <p className="lender-bioItem">Profession: {lenderDetails.profession}</p>
        <h5 style={{marginTop:"0"}} className="lender-bioItem">Interest Rate Offered: {item.interest}</h5>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>Reject</button>
      </div>
  );
};

export default OfferItem;
