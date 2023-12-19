// src/components/Navbar.js
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Your Logo</div>
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
            <Link to="/end-meeting">End Meeting</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
