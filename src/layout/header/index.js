import React from 'react';
import './style.scss';

function Header() {
    return (
        <header className="header-section">
            <div className="logo">Logo</div>
            <div className="user-section">
                <div className="search user-section_item">Search</div>
                <div className="notification user-section_item">Notification</div>
                <div className="user-profile user-section_item">User profile</div>
            </div>
        </header>
    );
}

export default Header;
