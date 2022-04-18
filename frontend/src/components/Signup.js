import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", phone_no: "", profession: "", age: "", address: "", gender: "", aadharNum: "", panNum: "" })
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, phone_no: credentials.phone_no, profession: credentials.profession, age: credentials.age, address: credentials.address, gender: credentials.gender, aadharNum: credentials.aadharNum, panNum: credentials.panNum })
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken)
      navigate('/profile')
    }
    else {
      alert(json.errors);
    }
  }
  return (
    <>
      <div className="container">
        <div className="title">Sign Up</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <label htmlFor="name" className="details">Full Name</label>
                <input type="text" id="name" onChange={onChange} value={credentials.name} name="name" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <label htmlFor="email" className="details">Email</label>
                <input type="text" id="email" name="email" placeholder="Enter your email" onChange={onChange} value={credentials.email} required />
              </div>
              <div className="input-box">
                <label htmlFor="profession" className="details">Profession</label>
                <input type="text" id="profession" name="profession" onChange={onChange} value={credentials.profession} placeholder="Enter your username" required />
              </div>
              <div className="input-box">
                <label htmlFor="phone_no" className="details">Phone Number</label>
                <input type="text" id="phone_no" name="phone_no" onChange={onChange} value={credentials.phone_no} placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <label htmlFor="password" className="details">Password</label>
                <input type="password" id="password" name="password" onChange={onChange} value={credentials.password} placeholder="Enter your password" required />
              </div>
              <div className="input-box">
                <label className="details">Confirm Password</label>
                <input
                  type="password" onChange={onChange} 
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="age" className="details">Age</label>
                <input type="text" id="age" name="age" onChange={onChange} value={credentials.age} placeholder="Enter your age" required />
              </div>
              <div className="input-box">
                <label htmlFor="address" className="details">Address</label>
                <input type="text" id="address" name="address" onChange={onChange} value={credentials.address} placeholder="Enter your address" required />
              </div>
              <div className="input-box">
                <label htmlFor="gender" className="details">Gender</label>
                <input type="text" id="gender" name="gender" onChange={onChange} value={credentials.gender} placeholder="Enter your Gender" required />
              </div>
              <div className="input-box">
                <label htmlFor="aadharNum" className="details">Aadhar Number</label>
                <input type="text" id="aadharNum" name="aadharNum" onChange={onChange} value={credentials.aadharNum} placeholder="Enter your Aadhar Number" required />
              </div>
              <div className="input-box">
                <label htmlFor="panNum" className="details">Pan Number</label>
                <input type="text" id="panNum" name="panNum" onChange={onChange} value={credentials.panNum} placeholder="Enter your Pan number" required />
              </div>
            </div>
            <div className="button">
              <input type="submit" defaultValue="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
