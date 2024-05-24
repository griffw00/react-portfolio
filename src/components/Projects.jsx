import React from "react";
import "./styles/projects.css"
import projectImage1 from "../assets/landing.png"
import ProjectsAccordion from './ProjectsAccordion';


const Project = ({ name, technologies, image, description }) => {
  return (
    <div className="project-sub-container">
      <h1 style={{ textAlign: 'center' }}>{name}</h1>
      <h2 style={{ textAlign: 'center' }}>{technologies}</h2>
      <div className="project-image">
        <img src={image} alt="Project" />
      </div>
      <p style = {{textAlign : 'center'}}>{description}</p>
    </div>
  );
};

const Projects = () => {
  const projectData = [
    {
      name: 'JFitness',
      technologies: 'Java',
      image: projectImage1,
      description: 'This is my project description. This is my project description. This is my project description. This is my project description. This is my project description. This is my project description.',
    },
    {
      name: 'Portfolio',
      technologies: 'React, Chakra',
      image: projectImage1,
      description: "You're looking at it!",
    },
    {
      name: 'Game Generator',
      technologies: 'HTML, CSS, Javascript',
      image: projectImage1,
      description: 'This is my project description',
    },
  ];

  return (
    <div className="projects-container" id = "projects">
      <h1 className="projects-header"> Projects</h1>
      <ProjectsAccordion projectData = {projectData}/>
    </div>
  );

  // return (
  //     <section id="projects" className="section">
  //     <h1 className="projects-header">Projects</h1>
  //     <div className="project-container">
  //       {projectData.map((project, index) => (
  //         <Project key={index} {...project} />
  //       ))}
  //     </div>
  //   </section>
  // );

};

export default Projects;

  