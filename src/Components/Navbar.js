import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar shadow">
        <div className="navbar-container">
          <NavLink
            to="/"
            className="navbar-logo pb-3"
            onClick={closeMobileMenu}
          >
            Portfo<span>lio.</span>
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
                exact={true}
                activeClassName="is-active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="is-active"
              >
                About Me
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/skills"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="is-active"
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="is-active"
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClassName="is-active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
