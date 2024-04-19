import React, { useState } from "react";
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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AFT_logo from "../../assets/other/AFT_logo.png";

const NavbarElem = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  return (
    <Navbar expand={'lg'} className="bg-body-tertiary">
      <Container fluid>
        <div className="logo">
          <Link to="/">
            <img src={AFT_logo} alt="" />
          </Link>
        </div>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} onClick={() => setShowOffcanvas(!showOffcanvas)} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
          show={showOffcanvas}
          onHide={handleOffcanvasClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="navv flex-grow-1 pe-3">
              <ul>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faHouse} />
                    <p>Main</p>
                  </Link>
                </li>
                <li onClick={handleOffcanvasClose}>
                  <Link to="/history">
                    <FontAwesomeIcon icon={faTimeline} />
                    <p>History</p>
                  </Link>
                </li>
                <li onClick={handleOffcanvasClose}>
                  <Link to="/submission">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <p>Submission</p>
                  </Link>
                </li>
                <li onClick={handleOffcanvasClose}>
                  <Link to="/gallery">
                    <FontAwesomeIcon icon={faImages} />
                    <p>Gallery</p>
                  </Link>
                </li>
                <li onClick={handleOffcanvasClose}>
                  <Link to="/about_us">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <p>About us</p>
                  </Link>
                </li>
                <li onClick={handleOffcanvasClose}>
                  <Link to="/our_team">
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    <p>Our Team</p>
                  </Link>
                </li>
                <li onClick={handleOffcanvasClose}>
                  <Link to="/contact">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>Contact</p>
                  </Link>
                </li>
              </ul>
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
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarElem;
