import React, { useState } from "react";
import moment from "moment";
import HomeContext from "./HomeContext";

const HomeState = (props) => {
  const [borrowed, setBorrowed] = useState([]);
  const [lent, setLent] = useState([]);
  const [totalBorrowed, setTotalBorrowed] = useState();
  const [totalLent, setTotalLent] = useState();
  const [onTime, setOnTime] = useState();
  const [defaulted, setDefaulted] = useState();
  const [noBorrowed, setNoBorrowed] = useState();
  const [noLent, setNoLent] = useState();
  const host = "http://localhost:5000";

  const getLoan = async () => {
    const borrowResponse = await fetch(`${host}/api/application/fetchmyloan`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MTg2MTUyMDE5NTZkYzQ5Y2VlZTEyIn0sImlhdCI6MTY0OTUwOTkwOX0.v3vDVeEvSoximC-CF7j8GkBvV81TAW-dv8NeQcTZwM8",
      },
    });

    const lentResponse = await fetch(
      `${host}/api/loanoffer/fetchacceptedoffer`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ODBhN2ZiNjY1NzYxNzdjMjVkYTMxIn0sImlhdCI6MTY1MTg1NjI5MH0.-QbEl_9Mi4KdFgCBk75rS29CnzM7uIdhBmJyQDnzdxs",
        },
      }
    );

    const borrowJson = await borrowResponse.json();
    setBorrowed(borrowJson);
    const lentJson = await lentResponse.json();
    setLent(lentJson);
    setLoan(borrowJson, lentJson);
  };

  const setLoan = (borrowJson, lentJson) => {
    let amountBorrowed = 0;
    let countB=0;
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
    const onTimePercent = (ontime / totalCount) * 100;
    setOnTime(onTimePercent);
    const defaultedPercent = ((totalCount - ontime) / totalCount) * 100;
    setDefaulted(defaultedPercent);

    let amountLent = 0;
    let countL=0;
    for (let index = 0; index < lentJson.length; index++) {
      const element = lentJson[index];
      amountLent += element.amount;
      countL++;
    }
    setTotalLent(amountLent);
    setNoLent(countL)
  };

  return (
    <HomeContext.Provider
      value={{ getLoan, totalBorrowed, totalLent, onTime, defaulted,noBorrowed,noLent}}
    >
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeState;
