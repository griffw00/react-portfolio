import React from "react";
import "./styles/projects.css"
import jfitness from "../assets/jfitness.png"
import smartscience from "../assets/smartscience.png"
import gamerecommender from "../assets/gamerecommender.png"
import reactportfolio from "../assets/reactportfolio.png"
import nativetodo from "../assets/native-todo.png"
import chefbot from "../assets/chefbot.png"
import restapi from "../assets/spring-rest-api.png"
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
      name: 'Mobile Task Tracker',
      technologies: 'React Native, Typescript',
      image: nativetodo,
      link: "https://github.com/griffw00/native-todo-list",
      description: 'My first dabble with mobile applications! Native ToDo is a simple CRUD application build using TypeScript and React Native. Through this mini-project, I was able to learn the fundamentals of TypeScript and learn how to create functional components for mobile applications.',
    },
    {
      name: 'Chef Bot (CIC Hackathon 2024)',
      technologies: 'Python, AWS Bedrock',
      image: chefbot,
      link: "https://github.com/griffw00/CIC-Hackathon",
      description: "During the UBC CIC Hackathon (2024), our team implemented a generative recipe chatbot using AWS Bedrock's foundation models. By applying retrieval-augmented generation (RAG) on a large recipe dataset, Chef Bot suggests recipes in response to user prompts. This project sharpened my Python skills but most importantly taught me how to integrate machine learning models into practical applications. It was an amazing opportunity to explore AWS technologies and experience firsthand how powerful AI can be in creating useful and interactive tools!",
    },
    {
      name: 'RESTful API',
      technologies: 'Java, Spring Boot',
      image: restapi,
      link: "https://github.com/griffw00/spring-boot-rest-api",
      description: "An API that was built using Java and Spring Boot. The API adheres RESTful principle and allows users to perform CRUD operations via HTTP requests. This project was a great way to solidify my Java skills and served as my introduction to the Spring framework.",
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
      description: 'This personal project stemmed from my love for gaming and a desire to find free games during my downtime. Using vanilla JavaScript, HTML, and CSS, I crafted a game recommender that fetches real-time data from Rapid API and parses it for display. It marked my introduction to pure HTML and CSS, alongside API calls. Through this project, I explored the fundamental of RESTful principles.',
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

  