import React, { useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "../style/navigation.css";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => setShowLinks(!showLinks);

  return (
    <div className="nav_container">
        <Nav className="nav__bar container-xxl my_nav_container">
          <div className="nav-logo">
            <Link to="/" className="nav-logo">
              <img src="/assets/Gabe.png" alt="" />
            </Link>
          </div>
          <div className="nav__container">
            <div className="menu-ham">
              <span className="hamburger" onClick={toggleMenu}>
                {showLinks ? <FaTimes /> : <FaBars />}
              </span>
            </div>
            <ul className={showLinks ? "nav-menu active animate" : "nav-menu hide-smooth"}>
              <Link to="/" className="nav-link">
                <li className="nav-item">Home</li>
              </Link>
              <Link to="/contact" className="nav-link">
                <li className="nav-item">Contact</li>
              </Link>
            </ul>
          </div>
        </Nav>
    </div>
  );
};
export default Navigation;
