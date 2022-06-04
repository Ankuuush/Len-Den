import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HomeContext from "../Context/Home/HomeContext";
import "./LoanItem.css";

const LoanItem = (props) => {
  const navigate = useNavigate();
  const { item, check } = props;
  const homeContext = useContext(HomeContext);
  const { getLenderDetails, getCurrentItem } = homeContext;
  
  const handleClick = () => {
    if(check==0){
      navigate('/offers',{state:item})
    }
    else if (check===1) {
      getLenderDetails(item._id, 2);
      navigate("/repayeddetails",{state:item});
    }
    else if(check===2){
      navigate('/borrowerDetails',{state:item});
    }
  };
  return (
    <div className="card-currentApp" onClick={handleClick}>
      <div className="section">
        <p className="currentApp-p">Loan Type: {item.loanType}</p>
        <p className="currentApp-p">Amount: Rs. {item.amount}</p>
        <p className="currentApp-p">Period: {item.period}years</p>
        <p className="currentApp-p">Salary: Rs. {item.currentSalary}</p>
      </div>
      <h5 className="guarantor-details">Guarantor Details</h5>
      <div className="section">
        <p className="currentApp-p">Name: {item.guarantor}</p>
        <p className="currentApp-p">Relationship: {item.guarantorRelation}</p>
        <p className="currentApp-p">Phone No.: {item.guarantorPhone}</p>
        <p className="currentApp-p">Address: {item.guarantorAddress}</p>
      </div>
    </div>
  );
};

export default LoanItem;