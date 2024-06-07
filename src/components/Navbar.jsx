import React from 'react'
import "./styles/navbar.css"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul className="nav--list">
                <li className="item"><a href="#hero">Home</a></li>
                <li className="item"><a href="#about">About</a></li>
                <li className="item"><a href="#projects">Projects</a></li>
                <li className="item"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar