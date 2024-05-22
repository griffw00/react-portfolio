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
            I'm currently pursuing a second degree in computer science at the University of British Columbia, building upon my previous background in Microbiology and Immunology.
            Passionate about software development, I'm actively seeking internships to expand my skillset. 
            In my free time, you can find me playing soccer, hiking, gaming, or swimming.
            </p>
        </div>
    </div>
);
};

export default About;
