import React from "react";
import "./styles/projects.css";
import jfitness from "../assets/jfitness.png";
import brightpath from "../assets/brightpath.png";
import ubcgreenbot from "../assets/ubcgreenbot.png";
import videogamelounge from "../assets/videogamelounge.png";
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
      name: "BrightPath",
      technologies:
        "TypeScript, Express, React Native, MongoDB, Llama, OpenRouter",
      image: brightpath,
      link: "https://github.com/griffw00/nwhacks-2025",
      description:
        "BrightPath combines journaling with AI-powered sentiment analysis to transform reflection into actionable growth. It provides personalized insights, visual mood tracking, and timely crisis support. The app makes mental health awareness more engaging, empowering users to improve both emotional and physical well-being.",
    },
    {
      name: "GreenSpeak",
      technologies:
        "Python, Streamlit, AWS Lambda, AWS Bedrock, AWS S3, AWS OpenSearch, Matplotlib",
      image: ubcgreenbot,
      link: "https://github.com/griffw00/sustainabilityGenAI",
      description:
        "GreenSpeak transforms UBC’s energy data into engaging insights with an AWS-powered chatbot and interactive visualizations. Users can ask questions naturally, receive clear answers, and explore trends through colorful, easy-to-read charts. It’s a friendly tool that makes sustainability and innovation more accessible!",
    },
    {
      name: "Video Game Lounge",
      technologies: "JavaScript, Node.js, Express, Oracle",
      image: videogamelounge,
      link: "https://github.com/griffw00/video-game-forum",
      description:
        "A video game discussion forum where users can post, edit, and remove reviews for their favorite games. They can explore existing ratings, filter by genre or score, and discover top games. The platform makes sharing and finding game insights simple and engaging.",
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
      name: "JFitness",
      technologies: "Java, JUnit, Swing",
      image: jfitness,
      link: "https://github.com/griffw00/java-fitness-app",
      description:
        "A dynamic workout scheduler that allows users to create custom exercise plans and adjust routines throughout the week. The app tracks progress and provides a clear overview of upcoming workouts. It makes fitness planning simple, flexible, and motivating!",
    },
    {
      name: "Mobile Task Tracker",
      technologies: "React Native, Typescript",
      image: nativetodo,
      link: "https://github.com/griffw00/native-todo-list",
      description:
        "My first mobile application! This mobile task tracker is a CRUD application with an intuitive UI, built using TypeScript and React Native. Through this project, I was able to learn the fundamentals of TypeScript and learn how to create functional components for mobile applications.",
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
