import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">CinePhone</div>
      <ul>
        <li>
          <Link to="/">
            <p>მთავარი</p>
          </Link>
        </li>
        <li>
          <Link to="/events">
            <p>ღონისძიებები</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <p>კონტაქტი</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
