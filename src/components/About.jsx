import React from "react";
import "./styles/about.css";
import aboutImage from "../assets/me.jpeg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-image">
        <img src={aboutImage} alt="About" />
        <div className="icon-container">
          {/* LinkedIn icon with link */}
          <a
            href="https://www.linkedin.com/in/griff-wong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="about-icon" />
          </a>
          {/* GitHub icon with link */}
          <a
            href="https://github.com/griffw00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="about-icon" />
          </a>
          {/* Email icon with link */}
          <a href="mailto:griffytech@gmail.com">
            <FaEnvelope className="about-icon" />
          </a>
        </div>
      </div>
      <div className="about-text">
        <h1 className="about-header" style={{ color: "#5c28d7" }}>
          About Me 👨‍💻
        </h1>
        <p id="about-desc">
          Hey! I’m an ex-Microbiologist studying Computer Science (BCS) at The
          University of British Columbia.
        </p>
        <p id="about-desc">
          I am currently a Software Developer Co-op shipping exciting features
          at an early stage startup, and previously completed a Software
          Developer in Test Co-op at a large tech company. I’m passionate about
          building software that makes a positive impact, and I’m always eager
          to learn new technologies and take on new challenges!
        </p>
        <p>
          Outside of work, you’ll catch me at the gym, playing volleyball,
          gaming, or wrangling code.
        </p>
      </div>
    </div>
  );
};

export default About;
