import React from 'react';
import './style.scss';

function Header() {
    return (
        <header className="header-section">
            <div className="logo">Logo</div>
            <div className="user-section">
                <div className="search">Search</div>
                <div className="notification">Notification</div>
                <div className="user-profile">User profile</div>
            </div>
        </header>
    );
}

export default Header;
