import React from "react";
import "./styles/about.css";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="section-grid">
        <p className="label section-label">01 — About</p>
        <div className="section-content">
          <h2 className="about-headline">
            I love creating Software that people use! Currently a
            Software Developer Co-op at SOZO Intuition Systems, shipping
            features at an early-stage startup.
          </h2>
          <div className="about-body">
            <p>
              I studied Computer Science (BCS) at The University of British
              Columbia after a career in microbiology. Previously, I completed a Software Developer in Test Co-op at Global Relay, where I worked on testing and automation for enterprise communication software. 
              I care a lot about systems that are reliable and make a positive impact.
            </p>
            <p>
              Outside of work, you’ll catch me at the gym, playing volleyball,
              gaming, or wrangling code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
