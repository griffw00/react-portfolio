import React from "react";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <a href="#hero" className="navbar-brand">
        Griff Wong
      </a>
      <nav>
        <ul className="navbar-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
