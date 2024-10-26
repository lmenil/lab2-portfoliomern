// Layout.jsx
/* File: Layout.jsx
   Student Name: Lorenzo Jr Menil
   Student ID: 301341544
   Date: 2024-09-21
*/
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg';


const Layout = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-links">
      </div>
      <div className="navbar">
        <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>           
        </ul>
      </div>
    </nav>
    </div>  
  );
};

export default Layout;