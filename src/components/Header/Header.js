import React, { createContext, useContext, useState } from "react";
import "./Header.css";
import Logo from "../../assets/logos/Group 1329.png";
import { Link } from "react-router-dom";
import { UserContaxt } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContaxt);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-light">
        <div className="container">
          <img src={Logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-10">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donation">
                  Donation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#subscribe">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/register">
                  {" "}
                  <button type="button" className="btn btn-primary">
                    Register
                  </button>
                </Link>
              </li>

              <li>
                <Link to={'/admin'}>
                <button type="button" className="btn btn-dark">
                  Admin
                </button></Link>
                
              </li>
              <li>
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
