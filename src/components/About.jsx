import React from "react";
import "./styles/about.css";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="section-grid">
        <p className="label section-label">01 — About</p>
        <div className="section-content">
          <h2 className="about-headline">
            I build software that people actually enjoy using. Currently a
            Software Developer Co-op at SOZO Intuition Systems, shipping
            features at an early-stage startup.
          </h2>
          <div className="about-body">
            <p>
              I studied Computer Science (BCS) at The University of British
              Columbia after a career in microbiology. Previously I completed a
              Software Developer in Test Co-op at a large tech company. I care
              about systems that are reliable, a pleasure to work with, and
              make a positive impact.
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
