import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to="/">ourMission</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/tracker">tracker</Link>
          </li>
          <li>
            <Link to="/contactus">contact us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
