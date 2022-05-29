import React, { useEffect, useState } from "react";
import ApplicationItem from "./ApplicationItem";
import "./MyApplications.css";
const MyApplications = () => {
    const [current, setCurrent] = useState([])
    const [repayed, setRepayed] = useState([])
    const [toggleApplication, setToggleApplication] = useState(false)

    const handleClick = (e) => {
        setToggleApplication(e.target.checked);
    }

    const getData = async () => {
        const repayedResponse = await fetch('http://localhost:5000/api/application/fetchpastloan', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ODBhN2ZiNjY1NzYxNzdjMjVkYTMxIn0sImlhdCI6MTY1MzQ4MDA3Mn0.j9Q2yRYZ-3-__sOu5UfGYMGhIHZiTfbI-dZOLdhYz_4'
            },
        });
        const json = await repayedResponse.json();
        setRepayed(json);

        const currentResponse = await fetch('http://localhost:5000/api/application/fetchcurrapp', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ODBhN2ZiNjY1NzYxNzdjMjVkYTMxIn0sImlhdCI6MTY1MzQ4MDA3Mn0.j9Q2yRYZ-3-__sOu5UfGYMGhIHZiTfbI-dZOLdhYz_4'
            },
        });
        const json2 = await currentResponse.json();
        setCurrent(json2);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="myapplications-container">
            <h2>My Applications</h2>
            <div className="switch-wrap">
                <div className="switch-button">
                    <input className="switch-button-checkbox" type="checkbox" onClick={handleClick} ></input>
                    <label className="switch-button-label" htmlFor="">
                        <span className="switch-button-label-span">Current</span>
                    </label>
                </div>
            </div>
            <div className="items-container">
                {toggleApplication ? repayed.map((repayedItem) =>
                    <ApplicationItem item={repayedItem} key={repayedItem._id} check={true} />) :
                    current.map((currentItem) =>
                        <ApplicationItem item={currentItem} key={currentItem._id} check={false} />)}
            </div>
        </div>
    );
};

export default MyApplications;
