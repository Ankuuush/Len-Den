import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}) 
    });
    const json = await response.json();
    if(json.success){
      localStorage.setItem("token",json.authToken)
      navigate('/profile')
  }
  else{
    alert(json.errors);
  }
}
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="back">
            <div className="text">
              <span className="text-1">Complete miles of journey <br /> with one step</span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={handleSubmit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="text" onChange={onChange} value={credentials.email} name="email" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input type="password" onChange={onChange} value={credentials.password} name="password" placeholder="Enter your password" required />
                  </div>
                  <div className="text"><a href="#">Forgot password?</a></div>
                  <div className="button input-box">
                    <input type="submit" defaultValue="Sumbit" />
                  </div>
                  <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
