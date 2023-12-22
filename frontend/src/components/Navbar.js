// src/components/Navbar.js
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ViXR Inc</div>
      <ul className="navbar-menu">
        <li>
          <Link to="/create-meeting">Create Meeting</Link>
        </li>
        <li>
             <Link to="/create-room">Create Room</Link>
        </li>
        <li>
             <Link to="/start-meeting">Start Meeting</Link>
        </li>
        <li>
             <Link to="/join-meeting">Join Meeting</Link>
        </li>
        <li>
          <Link to="/start-experience">Start Experience</Link>
        </li>
        <li>
             <Link to="/left-meeting">Left Meeting</Link>
        </li>
        <li>
            <Link to="/end-meeting">End Meeting</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
