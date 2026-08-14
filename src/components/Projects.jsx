import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./styles/projects.css";

const projectData = [
  {
    name: "BrightPath",
    technologies: [
      "TypeScript",
      "Express",
      "React Native",
      "MongoDB",
      "Llama",
    ],
    link: "https://github.com/griffw00/nwhacks-2025",
    description:
      "Journaling with AI-powered sentiment analysis that turns reflection into actionable growth — personalized insights, mood tracking, and timely crisis support.",
  },
  {
    name: "GreenSpeak",
    technologies: ["Python", "Streamlit", "AWS", "Bedrock", "OpenSearch"],
    link: "https://github.com/griffw00/sustainabilityGenAI",
    description:
      "Turns UBC energy data into conversational insights. An AWS-powered chatbot and interactive charts that make campus sustainability easier to explore.",
  },
  {
    name: "Video Game Lounge",
    technologies: ["JavaScript", "Node.js", "Express", "Oracle"],
    link: "https://github.com/griffw00/video-game-forum",
    description:
      "A discussion forum where players post, edit, and filter game reviews by genre or score — making it simple to share and discover what is actually worth playing.",
  },
  {
    name: "Malicious URL Detector",
    technologies: ["Python", "Flask", "scikit-learn"],
    link: "https://github.com/griffw00/suspicious-url-detector",
    description:
      "A Random Forest model trained on 400,000+ samples to flag malicious URLs at 93% accuracy, with a Flask interface so others can try it out.",
  },
  {
    name: "JFitness",
    technologies: ["Java", "JUnit", "Swing"],
    link: "https://github.com/griffw00/java-fitness-app",
    description:
      "A workout scheduler for custom exercise plans, weekly routine adjustments, and progress tracking — fitness planning that stays flexible.",
  },
  {
    name: "Mobile Task Tracker",
    technologies: ["React Native", "TypeScript"],
    link: "https://github.com/griffw00/native-todo-list",
    description:
      "A mobile CRUD task tracker with a clean UI. Built to learn TypeScript and functional components on React Native.",
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="section-grid">
        <p className="label section-label">03 — Projects</p>
        <div className="section-content project-list">
          {projectData.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-top">
                <h3 className="project-card-title">{project.name}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-link"
                  aria-label={`Open ${project.name} on GitHub`}
                >
                  <FiArrowUpRight />
                </a>
              </div>
              <p className="project-card-description">{project.description}</p>
              <div className="tech-list">
                {project.technologies.map((technology) => (
                  <span className="tech-tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
