// components/Navbar.jsx
import React from 'react';
import logo from '../assets/Logo.png';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <img src={logo} alt="Company Logo" className="nav-logo" />
            </div>

            <div className="nav-links">
                <a href="#home" className="nav-link">Home</a>
                <a href="#settings" className="nav-link">Settings</a>
                <a href="#reviews" className="nav-link">Reviews</a>
                <a href="#address" className="nav-link">Address</a>
            </div>

            <div className="nav-auth">
                <a href="#account" className="account-button">My Account</a>
                <button className="logout-button">Log Out</button>
            </div>
        </nav>
    );
};

export default Navbar;