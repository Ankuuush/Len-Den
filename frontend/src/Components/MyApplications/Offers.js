import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OfferItem from "./OfferItem";

const Offers = () => {
  let location = useLocation();
  const [myOffers, setMyOffers] = useState([]);
  const getLoans = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/loanoffer/myoffers/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ODBhN2ZiNjY1NzYxNzdjMjVkYTMxIn0sImlhdCI6MTY1MTg1NjI5MH0.-QbEl_9Mi4KdFgCBk75rS29CnzM7uIdhBmJyQDnzdxs",
        },
      }
    );
    const json = await response.json();
    setMyOffers(json);
  };
  useEffect(() => {
    getLoans(location.state._id);
  }, []);

  return (
    <div className="container">
    <h1>Loans Offers</h1>
    <div >
        {myOffers.length>0? myOffers.map((item)=>{
            return <OfferItem item={item} key={item._id} getLoans={getLoans}/>
        }):<h5>No Offers Received</h5>}
    </div>
</div>
  );
};

export default Offers;
