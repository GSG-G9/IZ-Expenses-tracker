import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">ourMission</Link>
          </li>
          <li>
            <Link to="/ourMission">landing</Link>
          </li>
          <li>
            <Link to="/tracker">tracker</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
