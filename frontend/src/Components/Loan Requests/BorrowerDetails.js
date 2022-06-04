import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LRequestContext from "../../Context/Loan Request/LRequestContext";
import Current from "../Home/Current";
import Profile from "../Home/Profile";
import Stats from "../Home/Stats";

const BorrowerDetails = () => {
  const context = useContext(LRequestContext);
  const navigate=useNavigate();
  const {
    totalBorrowed,
    totalLent,
    onTime,
    defaulted,
    noBorrowed,
    noLent,
    currentLoans,
    userDetails,
    getLoan,
    getUserDetails,
  } = context;
  const location=useLocation();

  const handleClick = () => {
    navigate("/termsconditions",{state:location.state});
  };
  useEffect(() => {
    getLoan(location.state._id);
    getUserDetails(location.state._id);
  }, []);

  return (
    <div
      style={{ marginLeft: "5em", marginRight: "5em", position: "relative" }}
    >
      <div style={{width:"100%",height:"2em",marginTop:"2em"}}><button
        type="button"
        onClick={handleClick}
        style={{ position: "absolute", right: "0"}}
      >
        Proceed
      </button></div>
      <Profile userDetails={userDetails} />
      <Stats
        totalBorrowed={totalBorrowed}
        totalLent={totalLent}
        onTime={onTime}
        defaulted={defaulted}
        noBorrowed={noBorrowed}
        noLent={noLent}
      />
      <Current currentLoans={currentLoans} />
    </div>
  );
};

export default BorrowerDetails;
