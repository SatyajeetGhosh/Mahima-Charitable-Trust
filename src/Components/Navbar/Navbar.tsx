import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import MahimaLogo from "../../Assets/Other/Mahima_logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header>
        <nav>
          <NavLink to="/" className="logo">
            <img src={MahimaLogo} alt="Mahima Charitable Trust Logo" />
          </NavLink>
          <div className="hamburger">
            <FaBarsStaggered />
          </div>
          <div className="nav-links-container">
            <ul className="nav-menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/causes">Causes</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
