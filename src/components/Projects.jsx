import React from "react";
import "./styles/projects.css"
import projectImage1 from "../assets/landing.png"

const Projects = () => {
  return (

    <section id="projects" className="section">
      <h1 className = "projects-header">Projects</h1>
      <div class = "project-container">

        <div class = "project-sub-container">
          <h1>JFitness</h1>
          <h2>Java</h2>
          <div className="project-image">
            <img src={projectImage1} alt= "Project" />
          </div>
          <p>This is my project description</p>
        </div>

        <div class = "project-sub-container">
          <h1>JFitness</h1>
          <h2>Java</h2>
          <div className="project-image">
            <img src={projectImage1} alt= "Project" />
          </div>
          <p>This is my project description</p>
        </div>

        <div class = "project-sub-container">
          <h1>JFitness</h1>
          <h2>Java</h2>
          <div className="project-image">
            <img src={projectImage1} alt= "Project" />
          </div>
          <p>This is my project description</p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
