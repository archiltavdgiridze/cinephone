import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">CinePhone LOGO here</Link>
      </div>
      <ul>
        <li>
          <Link to="/">
            <p>Main</p>
          </Link>
        </li>
        <li>
          <Link to="/history">
            <p>History</p>
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <p>Gallery</p>
          </Link>
        </li>
        <li>
          <Link to="/about_us">
            <p>About us</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </li>
        <li>
          <Link to="https://www.fb.com">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
