import React from "react";
import "./styles/projects.css"
import jfitness from "../assets/jfitness.png"
import smartscience from "../assets/smartscience.png"
import gamerecommender from "../assets/gamerecommender.png"
import reactportfolio from "../assets/reactportfolio.png"
import nativetodo from "../assets/native-todo.png"
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
      technologies: 'Java, Swing',
      image: jfitness,
      link: "https://github.com/griffw00/java-fitness-app",
      description: 'Going to the gym is a significant part of my life, which inspired me to create JFitness, an application designed to help users track their gym schedules and progress. This project was my first personal project and taught me several key concepts, including Object-Oriented Programming (OOP), data persistence, and the implementation of a graphical user interface (GUI).',
    },
    {
      name: 'Portfolio',
      technologies: 'React',
      image: reactportfolio,
      link: "https://github.com/griffw00/react-portfolio",
      description: "My very first attempt at creating a personal portfolio! Throughout this project, I've had the opportunity to refine my skills in React and JavaScript. This project served as a platform for me to expand my knowledge base by learning and integrating libraries such as EmailJS, dotenv, and ChakraUI. Through the process of building this portfolio, I gained valuable experience in project management, design implementation, and showcasing my skills and projects effectively.",
    },
    {
      name: 'Smart Science (BCS Hackathon 2024)',
      technologies: 'React',
      image: smartscience,
      link: "https://github.com/griffw00/bcs-hack-app",
      description: 'Our team, inspired by our background in the life sciences, created an interactive and educational science tool for children. This hackathon was my first exposure to React and Git, where I gained a solid understanding of React components, state management, and hooks, as well as essential Git operations such as branching, committing changes, and merging code',
    },
    {
      name: 'Random Game Generator',
      technologies: 'HTML, CSS, Javascript',
      image: gamerecommender,
      link: "https://github.com/griffw00/game_generator",
      description: 'This personal project stemmed from my love for gaming and a desire to find free games during my downtime. Using Vanilla JavaScript, HTML, and CSS, I crafted a game recommender that fetches real-time data from Rapid API and parses it for display. It marked my introduction to pure HTML and CSS, alongside API calls. Through this project, I explored the fundamental of RESTful principles.',
    },
    {
      name: 'Native ToDo',
      technologies: 'React Native, Typescript',
      image: nativetodo,
      link: "https://github.com/griffw00/native-todo-list",
      description: 'A mobile ToDo application built using React Native and Typescript. Coming soon! :)',
    },
  ];

  return (
    <div className="projects-container" id = "projects">
      <h1 className="projects-header"> Projects</h1>
      <ProjectsAccordion projectData = {projectData}/>
    </div>
  );
};

export default Projects;

  