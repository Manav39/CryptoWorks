import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo1.png";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <>
        <div className="topbar">
          <div className="navbar-left-content">
            <img src={logo} />
            <h2>
              <Link to="/" className="styling-links">
                CRYPTOWORKS
              </Link>
            </h2>
          </div>
          <div className="navbar-right-content">
            <ul className="contents">
              <li>
                <Link to="/" className="styling-links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/price" className="styling-links">
                  Price
                </Link>
              </li>
              <li>
                <Link to="/news" className="styling-links">
                  News
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" className="styling-links">
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
