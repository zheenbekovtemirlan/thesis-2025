// App.jsx
import React from 'react';
import Header from './components/Header';
import SpecialtiesList from './components/SpecialtiesList';
import AppointmentSection from './components/AppointmentSection';
import Footer from './components/Footer';
import './styles/App.css';
import Body from "./components/Body";

function App() {
    return (
        <div className="app-container">
            <Header />
            <SpecialtiesList />
            <Body />
            <AppointmentSection />
            <Footer />
        </div>
    );
}

export default App;