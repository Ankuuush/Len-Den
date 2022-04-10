import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";


const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans"
          rel="stylesheet"
        />
        {/* Background & animion & navbar & title */}
        <div className="container-fluid">
          {/* Background animtion*/}
          <div className="background">
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
            <div className="cube" />
          </div>
          {/* header */}
          <header>
            {/* navbar */}
            <nav>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            {/* logo */}
            <div className="logo">
              <span>LB</span>
            </div>
            {/* title & content */}
            <section className="header-content">
              <h1>Welcome to Len-Den</h1>
              <p>
                {" "}
                Begin your financial adventure
                <br />
                Let's get you onboard!!
              </p>
              <button onClick={() => navigate("/login")}>Log In</button>
              <button onClick={() => navigate("/signup")}>Sign Up</button>
            </section>
          </header>
        </div>
      </div>
    </>
  );
};

export default Home;
