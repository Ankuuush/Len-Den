import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const [interestRate, setInterestRate] = useState("");
  let location = useLocation();
  let navigate = useNavigate();
  const onChange=(e)=>{
    setInterestRate(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:5000/api/loanoffer/createoffer/${location.state._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ODBhN2ZiNjY1NzYxNzdjMjVkYTMxIn0sImlhdCI6MTY1MTg1NjI5MH0.-QbEl_9Mi4KdFgCBk75rS29CnzM7uIdhBmJyQDnzdxs",
        },
        body: JSON.stringify({ interest: interestRate }),
      }
    );
    alert("Loan Granted!!");
    navigate("/lend");
  };
  const handleDisagree = () => {
    alert("Loan Rejected!!");
    navigate("/lend");
  };
  return (
    <form className="terms-conditions" onSubmit={handleSubmit}>
      <label htmlFor="interestRate">Offer Interest Rate:</label>
      <br />
      <input
        id="interestRate"
        type="text"
        name="interestRate"
        required
        onChange={onChange}
        value={interestRate}
      />
      <h5> Terms and Conditions</h5>
      <p>
        THIS LOAN AGREEMENT(“Agreement”) is made at the place and on the date as
        stated in the schedule 1 hereunder written ( “the Schedule 1”) BETWEEN
        The Borrower described as stated in the Schedule 1 hereinafter referred
        to as “the Borrower” (which expression shall, unless repugnant to the
        context or meaning thereof, be deemed to mean and include his / her /
        its / their respective heirs, administrators, executors, legal
        representatives (where the borrower is an individual / sole proprietor)
        , Successors (where the Borrower is a Company incorporated under the
        Companies Act 1956/2013 or any other body corporate) , the partner(s)
        from time to time of the firm, the survivor(s) of them and their heirs,
        executors administrators, legal representatives and the successors of
        the partner(s) (where the Borrower is a partnership firm) of the First
        part
      </p>
      <p>And</p>
      <p>
        The Person mentioned as Guarantor(s) in Schedule 1 (hereinafter referred
        to as “Guarantor(s)” which expression shall unless it be repugnant to
        the context or meaning thereof, be deemed to mean and include its
        successors and permitted assigns) of the Second Part The Borrower, the
        Guarantor(s) and the Lender shall hereinafter be referred to
        individually as “Party” or collectively as “Parties”.
      </p>
      <p>
        WHEREAS
        <br />
        1. The Lender is engaged in the business of providing finance to a wide
        range of customers including small and medium enterprises. 2. The
        Borrower is engaged in carrying on bonafide business activities as set
        out in Schedule 1. 3. The Borrower is a Major/ Firm / Body Corporate,
        competent to execute this Agreement. The Borrower (In case of a company)
        has taken all necessary corporate approvals and other actions for
        execution of this Agreement and availing this Loan from the Lender; and
        the execution hereof constitutes legal, valid and binding obligations of
        the Borrower; and that there are no suits, actions or proceedings
        against the Borrower pending before any court of law, which might affect
        the Borrower in performance of the obligations hereunder. NOW,
        THEREFORE, THE PARTIES HEREBY AGREE AS UNDER: 1. The Borrower had
        approached the Lender for a Loan amount as stated in Schedule 1 (the
        loan amount hereinafter shall be referred to as ‘the loan’ or “Loan” or
        “Loan Amount”) on the terms, conditions and the purpose as stated /
        contained in this Agreement and / or in the Borrower’s application for
        the loan. The Borrower hereby confirms that the funds are for Business
        purpose. 2. The Lender hereby grants to the Borrower and the Borrower
        agrees to avail from the Lender, a financial assistance of a Loan Amount
        on the terms and conditions contained in this Agreement. The Tenure,
        interest rate (“Interest”) and the schedule of repayment in respect of
        the Loan shall be as specified in Schedule 1 as set out herein or as may
        be amended in accordance with this agreement from time to time. 3. The
        Borrower has requested the Lender to disburse the Loan in the manner
        specified in Schedule 4 hereto. 4. Fees The Borrower agrees to pay to
        the Lender the fees as set out in Schedule 2. The Borrower hereby
        authorises the Lender to deduct these amounts together with applicable
        taxes from the Loan Amount and to pay to the Borrower only the balance
        amount. The Borrower hereby confirms that irrespective of deduction of
        such fees, the obligation of the Borrower to repay to the Lender shall
        be of the entire Loan Amount along with Interest, and other charges
        together with applicable taxes in terms of this Agreement. The fees paid
        / deducted by the Lender is to meet the out of pocket expenses and the
        same is non- refundable / non-adjustable.
      </p>
      <div className="form-button">
        <div className="apply-button">
          <input type="submit" className="input-button" value="Agree" />
        </div>
        <div className="apply-button">
          <input
            type="button"
            className="input-button"
            value="Disagree"
            onClick={handleDisagree}
          />
        </div>
      </div>
    </form>
  );
};

export default TermsAndConditions;
