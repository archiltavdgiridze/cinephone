import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faTimeline,
  faPaperPlane,
  faImages,
  faCircleInfo,
  faPeopleGroup,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">CinePhone LOGO here</Link>
      </div>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            <p>Main</p>
          </Link>
        </li>
        <li>
          <Link to="/history">
            <FontAwesomeIcon icon={faTimeline} />
            <p>History</p>
          </Link>
        </li>
        <li>
          <Link to="/submission">
            <FontAwesomeIcon icon={faPaperPlane} />
            <p>Submission</p>
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <FontAwesomeIcon icon={faImages} />
            <p>Gallery</p>
          </Link>
        </li>
        <li>
          <Link to="/about_us">
            <FontAwesomeIcon icon={faCircleInfo} />
            <p>About us</p>
          </Link>
        </li>
        <li>
          <Link to="/our_team">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <p>Our Team</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faPhone} />
            <p>Contact</p>
          </Link>
        </li>
        <div className="navbar-social-logo">
          <li>
            <Link to="https://www.fb.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
