// components/Footer.jsx
import React from 'react';
import './styles/Footer.css';

const Footer = () => {
    return (
        <footer className="docspot-footer">
            <div className="footer-main">
                <div className="brand-section">
                    <h2 className="footer-logo">DocSpot</h2>
                    <p className="footer-tagline">
                        DocSpot that create more happy in the world, b4h b4h b4h
                    </p>
                </div>

                <div className="quick-links-section">
                    <h3 className="links-heading">Quick Links</h3>
                    <div className="links-grid">
                        <div className="links-column">
                            <a href="/overview">Overview</a>
                            <a href="/features">Features</a>
                            <a href="/pricing">Pricing</a>
                            <a href="/careers">Careers</a>
                            <a href="/help">Help</a>
                            <a href="/privacy">Privacy</a>
                        </div>
                        <div className="contact-column">
                            <div className="contact-item">
                                <span>Contact</span>
                                <p>+1 (234) 567-89-00</p>
                                <p>support@docspot.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Dkey, 4ll rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;