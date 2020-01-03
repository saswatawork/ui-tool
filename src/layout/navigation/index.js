import React from 'react';
import './style.scss';

function Navigation() {
    return (
        <nav className="navigation">
            <a href="#/home">Home</a>
            <a href="#/news">News</a>
            <a href="#/contact">Contact</a>
            <a href="#/about">About</a>
        </nav>
    );
}

export default Navigation;
