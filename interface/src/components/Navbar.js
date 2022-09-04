import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { loginStatus, loginCbHandler } = props;

  const loginHandler = () => {
    loginCbHandler(true);
  };

  const logoutHandler = () => {
    localStorage.clear();
    loginCbHandler(false);
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-light shadow-lg p-3 mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                {loginStatus ? (
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => logoutHandler()}
                  >
                    Logout
                  </a>
                ) : (
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => loginHandler()}
                  >
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
