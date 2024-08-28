import React from "react";
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-link home">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="nav-link about">
            <Link to="/about">About</Link>
          </li> */}
          <li className="nav-link about">
            <Link to="/about">About Class</Link>
          </li>
          <li className="nav-link contact">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-link cart">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
