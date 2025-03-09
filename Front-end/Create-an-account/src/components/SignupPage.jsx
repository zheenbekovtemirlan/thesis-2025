import React from 'react';
import './SignupPage.css';
import logo from '../assets/Union.png';

const SignupPage = () => {
    return (
        <div className="signup-container">
            <header className="main-header">
                <div className="logo-container">
                    <img src={logo} alt="DocSpot Logo" className="logo" />
                    <span className="brand-name">DocSpot</span>
                </div>
                <a href="/" className="home-button">Home</a>
            </header>

            <div className="signup-content">
                <h1>Create an account</h1>

                <div className="signup-form">
                    <div className="input-group">
                        <label className="input-label">Email</label>
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Phone number</label>
                        <input type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div className="name-fields">
                        <div className="input-group">
                            <label className="input-label">First name</label>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <label className="input-label">Last name</label>
                            <input type="text"/>
                        </div>
                    </div>

                    <div className="input-group">
                        <label className="input-label">Date of birth</label>
                        <input type="date" />
                    </div>

                    <div className="input-group">
                        <label className="input-label">Sex</label>
                        <div className="gender-selection">
                            <label className="gender-option">
                                <input type="radio" name="sex" value="male" />
                                <span className="radio-circle"></span>
                                Male
                            </label>
                            <label className="gender-option">
                                <input type="radio" name="sex" value="female" />
                                <span className="radio-circle"></span>
                                Female
                            </label>
                        </div>
                    </div>

                    <button className="continue-btn">Continue</button>

                    <div className="separator">
                        <span className="line"></span>
                        <span className="or">or</span>
                        <span className="line"></span>
                    </div>

                    <p className="login-link">
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;