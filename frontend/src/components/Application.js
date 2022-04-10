import React from "react";
import './Application.css'
import { useNavigate } from "react-router-dom";
const Application = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="title">Application Form</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input type="text" placeholder="Enter your address" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your phone number" required />
              </div>
              <div className="input-box">
                <span className="details">Aadhar Number</span>
                <input type="text" placeholder="Enter your aadhar number" required />
              </div>
              <div className="input-box">
                <span className="details">PAN Number</span>
                <input type="text" placeholder="Enter your pan number" required />
              </div>
              <div className="input-box">
                <span className="details">Age</span>
                <input type="text" placeholder="Enter your age" required />
              </div>
              <div className="input-box">
                <span className="details">Profession</span>
                <input type="text" placeholder="Enter your proffession" required/>
              </div>
              <div className="input-box">
                <span className="details">Amount</span>
                <input type="text" placeholder="Enter Amount" required/>
              </div>
              <div className="input-box">
                <span className="details">Rate</span>
                <input type="text" placeholder="Enter Rate" required/>
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one" />
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two" />
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three" />
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" defaultValue="Register" onClick={()=>navigate("/profile")}/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Application;
