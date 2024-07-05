import React from "react";
import "./styles/about.css"
import aboutImage from "../assets/me.jpeg"
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return(
    <div id = "about" className="about-container">
        <div className="about-image">
              <img src={aboutImage} alt= "About" />
              <div className="icon-container">
                  {/* LinkedIn icon with link */}
                  <a href="https://www.linkedin.com/in/griff-wong" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="about-icon"/>
                  </a>
                  {/* GitHub icon with link */}
                  <a href="https://github.com/griffw00" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="about-icon"/>
                  </a>
                  {/* Email icon with link */}
                  <a href="mailto:griffytech@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="about-icon"/>
                  </a>
              </div>
        </div>
        <div className="about-text">
            <h1 className = "about-header" style={{color: '#5c28d7'}}>
              About Me 👨‍💻
            </h1>
            <p id = "about-desc">
            Hey! My name is Griff and I’m currently studying Computer Science (BCS) at the University of British Columbia and working part-time in Information Technology.  
            </p>
            <p id = "about-desc">
            I'm excited to apply my programming skills and enthusiasm to tech-related internship opportunities for Fall 2024!
            </p>
            <p>
            During my free time, you’ll catch me at the gym, swimming, playing video games, or diving into my next personal project!
            </p>
        </div>
      </div>
);
};

export default About;


