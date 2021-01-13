/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <p className="logo">
          I<span>Z</span>
          TRACKER
        </p>
        <ul className="nav-bar">
          <li className="nav-links">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-links">
            <Link className="link" to="/about">
              About us
            </Link>
          </li>
          <li className="nav-links">
            <Link className="link" to="/tracker">
              Tracker
            </Link>
          </li>
          <li className="nav-links">
            <Link className="link" to="/contactus">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
