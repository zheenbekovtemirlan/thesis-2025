// Login.jsx
import React from 'react';
import './Login.css';
import logo from '../../assets/Union.png';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-header">
                    <img
                        src={logo}
                        alt="Company Logo"
                        className="login-logo"
                    />
                    <h1>Log in to your account</h1>
                    <p className="subheading">Welcome back! Please enter your details.</p>
                </div>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                        <p className="input-hint">This is a hint text to help user.</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="········"
                        />
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#forgot-password" className="forgot-password">Forgot password</a>
                    </div>

                    <button type="submit" className="signin-button">Sign in</button>

                    <div className="signup-link">
                        Don’t have an account? <a href="#signup">Sign up</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;