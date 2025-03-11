import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
import AppointmentsSection from './components/AppointmentsSection/AppointmentsSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <Navbar />

            <div className="main-wrapper">
                <div className="content-column">
                    <MainContent />
                    <AppointmentsSection />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;