import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
        <Link className="link" to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar