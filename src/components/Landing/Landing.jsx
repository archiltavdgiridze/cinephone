import React from "react";
import "./Landing.scss";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing_wrapper">
      <div>
        <h1>აჭარული ამბები არის ფესტივალი სმარტ–ფილმების შესახებ</h1>
        <Link to={"/history"}>
          <button>მეტის ნახვა</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
