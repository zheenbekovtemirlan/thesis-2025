// Layout/Layout.jsx
import React from 'react';
import './Layout.css';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';

const Layout = () => {
    return (
        <div className="account-container">
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default Layout;