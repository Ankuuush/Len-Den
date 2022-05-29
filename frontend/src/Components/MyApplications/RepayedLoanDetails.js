import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import HomeContext from "../../Context/Home/HomeContext";

const RepayedLoanDetails = () => {
  const homeContext = useContext(HomeContext);
  let location = useLocation();
  const { lenderDetails } = homeContext;
  return (
    <>
      <div className="lender-bio">
        <p className="lender-bioItem">Name: {lenderDetails.name}</p>
        <p className="lender-bioItem">Phone No.: {lenderDetails.phone_no}</p>
        <p className="lender-bioItem">Email: {lenderDetails.email}</p>
        <p className="lender-bioItem">Address: {lenderDetails.address}</p>
        <p className="lender-bioItem">Profession: {lenderDetails.profession}</p>
      </div>

      <div className="contract-details">
        <p className="contract-details-item">
          Loan Type: {location.state.loanType}
        </p>
        <p className="contract-details-item">
          Amount: Rs.{location.state.amount}
        </p>
        <p className="contract-details-item">
          Interest Rate: {location.state.interest}%
        </p>
        <p className="contract-details-item">
          Current Salary: Rs. {location.state.currentSalary}
        </p>

        <p className="contract-details-item">
          Date Borrowed: {location.state.dateBorrowed}
        </p>
        <p className="contract-details-item">
          Period: {location.state.period} years
        </p>
        <p className="contract-details-item">Date Repayed: {location.state.dateRepayed}</p>
      </div>
    </>
  );
};

export default RepayedLoanDetails;
