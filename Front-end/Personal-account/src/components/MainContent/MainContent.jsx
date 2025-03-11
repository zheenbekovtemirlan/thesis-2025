// components/MainContent/MainContent.jsx
import React from 'react';
import './MainContent.css';
import profileImage from '../../assets/image46.png';

const MainContent = () => {
    return (
        <div className="main-container">
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb">
                <button className="breadcrumb-button">Home</button>
                <span className="separator">/</span>
                <button className="breadcrumb-button active">My Account</button>
            </div>

            {/* Profile Container */}
            <div className="profile-container">
                {/* Left Image Section */}
                <div className="image-section">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="profile-name">Loser Kiss</div>
                    <div className="role-tag">Patient/Dentist</div>
                </div>

                {/* Right Form Section */}
                <div className="form-section">
                    <h2 className="form-title">Edit Your Profile</h2>

                    <div className="form-grid">
                        <div className="form-group">
                            <label className="input-label">Email</label>
                            <input
                                type="email"
                                defaultValue="loserkiss@gmail.com"
                                className="editable-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="input-label">Number</label>
                            <input
                                type="tel"
                                defaultValue="+36"
                                className="editable-field"
                            />
                        </div>
                    </div>

                    <div className="password-section">
                        <h3 className="section-subtitle">Password Changes</h3>
                        <input
                            type="password"
                            placeholder="Current Password"
                            className="password-input"
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            className="password-input"
                        />
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            className="password-input"
                        />
                    </div>

                    <div className="form-actions">
                        <button className="cancel-button">Cancel</button>
                        <button className="save-button">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;