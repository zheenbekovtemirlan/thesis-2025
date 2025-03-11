// components/AppointmentsSection/AppointmentsSection.jsx
import React from 'react';
import './AppointmentsSection.css';
import appointmentImage from '../../assets/heartpill.png';

const AppointmentsSection = () => {
    return (
        <div className="appointments-container">
            {/* Blue Box Section */}
            <div className="blue-box-container">
                <div className="blue-box">
                    <img
                        src={appointmentImage}
                        alt="Appointment Visual"
                        className="appointment-visual"
                    />
                    <button className="appointments-button">
                        My Appointments
                    </button>
                </div>
                <span className="online-status">Online</span>
            </div>

            {/* Right Side Text */}
            <div className="registration-prompt">
                <p className="prompt-text">
                    Are you not yet registered for an appointment? Book an appointment today.<br />
                </p>
            </div>
        </div>
    );
};

export default AppointmentsSection;