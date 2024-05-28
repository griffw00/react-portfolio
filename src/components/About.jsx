import React from "react";
import "./styles/about.css"
import aboutImage from "../assets/about.png"

const About = () => {
  return(
    <div id = "about" className="about-container">
        <div className="about-image">
            <img src={aboutImage} alt= "About" />
        </div>
        <div className="about-text">
            <h1 className = "about-header">
              About Me 👨‍💻
            </h1>
            <p>
            Hey! My name is Griff and I’m currently studying Computer Science (BCS) at the University of British Columbia and working part-time as an IT Support Specialist. I’m eager to bring my skills in React.js, JavaScript, Java, and Python to Software Development roles. During my free time, you’ll catch me at the gym, swimming, playing video games, or diving into my next personal project.
            </p>
        </div>
    </div>
);
};

export default About;
