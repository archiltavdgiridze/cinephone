import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
import saba_phone from "../../assets/LandingPage/saba-phone.jpg"

const Landing = () => {
  return (
    <div className="landing_wrapper">
      <div className="hero-left">
        <h1>International Youth Smart-Film Festival "Adjarian Film Tales"</h1>
        <p>Got a film idea? Wanna use a Smartphne for it?</p>
        <p>Then grab your phone and follow these 3 steps!</p>
        <p>
          Unblock - Press "Record" - Create Smart - Film! and send it to us?
        </p>
        <Link to={"/submission"}>
          <button>Submit films for 2025!</button>
        </Link>
      </div>
      <div className="hero-right">
        <img src={saba_phone} alt="" />
      </div>
    </div>
  );
};

export default Landing;
