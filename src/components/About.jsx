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
          Hey! My name is Griff and I’m an ex-Microbiologist studying Computer
          Science (BCS) at The University of British Columbia.
        </p>
        <p id="about-desc">
          I just wrapped up an 8 month internship at Global Relay as a Software
          Engineer in Test. I'm excited to carry what I leanred into my next
          role and continue growing!
        </p>
        <p>
          Outside of work, you’ll catch me at the gym, swimming, playing video
          games, or diving into a personal project.
        </p>
      </div>
    </div>
  );
};

export default About;
