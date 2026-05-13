import React from "react";
import "./styles/projects.css";
import ExperienceCard from "./ExperienceCard";
import globalRelayIcon from "../assets/globalrelay.png";
import sozoIcon from "../assets/sozo.png";
import ubcIcon from "../assets/ubc.png";
import { Cursor } from "react-simple-typewriter";

const Experience = () => {
  const experienceData = [
    {
      company: "SOZO Intuition Systems",
      role: "Software Developer Co-op",
      date: "January 2026 - August 2026",
      icon: sozoIcon,
      technologies: [
        "LangGraph",
        "Python",
        "PyTest",
        "TypeScript",
        "React",
        "Docker",
        "AWS",
      ],
    },
    {
      company: "Global Relay",
      role: "Software Developer in Test Co-op",
      date: "January 2025 - August 2025",
      icon: globalRelayIcon,
      technologies: ["Java", "JUnit", "Selenium", "SQL", "Jenkins", "Grafana"],
    },
    {
      company: "UBC Arts ISIT",
      role: "IT Support",
      date: "September 2023 - December 2024",
      icon: ubcIcon,
      technologies: ["ServiceNow", "Office 365"],
    },
  ];

  return (
    <div className="projects-container" id="experience">
      <h1 className="projects-header" style={{ color: "#5c28d7" }}>
        Experience <Cursor id="cursor" />
      </h1>
      <div className="experience-cards-container">
        {experienceData.map((experience) => (
          <ExperienceCard experience={experience} key={experience.company} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
