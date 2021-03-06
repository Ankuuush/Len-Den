import moment from "moment";
import React, { useState } from "react";
import LRequestContext from "./LRequestContext";

const LRequestState = (props) => {
  const [borrowed, setBorrowed] = useState([]);
  const [lent, setLent] = useState([]);
  const [totalBorrowed, setTotalBorrowed] = useState("");
  const [totalLent, setTotalLent] = useState("");
  const [onTime, setOnTime] = useState("");
  const [defaulted, setDefaulted] = useState("");
  const [noBorrowed, setNoBorrowed] = useState("");
  const [noLent, setNoLent] = useState("");
  const [currentLoans, setCurrentLoans] = useState([]);
  const [userDetails, setUserDetails] = useState("");
  const [lenderDetails, setLenderDetails] = useState("");
  const [currLoanItem, setCurrLoanItem] = useState([]);

  const host = "http://localhost:5000";

  const getUserDetails = async (id) => {
    const response = await fetch(`${host}/api/auth/userDetails/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MTg2MTUyMDE5NTZkYzQ5Y2VlZTEyIn0sImlhdCI6MTY0OTUwOTkwOX0.v3vDVeEvSoximC-CF7j8GkBvV81TAW-dv8NeQcTZwM8",
      },
    });
    const json = await response.json();
    setUserDetails(json);
  };

  //Lender Details
  const getLenderDetails = async (id, state) => {
    const response = await fetch(`${host}/api/auth/lenderDetails/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MTg2MTUyMDE5NTZkYzQ5Y2VlZTEyIn0sImlhdCI6MTY0OTUwOTkwOX0.v3vDVeEvSoximC-CF7j8GkBvV81TAW-dv8NeQcTZwM8",
      },
      body: JSON.stringify({ state: state }),
    });
    const json = await response.json();
    setLenderDetails(json);
  };

  const getLoan = async (id) => {
    const borrowResponse = await fetch(
      `${host}/api/application/fetchmyloan/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MTg2MTUyMDE5NTZkYzQ5Y2VlZTEyIn0sImlhdCI6MTY0OTUwOTkwOX0.v3vDVeEvSoximC-CF7j8GkBvV81TAW-dv8NeQcTZwM8",
        },
      }
    );

    const lentResponse = await fetch(
      `${host}/api/loanoffer/fetchacceptedoffer/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ODBhN2ZiNjY1NzYxNzdjMjVkYTMxIn0sImlhdCI6MTY1MTg1NjI5MH0.-QbEl_9Mi4KdFgCBk75rS29CnzM7uIdhBmJyQDnzdxs",
        },
      }
    );
    const currentLoansResponse = await fetch(
      `${host}/api/application/fetchcurrloan/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ODBhN2ZiNjY1NzYxNzdjMjVkYTMxIn0sImlhdCI6MTY1MTg1NjI5MH0.-QbEl_9Mi4KdFgCBk75rS29CnzM7uIdhBmJyQDnzdxs",
        },
      }
    );
    const currentLoansInit = await currentLoansResponse.json();
    setCurrentLoans(currentLoansInit);
    const borrowJson = await borrowResponse.json();
    setBorrowed(borrowJson);
    const lentJson = await lentResponse.json();
    setLent(lentJson);
    setLoan(borrowJson, lentJson);
  };

  const setLoan = (borrowJson, lentJson) => {
    let amountBorrowed = 0;
    let countB = 0;
    let totalCount = 0;
    let ontime = 0;

    for (let index = 0; index < borrowJson.length; index++) {
      const element = borrowJson[index];
      amountBorrowed += element.amount;
      countB++;
      const dateB = moment(element.dateBorrowed).format("YYYY-MM-DD");
      const dueDate = moment(dateB)
        .add(element.period, "y")
        .format("YYYY-MM-DD");

      if (element.dateRepayed) {
        totalCount++;
        const dateR = moment(element.dateRepayed).format("YYYY-MM-DD");
        if (dateR <= dueDate) ontime++;
      } else if (moment().format("YYYY-MM-DD") > dueDate) totalCount++;
    }
    setTotalBorrowed(amountBorrowed);
    setNoBorrowed(countB);
    let onTimePercent = (ontime / totalCount) * 100;
    onTimePercent=Math.round(onTimePercent)
    setOnTime(onTimePercent);
    let defaultedPercent = ((totalCount - ontime) / totalCount) * 100;
    defaultedPercent=Math.round(defaultedPercent);
    setDefaulted(defaultedPercent);

    let amountLent = 0;
    let countL = 0;
    for (let index = 0; index < lentJson.length; index++) {
      const element = lentJson[index];
      amountLent += element.amount;
      countL++;
    }
    setTotalLent(amountLent);
    setNoLent(countL);
  };

  const getCurrentItem = (id) => {
    const item = currentLoans.filter((cl) => cl._id === id);
    setCurrLoanItem(item[0]);
  };
  return (
    <LRequestContext.Provider
      value={{
        getLoan,
        totalBorrowed,
        totalLent,
        onTime,
        defaulted,
        noBorrowed,
        noLent,
        currentLoans,
        getUserDetails,
        userDetails,
        getLenderDetails,
        lenderDetails,
        getCurrentItem,
        currLoanItem,
      }}
    >
      {props.children}
    </LRequestContext.Provider>
  );
};

export default LRequestState;
