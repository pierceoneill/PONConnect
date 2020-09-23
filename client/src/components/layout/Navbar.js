import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href='index.html'>
                    <i className="fas fa-code" /> DevConnector
                </a>
            </h1>
            <ul>
                <li><a href="profiles.html">Developers</a></li>
            </ul>

        </nav>
    )
}

export default Navbar
