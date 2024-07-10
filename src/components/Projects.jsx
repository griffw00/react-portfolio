import React from "react";
import "./styles/projects.css";
import jfitness from "../assets/jfitness.png";
import smartscience from "../assets/smartscience.png";
import gamerecommender from "../assets/gamerecommender.png";
import malurl from "../assets/mal_url.png";
import reactportfolio from "../assets/reactportfolio.png";
import nativetodo from "../assets/native-todo.png";
import chefbot from "../assets/chefbot.png";
import restapi from "../assets/cloud_api.png";
import ProjectsAccordion from "./ProjectsAccordion";
import { Cursor } from "react-simple-typewriter";

// const Project = ({ name, technologies, image, description }) => {
//   return (
//     <div className="project-sub-container">
//       <h1 style={{ textAlign: "center" }}>{name}</h1>
//       <h2 style={{ textAlign: "center" }}>{technologies}</h2>
//       <div className="project-image">
//         <img src={image} alt="Project" />
//       </div>
//       <p style={{ textAlign: "center" }}>{description}</p>
//     </div>
//   );
// };

const Projects = () => {
  const projectData = [
    {
      name: "JFitness",
      technologies: "Java, Swing",
      image: jfitness,
      link: "https://github.com/griffw00/java-fitness-app",
      description:
        "Going to the gym is a significant part of my life, which inspired me to create JFitness, an exercise planner designed to help users track their gym schedules and progress. This project was created for CPSC 210 and taught me fundamental programming skills such as Object-Oriented Programming (OOP), unit testing, and good software design principles.",
    },
    {
      name: "Malicious URL Detector",
      technologies: "Python, Flask, scikit-learn",
      image: malurl,
      link: "https://github.com/griffw00/suspicious-url-detector",
      description:
        "After completing CPSC 330, I was excited to apply my Machine Learning knowledge to a real-world problem. Using a dataset with 400,000+ samples, I trained a Random Forest model to identify malicious URLs with a 93% accuracy rate. I then created an easy-to-use interface with Flask and Bootstrap so others can see the model in action. This side project is ongoing, and I’m currently refining it and working on a Google Chrome extension!",
    },
    {
      name: "Chef Bot (CIC Hackathon 2024)",
      technologies: "Python, AWS Bedrock",
      image: chefbot,
      link: "https://github.com/griffw00/CIC-Hackathon",
      description:
        "During the UBC CIC Hackathon (2024), our team implemented an AI chatbot using AWS Bedrock's foundation models. By applying retrieval-augmented generation (RAG) on a large recipe dataset, Chef Bot suggests recipes in response to user prompts. This project was an amazing opportunity to explore AWS technologies, sharpen my python skills, and experience firsthand how powerful AI can be in creating useful and interactive tools!",
    },
    {
      name: "Portfolio",
      technologies: "React",
      image: reactportfolio,
      link: "https://github.com/griffw00/react-portfolio",
      description:
        "My very first personal portfolio! Throughout this project, I've had the opportunity to refine my skills in React and JavaScript. This project served as a platform for me to expand my knowledge base by learning and integrating numerous JavaScript libraries such as React, EmailJS, and Chakra UI. Through the process of building this portfolio, I gained valuable experience in project management, design implementation, and showcasing my skills and projects effectively.",
    },
    {
      name: "Mobile Task Tracker",
      technologies: "React Native, Typescript",
      image: nativetodo,
      link: "https://github.com/griffw00/native-todo-list",
      description:
        "My first mobile application! This mobile task tracker is a CRUD application with an intuitive UI, built using TypeScript and React Native. Through this project, I was able to learn the fundamentals of TypeScript and learn how to create functional components for mobile applications.",
    },
    {
      name: "Cloud Vendor API",
      technologies: "Java, Spring Boot",
      image: restapi,
      link: "https://github.com/griffw00/spring-boot-rest-api",
      description:
        "An API that was built using Java and Spring Boot. My API adheres to RESTful principles and allows users to manage cloud vendor information through HTTP requests. This project was a great way to solidify my Java skills and served as my introduction to the Spring framework.",
    },
    {
      name: "Smart Science (BCS Hackathon 2024)",
      technologies: "React",
      image: smartscience,
      link: "https://github.com/griffw00/bcs-hack-app",
      description:
        "Our team, inspired by our background in the life sciences, created an interactive and educational science tool for children. This hackathon was my first exposure to React and Git, where I gained a solid understanding of React components, state management, hooks, and essential Git operations such as branching, committing changes, and merging code",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-header" style={{ color: "#5c28d7" }}>
        Projects <Cursor id="cursor" />
      </h1>
      <ProjectsAccordion projectData={projectData} />
    </div>
  );
};

export default Projects;
