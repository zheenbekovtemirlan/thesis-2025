// components/AppointmentSection.jsx
import React from 'react';
import './styles/AppointmentSection.css';
import calendarIcon from '../assets/3dicons-calendar-dynamic-gradient.png';
import pillsIcon from '../assets/50.png';

const AppointmentSection = () => {
    return (
        <section className="appointment-section">
            <div className="appointment-container">
                {/* Left Section - Book Appointment */}
                <div className="appointment-half left-section">
                    <div className="content-wrapper">
                        <h2 className="section-title">
                            Book an appointment today,
                            <span className="highlight"> Online.</span>
                        </h2>
                        <p className="section-subtitle">Before it's too late</p>
                        <button className="cta-button">
                            See availability
                            <img src={calendarIcon} alt="Calendar" className="cta-icon" />
                        </button>
                    </div>
                    <img src={calendarIcon} alt="Calendar" className="large-image" />
                </div>

                {/* Right Section - Reviews */}
                <div className="appointment-half right-section">
                    <img src={pillsIcon} alt="Medical" className="large-image" />
                    <div className="content-wrapper">
                        <h2 className="section-title">
                            Read reviews from users
                        </h2>
                        <button className="cta-button secondary">
                            Read Reviews
                            <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentSection;
