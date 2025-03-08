// components/Body.jsx
import React from 'react';
import bandageImage from '../assets/003_Bandage.png';
import './styles/Body.css';

const Body = () => {
    return (
        <div className="body-container">
            <img
                src={bandageImage}
                alt="Medical bandage"
                className="bandage-image"
            />
        </div>
    );
};

export default Body;
