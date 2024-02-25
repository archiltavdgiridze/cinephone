import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";
import film_roll from "../../assets/LandingPage/film-flim-roll.png"

const Landing = () => {
  return (
    <div className="landing_wrapper">
      <div className="hero-left">
        <h1>International Smart-Film Festival "Adjarian Film Tales"</h1>
        <p>Got a film idea? Wanna use a Smartphne for it?</p>
        <p>Then grab your phone and follow these 3 steps!</p>
        <p>Unblock - Press "Record" - Create Smart - Film! and send it to us?</p>
        <Link to={"/"}>
          <button>Submit films for 2024!</button>
        </Link>
      </div>
      <div className="hero-right">
        <img src={film_roll} alt="" />
      </div>
    </div>
  );
};

export default Landing;
