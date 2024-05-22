import React from 'react'
import "./styles/navbar.css"

const Navbar = () => {
    return (
        <div class="navbar-container">
            <nav class="navbar">
                <ul class="nav--list">
                <li class="item"><a href="#">Home</a></li>
                <li class="item"><a href="#about">About</a></li>
                <li class="item"><a href="#">Skills</a></li>
                <li class="item"><a href="#">Projects</a></li>
                <li class="item"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar