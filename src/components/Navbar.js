import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for navbar styles

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">
        <Link to="/">Food Waste Management</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/restaurant/login" className="nav-link">Restaurant</Link>
        </li>
        <li className="nav-item">
          <Link to="/ngo/login" className="nav-link">NGO</Link>
        </li>
        <li className="nav-item">
          <Link to="/analytics" className="nav-link">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
