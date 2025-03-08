// components/Header.jsx
import React from 'react';
import Navbar from './Navbar';
import './styles/Header.css';
import doctorImage from '../assets/051_Doctor 1.png';

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <div className="header-content">
                <div className="header-text">
                    <h1>Book local dentists</h1>
                    <p>Who take your insurance</p>
                </div>
                <div className="header-image-container">
                    <img
                        src={doctorImage}
                        alt="Medical Professional"
                        className="header-image"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;